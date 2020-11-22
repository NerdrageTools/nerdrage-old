/* eslint-disable max-len,quote-props,sort-keys */
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	env: { browser: true },
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'airbnb',
		'plugin:react/recommended',
		'plugin:jest/recommended',
		'plugin:jest-formatting/recommended',
	],
	plugins: [
		'@typescript-eslint',
		'import',
		'jest',
		'jest-formatting',
		'react',
		'react-hooks',
	],
	rules: {
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/indent': ['error', 'tab', { SwitchCase: 1 }],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-parameter-properties': 'off',
		'@typescript-eslint/member-delimiter-style': ['error', {
			multiline: { delimiter: 'comma', requireLast: true },
			singleline: { delimiter: 'comma', requireLast: false },
		}],
		'@typescript-eslint/member-ordering': ['error', {
			classes: 'never',
			interfaces: {
				memberTypes: ['signature', 'constructor', 'field', 'method'],
				order: 'alphabetically',
			},
			typeLiterals: {
				memberTypes: ['signature', 'constructor', 'field', 'method'],
				order: 'alphabetically',
			},
		}],
		'@typescript-eslint/naming-convention': [
			'error',
			{ selector: 'enum', format: ['PascalCase'] },
			{ selector: 'enumMember', format: ['PascalCase'] },
		],
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-shadow': 'error',
		'array-bracket-newline': ['error', 'consistent'],
		'arrow-parens': ['error', 'as-needed'],
		'comma-dangle': ['error', 'always-multiline'],
		'default-case': 'off',
		'func-names': 'off',
		'function-paren-newline': 'off',
		'implicit-arrow-linebreak': 'off',
		'import/extensions': ['error', {
			css: 'always',
			jpg: 'always',
			js: 'never',
			json: 'always',
			png: 'always',
			scss: 'always',
			svg: 'always',
		}],
		'import/no-default-export': 'error',
		'import/no-extraneous-dependencies': 'off',
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'indent': 'off',
		'jest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],
		'jsx-a11y/alt-text': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/iframe-has-title': 'off',
		'jsx-a11y/label-has-associated-control': 'off',
		'jsx-a11y/label-has-for': 'off',
		'jsx-a11y/mouse-events-have-key-events': 'off',
		'jsx-a11y/no-noninteractive-element-interactions': 'off',
		'jsx-a11y/no-noninteractive-tabindex': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'linebreak-style': 'off',
		'lines-between-class-members': 'off',
		'max-len': ['error', { code: 100, tabWidth: 2 }],
		'newline-per-chained-call': 'off',
		'no-confusing-arrow': ['error', { allowParens: true }],
		'no-fallthrough': 'off',
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-shadow': 'off',
		'no-tabs': 'off',
		'no-template-curly-in-string': 'off',
		'no-undef': 'off',
		'no-underscore-dangle': 'off',
		'no-unused-expressions': 'off',
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
		'no-var': 'error',
		'object-curly-newline': 'off',
		'prefer-destructuring': ['error', { AssignmentExpression: { array: false, object: false } }],
		'prefer-promise-reject-errors': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react/button-has-type': 'off',
		'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: true }],
		'react/destructuring-assignment': 'off',
		'react/display-name': 'error',
		'react/forbid-prop-types': 'error',
		'react/jsx-closing-tag-location': 'off',
		'react/jsx-curly-brace-presence': ['error', { children: 'never', props: 'never' }],
		'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
		'react/jsx-first-prop-new-line': 'off',
		'react/jsx-handler-names': 'error',
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-indent': ['error', 'tab', { checkAttributes: true, indentLogicalExpressions: true }],
		'react/jsx-max-props-per-line': 'off',
		'react/jsx-no-bind': 'error',
		'react/jsx-no-duplicate-props': 'error',
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-sort-props': ['error', { reservedFirst: ['key', 'ref'] }],
		'react/jsx-wrap-multilines': 'off',
		'react/no-access-state-in-setstate': 'off',
		'react/no-array-index-key': 'off',
		'react/no-children-prop': 'off',
		'react/no-typos': 'error',
		'react/no-unused-prop-types': ['error', { skipShapeProps: true }],
		'react/prefer-stateless-function': 'off',
		'react/prop-types': 'off',
		'react/require-default-props': ['error', { forbidDefaultForRequired: false }],
		'react/sort-comp': ['error', { order: ['static-variables', 'static-methods', 'state', 'instance-variables', 'lifecycle', 'everything-else', 'render'] }],
		'react/state-in-constructor': 'off',
		'react/static-property-placement': 'off',
		'semi': ['error', 'never'],
		'sort-imports': 'off',
		'sort-keys': ['error', 'asc', { caseSensitive: false, natural: true }],
		'sort-vars': ['error', { ignoreCase: true }],
		'spaced-comment': ['error', 'always', { markers: ['/'] }],
	},
	overrides: [{
		files: [
			'source/pages/*.{ts,tsx,js}',
			'source/server/controllers/*Controller.{ts,js}',
		],
		rules: {
			'import/no-default-export': 'off',
			'import/prefer-default-export': 'error',
		},
	}, {
		files: ['source/**/*.js'],
		rules: {
			'@typescript-eslint/explicit-module-boundary-types': 'off',
		},
	}, {
		files: ['source/server/**/*.ts'],
		rules: {
			'no-console': 'off',
		},
	}],
}
