export default {
  plugins: ['prettier-plugin-organize-imports'],
  semi: true,
  arrowParens: 'always',
  singleQuote: true,
  useTabs: false,
  trailingComma: 'none',
  printWidth: 100,
  tabWidth: 2,
  bracketSpacing: true,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'strict',
  vueIndentScriptAndStyle: true,
  // Vue specific settings
  vueIndentScriptAndStyle: true,
  // Ensure attributes are properly formatted
  htmlWhitespaceSensitivity: 'css',
  // Override for Vue files
  overrides: [
    {
      files: '*.vue',
      options: {
        printWidth: 100,
        singleAttributePerLine: false
      }
    }
  ]
};
