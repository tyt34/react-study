module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    // indent: ['error', 2],
    indent: 'off',
    // 'linebreak-style': ['error', 'unix'],
    'linebreak-style': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  }
}
