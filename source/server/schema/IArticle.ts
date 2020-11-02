import { ICampaignLink } from '~/server/schema/ICampaign'
import { IUserLink } from '~/server/schema/IUser'

export type IArticleLink = Pick<IArticle, 'campaign' | 'slug' | 'title'>

export interface IArticle extends IArticleLink {
	_id: string,
	aliases: string[],
	campaign: ICampaignLink,
	childArticles: IArticleLink[],
	createdAt: string,
	html: string,
	isEditable: boolean,
	isOwner: boolean,
	lastUpdatedBy: IUserLink,
	secret: boolean,
	slug: string,
	tags: string[],
	template: boolean,
	title: string,
	updatedAt: string,
	version: number,
}
