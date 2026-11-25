# 參與貢獻

🌐 [English](../CONTRIBUTING.md) | **臺灣正體中文**

## 1. 開始之前

請先閱讀 [README](README.zh-TW.md)，了解開發環境設定與授權資訊

## 2. 回報問題

- 錯誤或功能建議：請開啟 Issue
- 資安漏洞：請勿開啟公開 Issue，請參閱 [SECURITY](SECURITY.zh-TW.md)

## 3. 提交前檢查

提交前，請先在本機執行：

`pnpm check`

請勿跳過檢查（例如使用 `--no-verify`）

## 4. Git 工作流程

- Commit 訊息：遵循 [Conventional Commits](https://www.conventionalcommits.org/)，格式為 `type(scope): subject`
- PR 標題：沿用 Commit 訊息格式
- 自動檢查：每個 PR 都會執行 CI 與 CodeQL 程式碼掃描，所有必要檢查通過後才會合併
