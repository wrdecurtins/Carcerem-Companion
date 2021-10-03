module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
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
    'indent' : ['warn', 4],
    'semi' : ['error', 'always'],
    'quotes' : ['warn', 'single'],
    'space-before-function-paren' : ['warn', 'never'],
    "@typescript-eslint/explicit-function-return-type": "off"
  },
  "overrides": [
    {
      "files": [".vue"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": ["warn"]
      }
    }
  ]
}
