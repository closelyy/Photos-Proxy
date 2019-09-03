module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    parser: "babel-eslint",
    extends: [
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
      ecmaVersion: 2018,
    },
    plugins: [
      'react',
    ],
    rules: {
    },
  };
  