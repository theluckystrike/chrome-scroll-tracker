# Contributing to Chrome Scroll Tracker

Thank you for your interest in contributing. This guide covers how to report issues, submit changes, and follow our development workflow.

## REPORTING ISSUES

Before creating a new issue, please search existing issues to avoid duplicates.

When reporting a bug, include:
- A clear description of the problem
- Steps to reproduce the issue
- Your environment (browser version, Node.js version)
- Any relevant error messages or screenshots

When requesting a feature, describe:
- The use case for the new feature
- How the feature should work
- Any alternative solutions you've considered

## DEVELOPMENT WORKFLOW

1. Fork the repository
2. Create a feature branch from `main`
3. Make your changes following the code style guidelines
4. Test your changes thoroughly
5. Submit a pull request

### Running the Build

```bash
npm install
npm run build
```

## CODE STYLE

- Use TypeScript for all new code
- Follow the existing code conventions in the project
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Keep functions focused and small

## TESTING

Before submitting a pull request, verify the build passes:

```bash
npm run build
```

Ensure there are no TypeScript compilation errors. The project uses strict TypeScript configuration.

## LICENSE

By contributing to chrome-scroll-tracker, you agree that your contributions will be licensed under the MIT License.
