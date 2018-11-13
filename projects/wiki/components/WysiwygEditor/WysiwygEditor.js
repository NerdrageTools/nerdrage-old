import React, { Component } from 'react'
import TinyMCE from './TinyMCE'
import './ArticleEditor.scss'
import './WysiwygEditor.scss'

export default class WysiwygEditor extends Component {
  static defaultProps = {
    onChange: () => {},
  }

  previousValue = this.props.html
  componentWillReceiveProps(props) { this.previousValue = props.html }

  handleChangeEvent = (_, editor) => {
    const html = editor.getContent()
    if (html !== this.previousValue) {
      this.props.onChange(html)
      this.previousValue = html
    }
  }

  render = () => {
    const { html, onChange, ...props } = this.props

    return (
      <div className="wysiwyg-editor">
        <div className="menubar" />
        <TinyMCE
          {...props}
          initialValue={html}
          inline
          onNodeChange={this.handleChangeEvent}
          onCut={this.handleChangeEvent}
          onKeyUp={this.handleChangeEvent}
          onPaste={this.handleChangeEvent}
        />
      </div>
    )
  }
}
