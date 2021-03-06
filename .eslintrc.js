module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  ignorePatterns : ["main.ts"],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent' : ['warn', 2],
    'semi' : ['error', 'always'],
    'quotes' : ['warn', 'single'],
    'space-before-function-paren' : ['warn', 'never'],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    'curly': ["error", "multi"]
  },
  // "overrides": [
  //   {
  //     "files": ["*.ts","*.js","*.vue"],
  //     "rules": {
  //       "@typescript-eslint/explicit-function-return-type": ["warn"],
  //       "@typescript-eslint/explicit-module-boundary-types": ["error"]
  //     }
  //   }
  // ]
}
