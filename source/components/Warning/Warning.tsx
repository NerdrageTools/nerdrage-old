import React, { FunctionComponent } from 'react'
import WarningIcon from '~/icons/warning.svg'
import '~/styles/classes/warning.scss'

export const Warning: FunctionComponent = props => (
	<div className="warning">
		<WarningIcon />
		{props.children}
	</div>
)
