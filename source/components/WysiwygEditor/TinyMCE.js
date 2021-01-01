import { Editor } from '@tinymce/tinymce-react'
import tinymce from 'tinymce/tinymce'

// Plugins
import 'tinymce/plugins/advlist/plugin'
import 'tinymce/plugins/anchor/plugin'
import 'tinymce/plugins/autosave/plugin'
import 'tinymce/plugins/code/plugin'
import 'tinymce/plugins/fullscreen/plugin'
import 'tinymce/plugins/hr/plugin'
import 'tinymce/plugins/image/plugin'
import 'tinymce/plugins/link/plugin'
import 'tinymce/plugins/lists/plugin'
import 'tinymce/plugins/noneditable/plugin'
import 'tinymce/plugins/paste/plugin'
import 'tinymce/plugins/table/plugin'

// Theme
import 'tinymce/themes/modern/theme'

// Skin
import './TinyMCE.scss'

Editor.defaultProps = Object.assign(Editor.defaultProps || {}, {
	init: {
		auto_focus: true,
		autosave_ask_before_unload: false,
		convert_fonts_to_spans: true,
		convert_urls: false,
		custom_elements: 'include,tengwar',
		entity_encoding: 'raw',
		extended_valid_elements: 'include[class|from|sections],tengwar,Warning',
		fixed_toolbar_container: '.wysiwyg-editor > .menubar',
		formats: {
			aligncenter: {
				classes: 'center',
				selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img',
			},
			underline: { exact: true, inline: 'u' },
		},
		inline: true,
		menubar: false,
		noneditable_noneditable_class: 'noedit',
		plugins:
			'anchor advlist autosave code fullscreen hr image link lists noneditable paste table',
		skin: false,
		table_invalid_styles: 'table/td/th[height,width]',
		table_resize_bars: false,
		toolbar:
			'formatselect | bold italic underline | alignleft aligncenter alignright alignjustify ' +
			'| indent outdent | bullist numlist | hr link | image table | removeformat',
		valid_elements:
			'a[id|href|target|class|style|subdomain],' +
			'img[id|src|class|style|height|width],' +
			'@[id|class|colspan|rowspan|style],#th,#td,' +
			'@[id|class|style],' +
			'-h1,-h2,-h3,-h4,-h5,-h6,' +
			'-table,-tr,-thead,-tbody,-tfoot,br,hr,-blockquote,' +
			'-div,-span,-p,-ul,-ol,-li,-b/strong,-i/em,-u,-s/strike/del,-center,-sup,-sub',
	},
})

export default Editor

if (process.browser) { Object.assign(window, { tinymce }) }
