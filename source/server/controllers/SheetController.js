import express from 'express'
import Sheet from '@/server/models/Sheet'
import omit from '@/utilities/omit'

export const permissions = (...required) => async (request, response, next) => {
  const { campaign, domain, session: { _id: userId, isAdmin }, params: { slug } } = request
  const sheet = await Sheet.findOne({ campaign: campaign._id, slug })
    .populate('campaign', 'domain title')
    .populate('ownedBy', 'name username')
    .exec()

  const isParticipant = campaign.isParticipant(userId) || isAdmin
  const isOwner = (sheet && sheet.ownedBy.equals(userId)) || campaign.isOwnedBy(userId)
  const isEditable = isOwner || campaign.isOwnedBy(userId) || isAdmin
  const isVisible = (campaign.isVisibleTo(userId) && sheet && sheet.public) || isOwner || isAdmin

  if (sheet && required.includes('view') && !isVisible) {
    return response.status(401).json({
      message: `This content is private to the ${domain} campaign.`,
    })
  }
  if (sheet && required.includes('edit') && !isEditable) {
    return response.status(401).json({
      message: `You do not have permission to edit the ${domain} campaign.`,
    })
  }
  if (sheet && !sheet.public && !isEditable) {
    return response.status(401).json({
      message: `This sheet is secret! Only its owner and owners of the ${campaign.domain} campaign can see or edit it.`,
    })
  }

  Object.assign(request, {
    campaign,
    isEditable,
    isOwner,
    isParticipant,
    isVisible,
    sheet,
    slug,
  })

  return next()
}
export const getSheet = async (request, response) => {
  const { domain, isEditable, isOwner, isParticipant, sheet, slug } = request
  if (!sheet) {
    return response.status(404).json({
      isEditable: isParticipant,
      isOwner,
      message: `Unable to find sheet '${slug}' in the ${domain} campaign.`,
    })
  }

  return response.status(200).json({ ...sheet.toJSON(), isEditable, isOwner, isParticipant })
}
export const upsertSheet = async (request, response) => {
  const { body, campaign, isEditable, isOwner, session: { _id: userId }, slug } = request
  let { sheet } = request
  const creating = !sheet

  const updates = {
    ...omit(body, '_id', 'slug'),
    campaign: campaign._id,
    slug,
  }

  if (creating) {
    sheet = new Sheet({
      ...updates,
      campaign: campaign._id,
      ownedBy: userId,
    })
  } else {
    sheet.set(updates)
  }

  const { _id } = await sheet.save()
  const saved = await Sheet.findOne({ _id })
    .populate('campaign', 'domain title')
    .populate('ownedBy', 'name username')
    .exec()
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
controller.get('/:slug', permissions('view'), getSheet)
controller.post('/:slug', permissions('edit'), upsertSheet)
controller.delete('/:slug', permissions('edit'), deleteSheet)
export default controller
