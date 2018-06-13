module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
  },
  plugins: ['babel'],
  rules: {
    'no-console': 2,
    'max-len': [2, { "code": 80 }],
  },
};
