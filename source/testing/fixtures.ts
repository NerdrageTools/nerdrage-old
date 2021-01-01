import { Campaigns } from '~/server/models/Campaign'
import { Users } from '~/server/models/User'

export const password: string = 'Fo0b4r!!'

/* eslint-disable max-len,sort-keys */
export const loadData = async (): Promise<void> => {
	const [foo, bar, baz] = await Users.create([
		{ email: 'foo@nunya.com', name: 'Foo', password, username: 'foo' },
		{ email: 'bar@nunya.com', name: 'Bar', password, username: 'bar' },
		{ email: 'baz@nunya.com', name: 'Baz', password, username: 'baz' },
	])

	const sysAdmin = await Users.create({ email: 'admin@foo.com', isAdmin: true, name: 'Sys Admin', password: '', username: 'sysadmin' })
	const owner = await Users.create({ email: 'owner@foo.com', name: 'Owner', password: '', username: 'owner' })
	const editor = await Users.create({ email: 'editor@foo.com', name: 'Editor', password: '', username: 'editor' })
	const player = await Users.create({ email: 'player@foo.com', name: 'Player', password: '', username: 'player' })
	const other = await Users.create({ email: 'other@foo.com', name: 'Other', password: '', username: 'other' })

	const grandpa = await Campaigns.create({ editors: [editor], owners: [owner], players: [player], subdomain: 'grandpa', title: 'Grandpa' })
	const daddy = await Campaigns.create({ editors: [editor], owners: [owner], players: [player], sources: [grandpa], subdomain: 'daddy', title: 'Daddy' })
	const main = await Campaigns.create({ editors: [editor], owners: [owner], players: [player], sources: [daddy], subdomain: 'child', title: 'Child' })

	global.fixtures = {
		articles: {},
		campaigns: { grandpa, daddy, main },
		users: { sysAdmin, owner, editor, player, other, foo, bar, baz },
	}
}
/* eslint-enable max-len,sort-keys */
