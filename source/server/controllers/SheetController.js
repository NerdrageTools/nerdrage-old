import express from 'express'
import Sheet from '@/server/models/Sheet'
import createCampaignFilter from '@/utilities/createCampaignFilter'
import pluck from '@/utilities/pluck'

export const getSheet = async (slug, campaign, user = {}) => {
  const { isAdmin } = user
  const sheet = await Sheet.findOne({ campaign, slug })
    .populate('campaign', 'subdomain title')
    .populate('ownedBy', 'name username')
    .exec()

  const isOwner = Boolean(
    isAdmin || !sheet
    || (user._id && user._id.equals(sheet.ownedBy._id))
    || campaign.isOwner
  )
  const isEditor = isOwner
  const isVisible = Boolean(
    isAdmin || isOwner
    || (sheet && !sheet.secret && (campaign.isParticipant || !campaign.secret))
  )

  return {
    ...(sheet ? sheet.toJSON() : {}),
    isEditor,
    isOwner,
    isVisible,
  }
}

export const permissions = (...required) => async (request, response, next) => {
  const { campaign, params: { slug }, subdomain, user } = request
  const sheet = await getSheet(slug, campaign, user)

  if (sheet._id) {
    if (required.includes('view') && !sheet.isVisible) {
      return response.status(401).json({
        message: `This content is private to the ${subdomain} campaign.`,
      })
    }
    if (required.includes('edit') && !sheet.isEditor) {
      return response.status(401).json({
        message: `You do not have permission to edit the ${subdomain} campaign.`,
      })
    }
    if (sheet.secret && !sheet.isEditor) {
      return response.status(401).json({
        message: `This sheet is secret! Only its owner and owners of the ${campaign.subdomain} campaign can see or edit it.`,
      })
    }
  }

  request.sheet = sheet
  request.slug = slug
  return next()
}
export const getSheetRequest = async (request, response) => {
  const { campaign = {}, query, sheet = {}, slug, subdomain } = request
  if (!sheet._id && !campaign.isParticipant) {
    return response.status(404).json({
      ...sheet,
      message: `Unable to find sheet '${slug}' in the ${subdomain} campaign.`,
    })
  }

  if (!sheet._id && query.template) {
    const campaignFilter = createCampaignFilter(campaign)
    const template = (
      await Sheet.findOne({
        $and: [campaignFilter, { slug: query.template }],
      }, 'data layout')
    ).toJSON()
    if (template._id) Object.assign(sheet, pluck(template, 'data', 'layout'))
  }

  return response.status(200).json(sheet)
}
export const upsertSheet = async (request, response) => {
  const { body, campaign, sheet, slug, user } = request
  const creating = !sheet._id

  const updates = {
    ...pluck(body, 'data', 'layout', 'secret', 'template', 'title'),
  }

  if (creating) {
    await Sheet.create({
      ...updates,
      campaign: campaign._id,
      ownedBy: user._id,
      slug,
    })
  } else {
    const saved = await Sheet.findOne({ _id: sheet._id })
    Object.assign(saved, updates)
    await saved.save()
  }

  return response.status(200).json({
    ...(await getSheet(slug, campaign._id, user)),
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
