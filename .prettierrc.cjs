module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,

  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-twin.macro'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],

  // @trivago/prettier-plugin-sort-imports
  importOrder: [
    '(^(.*)react(.*)$|^react/(.*)$)',
    '^@(ui)?/(.*)$',
    '^@features/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
}
