import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

// Import local config (optional, won't error if file doesn't exist)
let localConfig = { localIgnores: [], localRules: {} };
try {
  localConfig = await import('./eslint.config.local.js');
} catch {
  // Local config file doesn't exist, use defaults
}

export default [
  { ignores: ['dist', 'coverage', ...localConfig.localIgnores] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      ...reactHooks.configs['recommended-latest'].rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      ...localConfig.localRules,
    },
  },
];
