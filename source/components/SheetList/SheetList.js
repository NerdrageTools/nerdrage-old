import React, { useEffect, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import Link from '@/components/Link'
import Toggle from '@/components/Toggle'
import PublicIcon from '@/icons/public.svg'
import SecretIcon from '@/icons/secret.svg'
import TemplateIcon from '@/icons/template.svg'
import './SheetList.scss'

const loadSheets = () => fetch('/api/sheet/list-by/campaign', { credentials: 'include' })
  .then(response => response.json())

export default function SheetList({
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
                {sheets.filter(s => s.title.toLowerCase().match(filter.toLowerCase())).map(sheet => (
                  <tr key={sheet._id}>
                    <td className="link">
                      <Link type="sheet" {...sheet}>{sheet.title}</Link>
                    </td>
                    <td className="properties">
                      <Toggle onIcon={SecretIcon} offIcon={PublicIcon} value={sheet.secret} />
                      <Toggle onIcon={TemplateIcon} offIcon={TemplateIcon} value={sheet.template} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Scrollbars>
        </>
      }
    </div>
  )
}
