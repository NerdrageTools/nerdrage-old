import React from 'react'
import './Alert.scss'

export function Alert({
	className = '',
	children = [],
	type = 'info',
}) {
	return <div className={`alert ${type} ${className}`}>{children}</div>
}
