import React, { createRef } from 'react'
import { Dialog } from '~/components/Dialog/Dialog'
import type { ITemplateLink } from '~/server/schema/ITemplate'
import { pluck } from '~/utilities/pluck'
import { slugify } from '~/utilities/slugs'

export interface INewLink {
	slug: string,
	templateSlug: string,
	text: string,
}

interface Props {
	defaultSlug?: string,
	defaultText?: string,
	onOk?: (link: INewLink) => void,
	slugLabel?: string,
	templateType?: string,
	textLabel?: string,
	title?: string,
}

interface State {
	auto: boolean,
	slug: string,
	templateSlug: string,
	templates: ITemplateLink[],
	text: string,
}

export class CreateLinkDialog extends Dialog<Props, State> {
	static styles = import('./CreateLinkDialog.scss')
	static defaultProps = {
		...Dialog.defaultProps,
		className: 'create-link',
		slugLabel: 'Slug',
		textLabel: 'Text',
		title: 'Create Link',
	}

	state: State = {
		auto: true,
		slug: this.props.defaultSlug ?? '',
		templates: [],
		templateSlug: '',
		text: this.props.defaultText ?? '',
	}

	#slugInput = createRef<HTMLInputElement>()
	#templateInput = createRef<HTMLSelectElement>()
	#textInput = createRef<HTMLInputElement>()

	componentDidMount = async (): Promise<void> => {
		if (process.browser) {
			this.#textInput?.current!.focus()
			this.#textInput?.current!.select()
		}

		const { templateType } = this.props
		if (!templateType) { return }

		const response = await fetch(`/api/templates/${templateType.toLowerCase()}`)
		if (response.status === 200) {
			this.setState({ templates: await response.json() })
		}
	}

	handleKeyDown: React.KeyboardEventHandler = ({ key }) => {
		switch (key) {
			case 'Escape': return this.props.onCancel?.()
			case 'Enter': return this.props.onOk?.(pluck(this.state, 'slug', 'templateSlug', 'text'))
			default: return undefined
		}
	}

	handleSlug = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const slug = slugify(event.target.value)
		if (slug !== this.state.slug) {
			this.setState({ auto: false, slug })
		}
	}

	handleTemplate = (event: React.ChangeEvent<HTMLSelectElement>): void => {
		this.setState({ templateSlug: event.target.value })
	}

	handleText = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const text = event.target.value
		const slug = slugify(text)

		if (text !== this.state.text) {
			this.setState((this.state.auto ? { slug, text } : { text }) as State)
		}
	}

	renderBody = (): JSX.Element => {
		const { slugLabel, templateType, textLabel } = this.props
		const { slug: currentSlug, templates, templateSlug, text } = this.state

		return <>
			<div className="input-wrapper">
				<label>{textLabel}</label>
				<input ref={this.#textInput} onChange={this.handleText} type="text" value={text} />
			</div>
			<div className="input-wrapper">
				<label>{slugLabel}</label>
				<input ref={this.#slugInput} onChange={this.handleSlug} type="text" value={currentSlug} />
			</div>
			{templateType && (
				<div className="input-wrapper">
					<label>Template</label>
					<select ref={this.#templateInput} onChange={this.handleTemplate} value={templateSlug}>
						<option key="none" value="">None</option>
						{templates.map(({ slug, title }) => <option key={slug} value={slug}>{title}</option>)}
					</select>
				</div>
			)}
		</>
	}
}
