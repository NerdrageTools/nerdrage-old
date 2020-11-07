import { ICampaign } from '~/server/schema/ICampaign'
import { IUser } from '~/server/schema/IUser'

declare module 'express' {
	export interface IRequest<TParams = ParamsDictionary, ParsedQs = any>
		extends Request<TParams, any, any, ParsedQs>
	{
		campaign: ICampaign | null,
		domainName: string,
		isEditable: boolean,
		isOwner: boolean,
		slug: string,
		subdomain: string,
		user: IUser,
	}
}
