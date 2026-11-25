# LIFF-Lit-Starter

A minimal, security-first starter built with [LINE LIFF](https://developers.line.biz/en/docs/liff/), [Lit](https://lit.dev/), and TypeScript

[![CI](https://github.com/terrarium-dev/liff-lit-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/terrarium-dev/liff-lit-starter/actions/workflows/ci.yml)
[![CodeQL](https://github.com/terrarium-dev/liff-lit-starter/actions/workflows/codeql.yml/badge.svg)](https://github.com/terrarium-dev/liff-lit-starter/actions/workflows/codeql.yml)
[![License: MIT](https://img.shields.io/github/license/terrarium-dev/liff-lit-starter)](LICENSE)


🌐 **English** | [臺灣正體中文](docs/README.zh-TW.md)


## Features

- **Tech stack**:
    - Lit 3 + TypeScript (strict mode), bundled with esbuild
    - LIFF integration is not included yet
- **Package security**:
    - Dependencies pinned to exact versions; packages must be at least 7 days old to install
    - Install scripts disabled, except for esbuild
- **Content security**: Strict Content Security Policy (CSP) to block unauthorized inline scripts
- **Code quality**: ESLint with type-aware, `security`, and `lit` rules
- **Dev environment**: Runs as non-root; processes cannot gain higher privileges at runtime


## Getting Started

**Requirements:**

- Docker
- Visual Studio Code
- Dev Containers extension

**Steps:**

1. Open this repo in VS Code
2. Run **Reopen in Container** to reopen the project in the container
3. Dependencies install automatically; please wait
4. Run `pnpm dev`, then open http://127.0.0.1:8000


## Commands

| Command          | Description                                        |
| ---------------- | -------------------------------------------------- |
| `pnpm dev`       | Build and start the dev server on `127.0.0.1:8000` |
| `pnpm build`     | Build and output to `dist/`                        |
| `pnpm typecheck` | Run the TypeScript type check                      |
| `pnpm lint`      | Run ESLint                                         |
| `pnpm check`     | Run the type check and ESLint                      |


## License

[MIT](LICENSE)
