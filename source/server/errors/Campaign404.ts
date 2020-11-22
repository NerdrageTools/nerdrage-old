import { NextFunction, Response } from 'express'
import { ICampaign } from '../schema/ICampaign'

interface IRequest {
	campaign?: ICampaign | null,
	subdomain: string,
}

export const Campaign404 = ((
	request: IRequest,
	response: Response,
	next?: NextFunction,
): void => {
	if (request.campaign && next) {
		next()
	} else {
		response.status(404).json({
			message: `Campaign '${request.subdomain}' does not exist.`,
		})
	}
})
