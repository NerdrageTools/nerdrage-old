import React from 'react'
import ReactDOM from 'react-dom'
import { Simulate } from 'react-dom/test-utils'
import { Editable } from '~/components/Editable/Editable'

describe('Editable', () => {
	let parent = document.createElement('div')
	let component: Editable
	let rendered: () => HTMLDivElement

	function render(element: JSX.Element) { ReactDOM.render(element, parent) }

	beforeEach(() => {
		parent = document.createElement('div')
		component = ReactDOM.render(<Editable />, parent) as unknown as Editable
		// eslint-disable-next-line react/no-find-dom-node
		rendered = () => ReactDOM.findDOMNode(component) as HTMLDivElement
	})

	test('renders classes properly', () => {
		render(<Editable className="test-class" />)
		expect(rendered().classList.contains('editable')).toEqual(true)
		expect(rendered().classList.contains('test-class')).toEqual(true)

		render(<Editable readOnly />)
		expect(rendered().classList.contains('readonly')).toEqual(true)
	})

	test('raises change events properly', () => {
		const onChange = jest.fn()

		render(<Editable onChange={onChange} value="first" />)
		component.handleToggleEditing()

		const editor = rendered().children[0] as HTMLInputElement
		expect(editor.value).toEqual('first')
		Simulate.change(editor, { target: { value: 'second' } as HTMLInputElement })
		Simulate.blur(editor)
		expect(onChange).toBeCalledWith('second', 'first')
	})

	test('renders checkboxes properly', () => {
		const onChange = jest.fn()

		function validateCheckbox() {
			expect(rendered().children.length).toEqual(1)
			const checkbox = rendered().children[0] as HTMLInputElement
			expect(checkbox.tagName).toEqual('INPUT')
			expect(checkbox.type).toEqual('checkbox')
			return checkbox
		}

		// eslint-disable-next-line react/jsx-boolean-value
		render(<Editable onChange={onChange} value={true} />)
		expect(component.getEditorType()).toEqual('boolean')
		validateCheckbox()

		render(<Editable onChange={onChange} type="boolean" value="test" />)
		expect(component.getEditorType()).toEqual('boolean')
		const checkbox = validateCheckbox()

		Simulate.change(checkbox, { target: { value: false } as unknown as HTMLInputElement })
		expect(onChange).toBeCalledWith(false, 'test')
	})
})
