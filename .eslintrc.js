module.exports = {
  env: {
    'jest/globals': true,
  },
  root: true,
  extends: ['@react-native-community'],
  plugins: ['jest'],
  rules: {
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/require-default-props': ['off'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  overrides: [
    {
      files: ['*.e2e.jsx', '*.e2e.js'],
      env: {
        jest: true,
      },
    },
    {
      files: ['detox/e2e/**'],
      globals: {
        by: true,
        detox: true,
        device: true,
        element: true,
        waitFor: true,
      },
      rules: {
        'func-names': 0,
        'import/no-unresolved': 0,
        'max-nested-callbacks': 0,
        'no-process-env': 0,
        'no-unused-expressions': 0,
      },
    },
  ],
}
