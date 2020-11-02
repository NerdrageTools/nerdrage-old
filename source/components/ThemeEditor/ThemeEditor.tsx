import React, { useContext } from 'react'
import { ColorPicker } from '~/components/ColorPicker/ColorPicker'
import { FontSearchBox } from '~/components/SearchBox/FontSearchBox/FontSearchBox'
import { Application } from '~/contexts/Application'
import { range } from '~/utilities/range'
import './ThemeEditor.scss'

export function ThemeEditor({
	className = '',
	readOnly = false,
}) {
	const { campaign = {}, updateCampaign } = useContext(Application)
	const { theme = {} } = campaign

	const onUpdateColor = key => color => {
		updateCampaign({ theme: { ...theme, [key]: color.hex } })
	}
	const onUpdateFont = key => font => {
		if (!font) { return }
		updateCampaign({ theme: { ...theme, [key]: font.family } })
	}
	const onUpdateFontSize = ({ target }) => {
		updateCampaign({ theme: { ...theme, fontSize: target.value } })
	}

	return (
		<div className={`theme-editor ${className}`}>
			<div className="title">Theme</div>
			<div className="input-wrapper font-for-titles">
				<label>Titles</label>
				{readOnly
					? <div className="display">{theme.fontForTitles}</div>
					: <FontSearchBox
						initialValue={theme.fontForTitles}
						onSelect={onUpdateFont('fontForTitles')}
					/>}
			</div>
			<div className="input-wrapper font-for-text">
				<label>Text</label>
				{readOnly
					? <div className="display">{theme.fontForText}</div>
					: <FontSearchBox
						initialValue={theme.fontForText}
						onSelect={onUpdateFont('fontForText')}
					/>}
			</div>
			<div className="input-wrapper">
				<label>UI Color</label>
				<ColorPicker
					color={theme.primary}
					disabled={readOnly}
					onChange={onUpdateColor('primary')}
					text="BG"
					textColor={theme.primaryText}
				/>
				<ColorPicker
					color={theme.primaryText}
					disabled={readOnly}
					onChange={onUpdateColor('primaryText')}
					text="Text"
					textColor={theme.primary}
				/>
			</div>
			<div className="input-wrapper">
				<label>Text Colors</label>
				<ColorPicker
					color={theme.background}
					disabled={readOnly}
					onChange={onUpdateColor('background')}
					text="BG"
					textColor={theme.normalText}
				/>
				<ColorPicker
					color={theme.normalText}
					disabled={readOnly}
					onChange={onUpdateColor('normalText')}
					text="Text"
					textColor={theme.background}
				/>
			</div>
			<div className="input-wrapper">
				<label>Text Size</label>
				<select disabled={readOnly} onChange={onUpdateFontSize} value={theme.fontSize}>
					{range(8, 18).map(pixels => (
						<option key={pixels} value={`${pixels}px`}>
							{pixels}
							px
						</option>
					))}
				</select>
			</div>
		</div>
	)
}
