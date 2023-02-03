module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: [
    'typescript',
    'classProperties',
    'decorators-legacy',
  ],
  importOrder: [
    '^@nestjs/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@brudi/(.*)$',
    '^src/(.*)$',
    '^[./]',
  ],
};
