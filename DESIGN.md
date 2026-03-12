# 设计文档

## 概述

seclang-vscode 是一个 VS Code 插件，为 ModSecurity SecLang 规则语言提供编辑器支持。核心功能包括语法高亮、代码补全、悬停文档和代码片段。

## 架构

插件由以下几个独立模块组成：

```
extension.ts          ← 入口，注册 CompletionProvider 和 HoverProvider
docs-data.ts          ← 关键字文档数据（自动生成）
seclang.tmLanguage.json  ← TextMate 语法定义
seclang.snippets.json    ← 代码片段
language-configuration.json ← 括号匹配、注释等编辑器行为
```

激活时机：用户打开 `.seclang` / `.modsec` 文件或匹配的文件名时触发 `onLanguage:seclang`。

## 语法高亮

基于 TextMate Grammar，用正则匹配 SecLang 的各类语法元素：

- 指令（`SecRule`、`SecAction`、`Include` 等）
- 变量（`ARGS`、`REQUEST_HEADERS`、`TX` 等）
- 操作符（`@rx`、`@detectSQLi`、`@ipMatch` 等）
- 动作（`deny`、`pass`、`setvar`、`chain` 等）
- 转换函数（`t:lowercase`、`t:urlDecode` 等）
- 注释、字符串、数字、正则表达式

每类元素分配不同的 scope name，由主题配色方案决定最终颜色。

## 代码补全

`CompletionProvider` 在用户输入时提供补全建议。触发字符包括 `@`、`:`、`,`、空格、`"`。

补全逻辑按上下文区分：
- 输入 `@` 或在引号后跟 `@` → 只弹操作符
- 输入 `t:` → 只弹转换函数
- 其他情况 → 指令 + 变量 + 动作全部列出

每个补全项带 detail 描述和完整 Markdown 文档，排序通过 `sortText` 前缀控制（指令 > 变量 > 操作符 > 动作 > 转换函数）。

## 悬停文档

`HoverProvider` 用正则 `[@]?[A-Za-z_][A-Za-z0-9_:]*` 提取光标处的关键字，在预构建的 `keywordMap`（Map 结构，O(1) 查找）中匹配，返回 Markdown 格式的文档。

操作符和转换函数注册了别名（`@rx` → `rx`，`t:lowercase` → `lowercase`），确保光标在任意部分都能命中。

## 双语支持

文档数据每个条目同时存储 `en` 和 `zh` 两个字段。运行时通过 `vscode.env.language` 判断 VS Code 界面语言，以 `zh` 开头则显示中文，否则英文。缺失某语言时自动降级到另一语言。

## 文档数据生成

`scripts/generate-docs.js` 从 WGE 文档源（Hugo Markdown 格式）提取内容，解析 frontmatter，按分类生成 `src/docs-data.ts`。生成的文件约 1400 行，编译后 297KB。

更新流程：修改 WGE 文档 → 运行 `npm run gen-docs` → 重新编译。

## 文件关联

只关联 `.seclang` 和 `.modsec` 扩展名，外加几个特定文件名（`modsecurity.conf` 等）。不关联通用的 `.conf`，避免和其他工具冲突。
