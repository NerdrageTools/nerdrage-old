import { IUserProfile } from '~/server/models'
import { ICampaign } from '~/server/schema/ICampaign'

declare module 'express' {
	export interface IRequest<TParams = ParamsDictionary, ParsedQs = any>
		extends Request<TParams, any, any, ParsedQs>
	{
		campaign: ICampaign,
		domainName: string,
		isEditable: boolean,
		isOwner: boolean,
		slug: string,
		subdomain: string,
		user: IUserProfile | null,
	}
}
