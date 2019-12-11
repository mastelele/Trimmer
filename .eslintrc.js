module.exports = {
  extends: [
    'react-app',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 8,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.spec.js',
          '**/stories/**/*.js',
          '**/*.stories.js',
        ],
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/jsx-one-expression-per-line': 0,
    'react/no-did-update-set-state': 0,
    //    'import/prefer-default-export': 0,
    // 'import/no-default-export': 2,
    'max-lines': ['error', 300],
    'jsx-a11y/href-no-hash': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-underscore-dangle': ['error', { allow: ['_token'] }],
    camelcase: [2, { ignoreDestructuring: true }],
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: [
          'node_modules',
          'src', // replace with your app-module-path directory
        ],
      },
    },
  },
}
