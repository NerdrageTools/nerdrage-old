import { IArticleLink } from '~/server/schema/IArticle'
import { ICampaignLink } from '~/server/schema/ICampaign'
import { ISheetLink } from '~/server/schema/ISheet'

export type IUserLink = Pick<IUser, '_id' | 'name' | 'username'>

export type IUser = {
	_id: string,
	anonymous?: boolean,
	campaigns: ICampaignLink[],
	createdAt: string,
	email: string,
	favorites: IArticleLink[],
	isAdmin: boolean,
	lastLogin: Date,
	name: string,
	sheets: ISheetLink[],
	updatedAt: string,
	username: string,
	version: number,
}
