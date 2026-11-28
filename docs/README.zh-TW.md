# LIFF-Lit-Starter

🌐 [English](../README.md) | **臺灣正體中文**

以 [LINE LIFF](https://developers.line.biz/en/docs/liff/), [Lit](https://lit.dev/) 與 TypeScript 建立的最小化樣板，採用安全性優先的設計

[![CI](https://github.com/terrarium-dev/liff-lit-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/terrarium-dev/liff-lit-starter/actions/workflows/ci.yml)
[![CodeQL](https://github.com/terrarium-dev/liff-lit-starter/actions/workflows/codeql.yml/badge.svg)](https://github.com/terrarium-dev/liff-lit-starter/actions/workflows/codeql.yml)
[![License: MIT](https://img.shields.io/github/license/terrarium-dev/liff-lit-starter)](LICENSE)


## 特色

- **技術架構**：
    - Lit 3 + TypeScript 嚴格模式，使用 esbuild Bundling
    - LIFF 尚未介接
- **套件安全**：
    - 相依性套件鎖定精確版本號，至少發佈 7 天後才可安裝
    - 停用套件安裝時自動執行的腳本 (Install Scripts)，僅允許 esbuild 執行
- **內容安全**：嚴格的內容安全政策 (CSP)，阻擋未授權的 inline script
- **程式碼品質**：ESLint 啟用型別資訊, `security` 與 `lit` 規則
- **開發環境**：以非 root 執行，限制 Process 在執行期間取得比目前更高的權限


## 快速開始

**環境需求：**

- Docker
- Visual Studio Code
- Dev Containers 擴充套件

**啟動步驟：**

1. 使用 VS Code 開啟此 repo
2. 執行 **Reopen in Container** 在容器中重新開啟
3. 相依性套件會自動安裝，請稍待
4. 將 `.env.development.example` 複製為 `.env.development` 並填入 `LIFF_ID`
5. 執行 `pnpm dev`，再開啟 http://127.0.0.1:8000


## LIFF ID

LIFF ID 不存放於此 repo，而是在建置時透過環境變數 `LIFF_ID` 注入；若未設定此變數，建置將會失敗

- **取得**：前往 LINE Developers > Providers > Channels，選擇 channel，開啟 **LIFF** 分頁，在 LIFF applications 點選 **Add** 建立 app，並複製完整的 LIFF ID
- **本機**：設定於 `.env.development`
- **GitHub Actions**：前往 Settings > Secrets and variables > Actions，點選 **New repository secret**，名稱填入 `LIFF_ID`，並在建置步驟以 `${{ secrets.LIFF_ID }}` 引用


## 常用指令

| 指令             | 說明                                 |
| ---------------- | ----------------------------------- |
| `pnpm dev`       | 建置並啟動開發伺服器 `127.0.0.1:8000` |
| `pnpm build`     | 建置並輸出至 `dist/`                 |
| `pnpm typecheck` | 執行 TypeScript 型別檢查             |
| `pnpm lint`      | 執行 ESLint                         |
| `pnpm check`     | 執行型別檢查與 ESLint                |


## 參與貢獻

請參閱 [參與貢獻](CONTRIBUTING.zh-TW.md)


## 授權

[MIT](../LICENSE)
