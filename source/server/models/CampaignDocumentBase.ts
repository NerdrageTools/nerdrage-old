import { plugin, prop, queryMethod, Ref, ReturnModelType } from '@typegoose/typegoose'
import { QueryMethod } from '@typegoose/typegoose/lib/types'
import autoPopulatePlugin from 'mongoose-autopopulate'
import { Campaign, ICampaignData } from '~/server/models/Campaign'
import { DocumentBase, IDocumentBaseData } from '~/server/models/DocumentBase'
import { Slug } from '~/server/models/Slug'
import { User } from '~/server/models/User'
import { getId } from '~/server/utilities/getId'

const NO_CAMPAIGN = getId('0'.repeat(24))

export interface CampaignHelpers {
	byCampaign: QueryMethod<typeof byCampaign>,
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function byCampaign(
	this: ReturnModelType<{ new (...data: any): ICampaignDocumentBaseData }, CampaignHelpers>,
	sources: Ref<Campaign>[],
) {
	if (!sources?.length) { return this.find({ campaign: NO_CAMPAIGN }) }
	return this.find({ $or: sources.map(source => ({ campaign: getId(source) })) })
} 

export interface ICampaignDocumentBaseData extends IDocumentBaseData {
	campaign: Ref<Campaign>,
	createdBy?: Ref<User>,
	lastUpdatedBy?: null | Ref<User>,
	slug: string,
	title: string,
}

export interface ICampaignDocumentBaseLink {
	id: string,
	slug: string,
	subdomain: string,
	title: string,
	type: string,
}

@queryMethod(byCampaign)
@plugin(autoPopulatePlugin)
export abstract class CampaignDocumentBase<
	TData extends ICampaignDocumentBaseData = ICampaignDocumentBaseData
> extends DocumentBase<TData> {
	@prop({ autopopulate: true, default: null, ref: Campaign, required: true, type: () => Campaign })
	campaign: Ref<Campaign>

	@prop({ default: null, ref: 'User', type: () => User })
	createdBy?: Ref<User>

	@prop({ default: null, ref: 'User', type: () => User })
	lastUpdatedBy?: null | Ref<User>

	@prop({ ...Slug, required: true })
	public slug: string = ''

	@prop({ required: true })
	public title: string = ''

	async toLink(): Promise<ICampaignDocumentBaseLink> {
		const doc = await this.toDocument()
			.populate('campaign', 'subdomain')
			.execPopulate()

		return {
			id: doc._id,
			slug: doc.slug,
			subdomain: (doc.campaign as ICampaignData)?.subdomain as string,
			title: doc.title,
			type: 'article',
		}
	}
}
