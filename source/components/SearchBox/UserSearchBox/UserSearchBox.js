import React from 'react'
import SearchBox from '@/components/SearchBox'
import NerdIcon from '@/icons/nerd.svg'
import noop from '@/utilities/noop'
import './UserSearchBox.scss'

const renderOption = (user, index, itemProps) => (
	<li key={user._id} className="search-result" {...itemProps}>
		<NerdIcon />
		<b className="name">{user.name}</b> | {user.username}
	</li>
)

const UserSearchBox = ({ onSelect = noop }) => (
	<SearchBox
		className="user"
		limit={5}
		onSelect={onSelect}
		placeholder="Search Users..."
		renderOption={renderOption}
		url="/api/search/users/:searchTerm"
	/>
)

UserSearchBox.displayName = 'UserSearchBox'
export default UserSearchBox
