import type { ILink } from './ILink'

export interface ICampaignLink extends Omit<ILink, 'slug'> {
	subdomain: string,
}
