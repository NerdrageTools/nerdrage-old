import mongoose from 'mongoose'

export default (model, campaign, {
	aggregation = [],
	castAsModel = true,
	filter = {},
}) => {
	const Model = mongoose.models[model]
	if (!Model) return undefined
	const campaignIds = [...campaign.sources.map(source => source._id), campaign._id]
	return Model.aggregate([
		{ $match: { $and: [{ campaign: { $in: campaignIds } }, filter] } },
		{ $addFields: { campaignPriority: { $indexOfArray: [campaignIds, '$campaignId'] } } },
		{ $sort: { campaignPriority: -1 } },
		{ $group: { _id: '$slug', first: { $first: '$$ROOT' } } },
		{ $replaceRoot: { newRoot: '$first' } },
		...aggregation,
	]).then(documents => (
		castAsModel ? documents.map(document => new Model().init(document)) : documents
	))
}
