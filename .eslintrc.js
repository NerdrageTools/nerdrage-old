module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "commonjs": true,
    "jest": true,
    "node": true
  },
  "parser": "babel-eslint",
  "plugins": [
    "eslint-plugin-import-order-alphabetical"
  ],
  "rules": {
    "comma-dangle": ["error", "always-multiline"],
    "function-paren-newline": "off",
    "import-order-alphabetical/order": "error",
    "import/extensions": ["error", { "js": "never", "scss": "always", "svg": "always" }],
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "lines-between-class-members": "off",
    "no-empty": "off",
    "no-template-curly-in-string": "off",
    "no-underscore-dangle": "off",
    "object-curly-newline": "off",
    "operator-linebreak": "off",
    "react/button-has-type": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-closing-tag-location": "off",
    "react/jsx-filename-extension": ["error", { "extensions": [".js"] }],
    "react/jsx-one-expression-per-line": "off",
    "react/no-array-index-key": "off",
    "react/no-unused-prop-types": ["error", { "skipShapeProps": true }],
    "react/prop-types": "off",
    "semi": ["error", "never"],
    "sort-imports": "off",
    "sort-keys": ["error", "asc", { "caseSensitive": false, "natural": true }],
    "sort-vars": ["error", { "ignoreCase": true }]
  }
}
