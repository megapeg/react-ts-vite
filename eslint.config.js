import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jestDom from 'eslint-plugin-jest-dom';
import testingLibrary from 'eslint-plugin-testing-library';
import vitest from 'eslint-plugin-vitest';
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
      react, // includes JSX support
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the react version specific rules
        runtime: 'automatic', // Enable the new JSX transform
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs['recommended-latest'].rules,
      'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      ...localConfig.localRules,
    },
  },
  // target test files only
  {
    files: ['**/*.test.{ts,tsx,js,jsx}', '**/__tests__/**/*.{ts,tsx,js,jsx}'],
    plugins: {
      'jest-dom': jestDom,
      'testing-library': testingLibrary,
      vitest,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...vitest.configs.env.globals,
      },
    },
    rules: {
      ...jestDom.configs.recommended.rules,
      ...testingLibrary.configs.react.rules,
      ...vitest.configs.recommended.rules,
    },
  },
];
