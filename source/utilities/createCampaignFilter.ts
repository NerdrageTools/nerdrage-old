import { ICampaign } from '~/server/schema/ICampaign'

interface IFilter {
	$or: { campaign: string | null }[],
}
export const createCampaignFilter = ({ _id, sources }: ICampaign): IFilter => {
	if (!_id) return {} as IFilter
	return {
		$or: [
			{ campaign: _id },
			...(sources.map(source => ({ campaign: source._id! }))),
			{ campaign: null },
		],
	}
}
