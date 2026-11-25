# Contributing

🌐 **English** | [臺灣正體中文](docs/CONTRIBUTING.zh-TW.md)

## 1. Getting Started

Read the [README](README.md) for development environment setup and license information.

## 2. Reporting Issues

- Bugs and feature suggestions: open an Issue.
- Security vulnerabilities: do not open a public Issue. See [SECURITY](SECURITY.md).

## 3. Before You Commit

Run the following command locally before committing:

`pnpm check`

Do not bypass checks (e.g., using `--no-verify`).

## 4. Git Workflow

- Commit messages: follow [Conventional Commits](https://www.conventionalcommits.org/), using the format `type(scope): subject`.
- PR title: follow the commit message format.
- Automated checks: every PR runs CI and CodeQL code scanning. All required checks must pass before merging.
