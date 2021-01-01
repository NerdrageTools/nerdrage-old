import React, { useEffect, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { Link } from '~/components/Link/Link'
import { Toggle } from '~/components/Toggle/Toggle'
import PublicIcon from '~/icons/public.svg'
import SecretIcon from '~/icons/secret.svg'
import TemplateIcon from '~/icons/template.svg'
import './SheetList.scss'

const loadSheets = () => fetch('/api/sheet/list-by/campaign', { credentials: 'include' })
	.then(response => response.json())

export function SheetList({
	className = '',
}) {
	const [loaded, setLoaded] = useState(false)
	const [filter, setFilter] = useState('')
	const [sheets, setSheets] = useState([])
	useEffect(() => {
		loadSheets().then(json => {
			setSheets(json)
			setLoaded(true)
		})
	}, [])

	return (
		<div className={`sheet-list ${className}`}>
			<div className="title">Sheets</div>
			{sheets.message
				? <div className="message">{sheets.message}</div>
				: <>
					<input
						className="filter"
						onChange={({ target }) => setFilter(target.value)}
						placeholder="Filter..."
						type="text"
						value={filter}
					/>
					<Scrollbars className={`scrollable ${loaded ? 'loaded' : 'loading'}`} universal>
						<table>
							<tbody>
								{sheets
									.filter(sheet => sheet.title.toLowerCase().match(filter.toLowerCase()))
									.map(({ id, secret, template, slug, title }) => (
										<tr key={id}>
											<td className="link">
												<Link slug={slug} type="sheet">{title}</Link>
											</td>
											<td className="properties">
												<Toggle offIcon={PublicIcon} onIcon={SecretIcon} value={secret} />
												<Toggle offIcon={TemplateIcon} onIcon={TemplateIcon} value={template} />
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</Scrollbars>
				</>}
		</div>
	)
}
