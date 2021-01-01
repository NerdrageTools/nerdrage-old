import { Ref } from '@typegoose/typegoose'
import { Campaign, ICampaignData } from '~/server/models/Campaign'
import { getId } from '~/server/utilities/getId'

export interface ICampaignFilter { campaign: { $in: Ref<Campaign>[] } }

export const createCampaignFilter = (campaign: ICampaignData): ICampaignFilter => {
	const ids = [getId(campaign), ...(campaign.sources ?? []).map(getId)]
	return { campaign: { $in: ids } }
}
