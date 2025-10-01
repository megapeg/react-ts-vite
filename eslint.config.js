import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';

// Import local config (optional, won't error if file doesn't exist)
let localConfig = { localIgnores: [], localRules: {} };
try {
  localConfig = await import('./eslint.config.local.js');
} catch {
  // Local config file doesn't exist, use defaults
}

export default tseslint.config([
  globalIgnores(['dist', ...localConfig.localIgnores]),
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      ...localConfig.localRules,
    },
  },
]);
