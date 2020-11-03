/* eslint-disable max-len, react/require-default-props */
import React, { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
	title?: string,
	wrapperRef?: React.RefObject<SVGSVGElement>,
}

export const NavigationIcon: React.FunctionComponent<Props> = ({
	title = 'Navigation',
	wrapperRef = React.createRef<SVGSVGElement>(),
	...props
}: Props): JSX.Element => (
	<svg ref={wrapperRef} {...props}
		version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
	>
		<title>{title}</title>
		<path d="M32 22.272v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.704 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424h-9.12v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.736 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424h-9.12v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.736 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424q0-0.928 0.672-1.632t1.632-0.672h9.12v-3.424h-1.696q-0.736 0-1.216-0.512t-0.512-1.184v-5.728q0-0.704 0.512-1.216t1.216-0.512h5.696q0.736 0 1.216 0.512t0.512 1.216v5.728q0 0.704-0.512 1.184t-1.216 0.512h-1.696v3.424h9.12q0.928 0 1.632 0.672t0.672 1.632v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216z" />
	</svg>
)
