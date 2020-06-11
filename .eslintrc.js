const { join } = require('path')

const { peerDependencies } = require(join(__dirname, 'package.json'))

module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    'babel/semi': 'off',
    'curly': ['error', 'all'],
    'global-require': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],
    'import/no-unresolved': [
      'error',
      {
        ...(Object.keys(peerDependencies).length > 0 && { ignore: Object.keys(peerDependencies) }),
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', ['sibling', 'index']],
      },
    ],
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['InputLabel'],
        labelAttributes: ['label'],
        controlComponents: ['Input'],
        depth: 3,
      },
    ],
    'max-len': ['error', { code: 120, ignoreComments: true }],
    'no-tabs': 'error',
    'no-underscore-dangle': ['error', { allow: ['_KEY'] }],
    'no-unexpected-multiline': 'off',
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/display-name': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': 'error',
    'react/no-typos': 'off',
    'react/react-in-jsx-scope': 'error',
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
  }
}
