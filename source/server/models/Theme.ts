import { prop } from '@typegoose/typegoose'

export interface ITheme {
	background?: string,
	fontForText?: string,
	fontForTitles?: string,
	fontSize?: string,
	normalText?: string,
	primary?: string,
	primaryText?: string,
}

export const defaultTheme: ITheme = {
	background: '#fff',
	fontForText: 'Ubuntu',
	fontForTitles: 'Ubuntu',
	fontSize: '16px',
	normalText: '#333',
	primary: '#f00',
	primaryText: '#fff',
}

const ColorCode = {
	match: [/^#[0-9a-f]{3,6}/i, 'Invalid color code'],
	trim: true,
	type: String,
}

export class Theme implements ITheme {
	@prop({ ...ColorCode, default: defaultTheme.background })
	background?: string = defaultTheme.background

	@prop({ default: defaultTheme.fontForText, type: String })
	fontForText?: string = defaultTheme.fontForText

	@prop({ default: defaultTheme.fontForTitles, type: String })
	fontForTitles?: string = defaultTheme.fontForTitles

	@prop({ default: defaultTheme.fontSize, type: String })
	fontSize?: string = defaultTheme.fontSize

	@prop({ ...ColorCode, default: defaultTheme.normalText })
	normalText?: string = defaultTheme.normalText

	@prop({ ...ColorCode, default: defaultTheme.primary })
	primary?: string = defaultTheme.primary

	@prop({ ...ColorCode, default: defaultTheme.primaryText })
	primaryText?: string = defaultTheme.primaryText
}
