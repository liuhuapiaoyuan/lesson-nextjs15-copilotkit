module.exports = {
  semi: false,
  trailingComma: 'es5',
  tabWidth: 2,
  singleQuote: true,
  bracketSameLine: false,
  jsxSingleQuote: true,
  quoteProps: 'preserve',
  arrowParens: 'avoid',
  proseWrap: 'never',
  overrides: [
    {
      'files': ['*.md'],
      'options': {
        embeddedLanguageFormatting: 'off',
      },
    },
  ],
}