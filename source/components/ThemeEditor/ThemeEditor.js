import React, { useContext } from 'react'
import ColorPicker from '@/components/ColorPicker'
import FontSearchBox from '@/components/SearchBox/FontSearchBox'
import Application from '@/contexts/Application'
import './ThemeEditor.scss'

export default function ThemeEditor({
  className = '',
}) {
  const { campaign = {}, updateCampaign } = useContext(Application)
  const { theme = {} } = campaign

  const onUpdateColor = key => color => {
    updateCampaign({ theme: { ...theme, [key]: color.hex } })
  }
  const onUpdateFont = key => font => {
    updateCampaign({ theme: { ...theme, [key]: font.family } })
  }

  return (
    <div className={`theme-editor ${className}`}>
      <div className="title">Theme</div>
      <div className="input-wrapper">
        <label>Primary Color</label>
        <ColorPicker
          color={theme.primary}
          onChange={onUpdateColor('primary')}
        />
      </div>
      <div className="input-wrapper">
        <label>Text Color</label>
        <ColorPicker
          color={theme.primaryText}
          onChange={onUpdateColor('primaryText')}
        />
      </div>
      <div className="input-wrapper font-for-titles">
        <label>Title Font</label>
        <FontSearchBox
          defaultInputValue={theme.fontForTitles}
          onSelect={onUpdateFont('fontForTitles')}
        />
      </div>
      <div className="input-wrapper font-for-text">
        <label>Text Font</label>
        <FontSearchBox
          defaultInputValue={theme.fontForText}
          onSelect={onUpdateFont('fontForText')}
        />
      </div>
    </div>
  )
}
