# React + TypeScript + Vite + Tailwind+shadcn

This template provides a minimal setup to get React working in Vite with HMR. Additional support :

- Eslint on precommit hook
- Prettier support is also added for onsave in VSC
- Vitest and React Test Library for testing
- Tailwind CSS v4 with shadcn/ui components and Radix UI
- DevContainer for VS Code
- GitHub Actions CI pipeline

## Install Precommit Hooks

npm install && npx husky init && echo npx lint-staged > .husky/pre-commit

# Install template dependencies

> npm install
> npm run dev

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

## Features Included

### Development Tools

- **Vite** - Fast build tool with HMR (Hot Module Replacement)
- **TypeScript** - Type safety with path aliases (`@/` maps to `src/`)
- **ESLint** - Code linting with React and TypeScript rules
- **Prettier** - Code formatting with Tailwind CSS plugin
- **Husky** - Git hooks for pre-commit linting and formatting

### UI Framework

- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components with design tokens
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

### Testing Setup

- **Vitest** - Fast unit testing framework
- **React Testing Library** - Component testing utilities
- **jsdom** - DOM environment for testing
- **@testing-library/jest-dom** - Custom Jest matchers

### CI/CD & Security

- **GitHub Actions** - Automated CI pipeline with:
  - Dependency installation
  - Security audit checks
  - Code linting
  - Build verification
  - Test execution
  - PR failure notifications

- **Dependabot** - Automated security and dependency management:
  - Daily security vulnerability scanning
  - Automatic pull requests for security updates
  - Prioritized security patches for direct and indirect dependencies
  - GitHub Actions workflow updates

- **Security Workflows** - Comprehensive security monitoring:
  - Daily automated security audits
  - CodeQL static analysis for vulnerability detection
  - Dependency review for pull requests
  - Security policy enforcement

### Development Container

- **DevContainer** - VS Code development container setup
- **Docker** - Containerized development environment
- **Auto-install** - Dependencies and dev server auto-start

## Environment Variables

Environment variables are type-safe through `src/vite-env.d.ts`. Add new variables to the `ImportMetaEnv` interface:

```typescript
interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_API_URL: string; // Add new variables here
}
```

Env vars are loaded by Vite in the following order

[mode] = test / development

1. **`.env.[mode].local`** - Highest Priority. Development mode only. Never committed, used for secrets.
2. **`.env.[mode]`** - Development or Test mode (can be committed, common team or mock settings)
3. **`.env.local`** - Always loaded useful for local secrets, never commit.
4. **`.env`** - Base settings, lowest priority and always loaded. Can be committed.

## Security

This project implements comprehensive security measures to protect against vulnerabilities and ensure secure development practices.

### Automated Security Monitoring

#### Dependabot Configuration
- **Daily Security Scans**: Automatically checks for security vulnerabilities in dependencies
- **Priority Security Updates**: Security patches are prioritized over feature updates
- **Comprehensive Coverage**: Monitors both direct and indirect (transitive) dependencies
- **Automated PRs**: Creates pull requests for security updates with proper labeling
- **GitHub Actions Updates**: Keeps CI/CD workflows secure and up-to-date

#### Security Workflows
- **Daily Security Audits**: Automated `npm audit` runs to detect vulnerabilities
- **CodeQL Analysis**: Static code analysis for security vulnerabilities
- **Dependency Review**: Reviews dependency changes in pull requests
- **Vulnerability Thresholds**: Fails builds on high/critical vulnerabilities

### Security Best Practices

#### For Contributors
1. **Keep Dependencies Updated**: Regularly review and approve Dependabot PRs
2. **Run Security Audits**: Use `npm audit` before committing changes
3. **Review Dependencies**: Only add necessary dependencies from trusted sources
4. **Follow Secure Coding**: Use TypeScript for type safety and validate inputs
5. **Test Security Changes**: Ensure security updates don't break functionality

#### For Maintainers
1. **Monitor Security Alerts**: Respond promptly to GitHub security advisories
2. **Review Dependabot PRs**: Prioritize security updates over feature development
3. **Update Security Policy**: Keep `.github/SECURITY.md` current with contact info
4. **Configure Notifications**: Set up alerts for security-related issues

### Security Commands

```bash
# Run security audit
npm audit

# Fix automatically fixable vulnerabilities
npm audit fix

# Check for high/critical vulnerabilities only
npm audit --audit-level=high

# Generate detailed audit report
npm audit --json > security-report.json
```

### Reporting Security Issues

Please refer to our [Security Policy](.github/SECURITY.md) for information on how to report security vulnerabilities responsibly.

## Available Scripts

- `npm run dev` - Start development server with debug output
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests once
- `npm run test:watch` - Run tests in watch mode
- `npm run security:audit` - Run security audit (moderate level)
- `npm run security:fix` - Automatically fix security vulnerabilities
- `npm run security:check` - Quick security check (high/critical only)

## VS Code Integration

- **Prettier** - Format on save enabled
- **Tailwind CSS** - IntelliSense and syntax highlighting
- **TypeScript** - Full language support with path aliases
- **ESLint** - Real-time linting with auto-fix
