import { prop, queryMethod, Ref, ReturnModelType } from '@typegoose/typegoose'
import { QueryMethod } from '@typegoose/typegoose/lib/types'
import { Campaign } from '~/server/models/Campaign'
import { DocumentBase, IDocumentBaseData } from '~/server/models/DocumentBase'
import { User } from '~/server/models/User'
import { getId } from '~/server/utilities/getId'

export interface CampaignHelpers {
	byCampaign: QueryMethod<typeof byCampaign>,
}

const NO_CAMPAIGN = getId('0'.repeat(24))

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function byCampaign<
	TData extends ICampaignDocumentBaseData = ICampaignDocumentBaseData
>(
	// @ts-expect-error - ReturnModelType has a poor/incorrect restriction
	this: ReturnModelType<CampaignDocumentBase<TData>, CampaignHelpers>,
	sources: Ref<Campaign>[],
) {
	if (!sources?.length) { return this.find({ campaign: NO_CAMPAIGN }) }
	const ids = sources.map(getId)
	return this.find({ campaign: { $in: ids } })
}

export interface ICampaignDocumentBaseData extends IDocumentBaseData {
	campaign: Ref<Campaign>,
	createdBy?: Ref<User>,
	lastUpdatedBy?: Ref<User>,
}

// @ts-expect-error - ReturnModelType has a poor/incorrect restriction
@queryMethod(byCampaign)
export abstract class CampaignDocumentBase<
	TData extends ICampaignDocumentBaseData = ICampaignDocumentBaseData
> extends DocumentBase<TData> {
	@prop({ default: null, ref: Campaign, required: true, type: () => Campaign })
	campaign: Ref<Campaign>

	@prop({ default: null, ref: 'User', type: () => User })
	createdBy?: Ref<User>

	@prop({ default: null, ref: 'User', type: () => User })
	lastUpdatedBy?: Ref<User>
}
