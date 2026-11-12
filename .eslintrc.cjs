module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', 'node_modules', '.playwright-mcp', '*.config.js', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.3' } },
  plugins: ['react-refresh'],
  rules: {
    // Plain JS project without PropTypes
    'react/prop-types': 'off',
    // React 18 expects the lowercase fetchpriority attribute; the plugin targets React 19's camelCase prop
    'react/no-unknown-property': ['error', { ignore: ['fetchpriority'] }],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
}
