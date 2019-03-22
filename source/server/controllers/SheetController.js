import express from 'express'
import Sheet from '@/server/models/Sheet'
import omit from '@/utilities/omit'

const getSheet = async (slug, campaign) => Sheet.findOne({ campaign, slug })
  .populate('campaign', 'domain title')
  .populate('ownedBy', 'name username')
  .exec()

export const permissions = (...required) => async (request, response, next) => {
  const { campaign, domain, params: { slug } } = request
  const { isEditor, isOwner, isParticipant, isViewer } = campaign
  const sheet = await getSheet(slug, campaign._id)

  if (sheet && required.includes('view') && !isViewer) {
    return response.status(401).json({
      message: `This content is private to the ${domain} campaign.`,
    })
  }
  if (sheet && required.includes('edit') && !isEditor) {
    return response.status(401).json({
      message: `You do not have permission to edit the ${domain} campaign.`,
    })
  }
  if (sheet && sheet.secret && !isEditor) {
    return response.status(401).json({
      message: `This sheet is secret! Only its owner and owners of the ${campaign.domain} campaign can see or edit it.`,
    })
  }

  Object.assign(request, {
    campaign,
    isEditor,
    isOwner,
    isParticipant,
    isViewer,
    sheet,
    slug,
  })

  return next()
}
export const getSheetRequest = async (request, response) => {
  const { domain, isEditor, isOwner, isParticipant, sheet, slug } = request
  if (!sheet) {
    return response.status(404).json({
      isEditable: isParticipant,
      isOwner,
      message: `Unable to find sheet '${slug}' in the ${domain} campaign.`,
    })
  }

  return response.status(200).json({
    ...sheet.toJSON(),
    isEditable: isEditor,
    isOwner,
    isParticipant,
  })
}
export const upsertSheet = async (request, response) => {
  const { body, campaign, isEditable, isOwner, user, slug } = request
  let { sheet } = request
  const creating = !sheet

  const updates = {
    ...omit(body, '_id', 'campaign', 'ownedBy', 'slug'),
    slug,
  }

  if (creating) {
    sheet = new Sheet({
      ...updates,
      campaign: campaign._id,
      ownedBy: user._id,
    })
  } else {
    sheet.set(updates)
  }

  await sheet.save()
  const saved = await getSheet(slug, campaign._id)

  return response.status(200).json({
    ...saved.toJSON(),
    isEditable: creating ? true : isEditable,
    isOwner: creating ? true : isOwner,
  })
}
export const deleteSheet = async (request, response) => {
  const { campaign, slug } = request
  await Sheet.findOneAndDelete({ campaign: campaign._id, slug })

  return response.status(204).send()
}

const controller = express()
controller.get('/:slug', permissions('view'), getSheetRequest)
controller.post('/:slug', permissions('edit'), upsertSheet)
controller.delete('/:slug', permissions('edit'), deleteSheet)
export default controller
