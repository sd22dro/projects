// .eslintrc.js
module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'react-app',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
      'react/prop-types': 'off', // Disable if not using PropTypes
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  