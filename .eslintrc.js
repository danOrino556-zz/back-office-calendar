'use strict';

module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: ['ember', "@babel"],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true,
  },
  rules: {
    'consistent-this' : 'off',


    //ESLINT BEST PRACTICES - Extra Checks
    'curly' : 'error',
    'eqeqeq' : 'error',
    'init-declarations' : 'error',
    'no-eq-null' : 'error',
    'no-eval' : 'error',
    'no-floating-decimal' : 'error',
    'no-implied-eval' : 'error',
    'no-iterator' : 'error',
    'no-lone-blocks' : 'error',
    'no-loop-func' : 'error',
    'no-new' : 'error',
    'no-new-func' : 'error',
    'no-new-wrappers' : 'error',
    'no-proto' : 'error',
    'no-self-compare' : 'error',
    'no-sequences' : 'error',
    '@babel/no-unused-expressions' : 'error',
    'no-use-before-define' : 'error',


    //ESLINT STYLE
    'comma-style': ["error", "last"],
    'func-names': ["error", "never"],
    'implicit-arrow-linebreak' : 'error',
    "indent": ["error", 2],
    'max-depth': ["error", 4],
    'max-lines' : ['error', 2600],
    'max-nested-callbacks': ["error", 8],
    'max-statements-per-line' : ['error', {max : 2}],
    'no-multi-assign' : 'error',
    'no-multiple-empty-lines': ["error", { "max": 2}],
    'semi': ['error', 'always'],
    'vars-on-top' : 'error',


    //ESLINT STYLE : ES6
    'no-confusing-arrow' : 'error',
    'no-duplicate-imports' : 'error',
    'no-var' : 'error',
    'prefer-const' : 'error',
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.prettierrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js',
      ],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      rules: {
        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off',
      },
    },
    {
      // Test files:
      files: ['tests/**/*-test.{js,ts}'],
    },
  ],
};
