module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'plugin:kdu/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  globals: {
    bridge: true,
    chrome: true,
    localStorage: 'off',
    HTMLDocument: true,
    name: 'off',
    browser: true,
  },
  rules: {
    'kdu/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'no-var': ['error'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
        },
        singleline: {
          delimiter: 'comma',
        },
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    camelcase: 'warn',
    'no-prototype-builtins': 'off',
    'no-use-before-define': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
  },
  ignorePatterns: [
    'node_modules/',
    '/packages/*/lib/',
    'dist/',
    'build/',
    'build-node/',
    '/legacy',
  ],
  overrides: [
    {
      files: [
        'release.js',
        'sign-firefox.js',
        'extension-zips.js',
        'packages/build-tools/**',
        'packages/shell-electron/**',
        '**webpack.config.js',
      ],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/camelcase': 'off',
      },
    },
  ],
}
