import express from 'express'
import Sheet from '@/server/models/Sheet'
import omit from '@/utilities/omit'

const getSheet = async (slug, campaign, user) => {
  const sheet = await Sheet.findOne({ campaign, slug })
    .populate('campaign', 'domain title')
    .populate('ownedBy', 'name username')
    .exec()

  const isOwner = !sheet || sheet.ownedBy === user._id || campaign.isOwner
  const isEditor = isOwner || campaign.isEditor
  const isVisible = isOwner || (campaign.isViewer && sheet && !sheet.secret)

  return {
    ...(sheet ? sheet.toJSON() : {}),
    isEditor,
    isOwner,
    isVisible,
  }
}

export const permissions = (...required) => async (request, response, next) => {
  const { campaign, domain, params: { slug }, user } = request
  const sheet = await getSheet(slug, campaign._id, user)

  if (sheet && required.includes('view') && !sheet.isVisible) {
    return response.status(401).json({
      message: `This content is private to the ${domain} campaign.`,
    })
  }
  if (sheet && required.includes('edit') && !sheet.isEditor) {
    return response.status(401).json({
      message: `You do not have permission to edit the ${domain} campaign.`,
    })
  }
  if (sheet && sheet.secret && !sheet.isEditor) {
    return response.status(401).json({
      message: `This sheet is secret! Only its owner and owners of the ${campaign.domain} campaign can see or edit it.`,
    })
  }

  Object.assign(request, {
    sheet,
    slug,
  })

  return next()
}
export const getSheetRequest = async (request, response) => {
  const { campaign, domain, sheet, slug } = request
  if (!sheet._id && !campaign.isParticipant) {
    return response.status(404).json({
      ...sheet,
      message: `Unable to find sheet '${slug}' in the ${domain} campaign.`,
    })
  }

  return response.status(200).json(sheet)
}
export const upsertSheet = async (request, response) => {
  const { body, campaign, slug, user } = request
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
  const saved = await getSheet(slug, campaign._id, user)

  return response.status(200).json({
    ...saved.toJSON(),
    isEditor: creating ? true : sheet.isEditor,
    isOwner: creating ? true : sheet.isOwner,
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
