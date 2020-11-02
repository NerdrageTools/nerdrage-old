import { ILink } from '~/server/schema/ILink'

export interface INavigation extends ILink {
	children: INavigation[],
}
