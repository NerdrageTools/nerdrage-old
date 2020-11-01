export interface ITheme {
	background?: string,
	fontFamily?: string,
	fontForText?: string,
	fontForTitles?: string,
	fontSize?: string,
	normalText?: string,
	primary?: string,
	primaryText?: string,
}

export const defaultTheme: ITheme = {
	background: '#fff',
	fontFamily: 'Open Sans',
	fontForText: 'Ubuntu',
	fontForTitles: 'Ubuntu',
	fontSize: '16px',
	normalText: '#333',
	primary: '#f00',
	primaryText: '#fff',
}
