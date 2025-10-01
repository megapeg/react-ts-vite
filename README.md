# React + TypeScript + Vite + Tailwind+shadcn

This template provides a minimal setup to get React working in Vite with HMR. Additional support :

- Eslint on precommit hook
- Prettier support is also added for onsave in VSC
- Vitest and React Test Library for testing

## Install Precommit Hooks

npm install && npx husky init && echo npx lint-staged > .husky/pre-commit

# Install template dependencies

> npm install
> npm run dev

# Configure Tailwindcss + Shadcn

- [Tailwind CSS](https://tailwindcss.com/docs/guides/vite)
- [shadcn/ui](https://ui.shadcn.com/docs/installation/vite) follow the steps outlined here.
  -> npm install --save-dev prettier-plugin-tailwindcss@^0.6.14

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Local ESLint Configuration

For personal ESLint overrides that shouldn't be committed to the repository, create an optional `eslint.config.local.js` file:

```js
// eslint.config.local.js - not checked into git
export const localIgnores = ['my-temp-folder/', 'experimental/**'];

export const localRules = {
  'no-console': 'off',
  '@typescript-eslint/no-unused-vars': 'warn',
};
```

This file is automatically imported by the main ESLint config and allows you to:

- Add personal ignore patterns without affecting the team
- Override specific rules for your development workflow
- Keep experimental or temporary configurations local

The file is optional - ESLint will work normally if it doesn't exist.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
