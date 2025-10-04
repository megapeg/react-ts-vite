# Security Policy

## Supported Versions

We actively maintain and provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please report it by:

1. **DO NOT** open a public issue
2. Send an email to the maintainers (replace with actual contact)
3. Include detailed information about the vulnerability
4. Allow reasonable time for the issue to be addressed

## Security Measures

### Automated Security Updates

This project uses Dependabot to automatically:

- Monitor dependencies for known security vulnerabilities
- Create pull requests for security updates daily
- Prioritize security patches over feature updates
- Track both direct and indirect (transitive) dependencies

### Dependency Management

- All dependencies are regularly audited for security issues
- Security updates are applied promptly
- Unused dependencies are removed to reduce attack surface
- Dependencies are kept up-to-date with latest stable versions

### Development Security

- Code is linted and formatted consistently
- Tests are required for all changes
- Security-focused ESLint rules are enabled
- Pre-commit hooks ensure code quality

## Security Best Practices

When contributing to this project:

1. Keep dependencies minimal and up-to-date
2. Follow secure coding practices
3. Validate all inputs
4. Use TypeScript for type safety
5. Run security audits regularly (`npm audit`)
6. Review Dependabot PRs promptly

## Vulnerability Response

When a security vulnerability is identified:

1. Assess the impact and severity
2. Develop and test a fix
3. Release a security update
4. Notify users of the vulnerability and fix
5. Update this security policy if needed

## Contact

For security-related questions or concerns, please contact the project maintainers.