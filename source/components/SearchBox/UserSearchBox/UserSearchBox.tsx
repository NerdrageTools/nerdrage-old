import React from 'react'
import { SearchBox } from '~/components/SearchBox/SearchBox'
import NerdIcon from '~/icons/nerd.svg'
import { noop } from '~/utilities/noop'

export class UserSearchBox extends React.Component {
	static styles = import('./UserSearchBox.scss')

	renderOption = (user, _, itemProps): JSX.Element => (
		<li key={user._id} className="search-result" {...itemProps}>
			<NerdIcon />
			<b className="name">{user.name}</b>
			{' '}
			|
			{user.username}
		</li>
	)

	render = (): JSX.Element => (
		<SearchBox
			className="user"
			limit={5}
			onSelect={this.props.onSelect ?? noop}
			placeholder="Search Users..."
			renderOption={this.renderOption}
			url="/api/search/users/:searchTerm"
		/>
	)
}
