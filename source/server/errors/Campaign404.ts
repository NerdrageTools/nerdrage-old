import { NextFunction, Response } from 'express'

interface IRequest {
	campaign?: any,
	subdomain: string,
}

export const Campaign404 = (
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
}
