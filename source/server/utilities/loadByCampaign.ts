import mongoose, { Aggregate, FilterQuery } from 'mongoose'
import { ICampaign } from '../schema/ICampaign'

type Options<T> = {
	aggregation?: Aggregate<T>[],
	castAsModel?: boolean,
	filter?: FilterQuery<T>,
}

export const loadByCampaign = async <T>(
	modelName: string,
	campaign: ICampaign,
	options: Options<T>,
): Promise<T[]> => {
	const Model = mongoose.models[modelName]
	if (!Model) return []

	const { aggregation = [], castAsModel = true, filter = {} } = options
	const campaignIds = [...campaign.sources.map(source => source._id), campaign._id]

	const documents = await Model.aggregate<T>([
		{ $match: { $and: [{ campaign: { $in: campaignIds } }, filter] } },
		{ $addFields: { campaignPriority: { $indexOfArray: [campaignIds, '$campaignId'] } } },
		{ $sort: { campaignPriority: -1 } },
		{ $group: { _id: '$slug', first: { $first: '$$ROOT' } } },
		{ $replaceRoot: { newRoot: '$first' } },
		...aggregation,
	])

	return castAsModel
		? documents.map(document => new Model().init(document))
		: documents
}
