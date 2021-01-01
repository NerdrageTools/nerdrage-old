module.exports = {
	env: {
		browser: true,
		commonjs: true,
		jest: true,
		node: true,
	},
	extends: 'airbnb',
	parser: 'babel-eslint',
	rules: {
		'arrow-parens': ['error', 'as-needed'],
		'comma-dangle': ['error', 'always-multiline'],
		'func-names': 'off',
		'function-paren-newline': 'off',
		'import/extensions': ['error', { js: 'never', scss: 'always', svg: 'always' }],
		'import/no-extraneous-dependencies': 'off',
		'import/no-unresolved': 'off',
		'import/order': 'error',
		'import/prefer-default-export': 'off',
		indent: ['error', 'tab'],
		'jsx-a11y/anchor-is-valid': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/iframe-has-title': 'off',
		'jsx-a11y/label-has-associated-control': 'off',
		'jsx-a11y/label-has-for': 'off',
		'jsx-a11y/no-noninteractive-element-interactions': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'lines-between-class-members': 'off',
		'no-empty': 'off',
		'no-shadow': ['error', { allow: ['_'] }],
		'no-tabs': 'off',
		'no-template-curly-in-string': 'off',
		'no-underscore-dangle': 'off',
		'object-curly-newline': 'off',
		'operator-linebreak': 'off',
		'react/button-has-type': 'off',
		'react/destructuring-assignment': 'off',
		'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
		'react/jsx-closing-tag-location': 'off',
		'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-max-props-per-line': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-wrap-multilines': ['off'],
		'react/no-access-state-in-setstate': 'off',
		'react/no-array-index-key': 'off',
		'react/no-unused-prop-types': ['error', { skipShapeProps: true }],
		'react/prop-types': 'off',
		semi: ['error', 'never'],
		'sort-imports': 'off',
		'sort-keys': ['error', 'asc', { caseSensitive: false, natural: true }],
		'sort-vars': ['error', { ignoreCase: true }],
	},
	overrides: [{ // eslint-disable-line sort-keys
		files: ['*.test.js'],
		rules: {
			'sort-keys': 'off',
		},
	}],
}
