module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^@s-com/(.*)$',
    '^@/(.*)$',
    '^(public/(.*)|[./](.*).(png|jpg))$',
    '^[./]',
  ],
};
