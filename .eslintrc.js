module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 0,
    'comma-dangle': 1,
    'operator-linebreak': 1,
    'arrow-parens': 1,
    'comma-spacing': 1,
    'quotes': 1,
    'padded-blocks': 1,
    'react/jsx-tag-spacing': 1,
    'react/prop-types': 1,
    'react/no-array-index-key': 1,
    'import/prefer-default-export': 1,
    'no-case-declarations': 0,
    'no-multi-spaces': 0,
    'react/jsx-no-bind': 0,
    'no-plusplus': 0
  },
};
