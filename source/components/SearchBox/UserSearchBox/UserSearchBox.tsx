import React from 'react'
import { OptionProps, SearchBox } from '~/components/SearchBox/SearchBox'
import NerdIcon from '~/icons/nerd.svg'
import { IUser } from '~/server/schema/IUser'

export class UserSearchBox extends SearchBox<IUser> {
	static displayName = 'SearchBox<User>'
	static styles = import('./UserSearchBox.scss')
	readonly clearOnSelect: boolean = true
	readonly placeholder: string = 'Search Users...'
	readonly typeName: string = 'user'
	readonly url: string = '/api/search/users/:searchTerm'

	getValue = (user: IUser): string => user.id
	renderOption = (user: IUser, _: number, itemProps: OptionProps): JSX.Element => (
		<li key={user.id} className="search-result" {...itemProps}>
			<NerdIcon /><b className="name">{user.name}</b>
			<span>{` | ${user.username}`}</span>
		</li>
	)
}
