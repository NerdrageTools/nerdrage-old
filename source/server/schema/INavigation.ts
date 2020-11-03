import { ILink } from '~/server/schema/ILink'

export interface INavigation extends Omit<ILink, '_id'> {
	_id?: string,
	children?: INavigation[],
}
