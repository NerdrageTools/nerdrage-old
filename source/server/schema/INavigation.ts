import { ILink } from '~/server/schema/ILink'

export interface INavigation extends Omit<ILink, 'id'> {
	children?: INavigation[],
	id?: string,
}
