import express from 'express'
import Map from '@/server/models/Map'
import createCampaignFilter from '@/utilities/createCampaignFilter'
import omit from '@/utilities/omit'
import pluck from '@/utilities/pluck'

const loadMap = (slug, campaign) => {
  const campaignFilter = createCampaignFilter(campaign)
  return Map.findOne({
    $and: [
      campaignFilter,
      { slug },
    ],
  })
}

export const permissions = (...required) => async (request, response, next) => {
  const { campaign, subdomain, params: { slug } } = request
  const map = await loadMap(slug, campaign)
    .populate('campaign', 'subdomain title')
    .exec()
  const { isEditor, isOwner, isViewer } = campaign

  if (required.includes('view') && !isViewer) {
    return response.status(401).json({
      message: `This content is private to the ${subdomain} campaign.`,
    })
  }
  if (required.includes('edit') && !isEditor) {
    return response.status(401).json({
      message: `You do not have permission to edit the ${subdomain} campaign.`,
    })
  }
  if (map && map.secret && !isOwner) {
    return response.status(401).json({
      message: `This content is secret! Only owners of the ${campaign.subdomain} campaign can see or edit it.`,
    })
  }

  Object.assign(request, {
    campaign,
    isEditable: isEditor,
    isOwner,
    isVisible: isViewer,
    map,
    slug,
  })

  return next()
}

export const getMap = async (request, response) => {
  const { campaign, isEditable, isOwner, slug } = request
  let { map } = request

  if (!map) {
    map = omit(await new Map({ slug }).toJSON(), '_id')
  } else {
    map = await map.toJSON(campaign)
  }

  return response.status(200).json({
    ...map,
    campaign: pluck(map.campaign, '_id', 'subdomain', 'title'),
    isEditable,
    isOwner,
  })
}
export const upsertMap = async (request, response) => {
  const {
    campaign,
    isEditable,
    isOwner,
    slug,
  } = request
  let { map, body: updates } = request
  updates = {
    ...omit(updates, '_id', 'slug'),
    campaign: campaign._id,
    slug,
  }
  if (!request.isOwner) {
    delete updates.secret // Only owners can set this field
  }

  if (map && map.campaign && map.campaign._id.equals(campaign._id)) {
    map.set(updates)
  } else {
    map = new Map(updates)
  }

  const { _id } = await map.save()
  const saved = await Map.findOne({ _id })
    .populate('campaign', 'subdomain title')
    .exec()
  return response.status(200).json({ ...await saved.render(), isEditable, isOwner })
}
export const deleteMap = async (request, response) => {
  const { map } = request
  if (map) { await map.delete() }
  return response.status(204).send()
}

const controller = express()
controller.get('/:slug', permissions('view'), getMap)
controller.post('/:slug', permissions('edit'), upsertMap)
controller.delete('/:slug', permissions('edit'), deleteMap)
export default controller
