import mongoose, { Aggregate, FilterQuery } from 'mongoose'
import { ICampaignData } from '~/server/models/Campaign'
import { getId } from './getId'

type Options<T> = {
	aggregation?: Aggregate<T>[],
	castAsModel?: boolean,
	filter?: FilterQuery<T>,
}

export const loadByCampaign = async <T>(
	modelName: string,
	campaign: ICampaignData,
	options: Options<T>,
): Promise<T[]> => {
	const Model = mongoose.models[modelName]
	if (!Model) return []

	const { aggregation = [], castAsModel = true, filter = {} } = options
	const campaignIds = [getId(campaign), ...(campaign.sources ?? []).map(getId)]

	const documents = await Model.aggregate<T>([
		{ $match: { $and: [{ campaign: { $in: campaignIds } }, filter] } },
		{ $addFields: { campaignPriority: { $indexOfArray: [campaignIds, '$campaignId'] } } },
		{ $sort: { campaignPriority: -1 } },
		{ $group: { id: '$slug', first: { $first: '$$ROOT' } } },
		{ $replaceRoot: { newRoot: '$first' } },
		...aggregation,
	])

	return castAsModel
		? documents.map(document => new Model().init(document))
		: documents
}
