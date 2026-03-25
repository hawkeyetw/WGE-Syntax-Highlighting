# Changelog

## [1.0.6] - 2026-03-24

### Added
- 同步 `/root/WGE-FILE` 最新文档生成结果到插件内置文档数据
- 为新增关键字补充语法高亮：`@xor`、`allow:phase`、`allow:request`、`t`、`t:cmdline`、`t:escapeSeqDecode`、`t:utf8ToUnicode`

### Fixed
- 补全项首行摘要增加语言回退，单语种文档条目也能正常显示说明

## [1.0.5] - 2026-03-24

### Fixed
- 修复补全文档详情与标题重复显示的问题
- 调整本地打包配置，使用 `--no-dependencies` 生成可安装的 VSIX
- 指定扩展运行位置为 `workspace`，减少 Remote WSL / SSH 场景下的重复悬停

### Changed
- 更新 Marketplace README，移除过期的静态版本信息
- 增加旧发布 ID 升级提示，避免安装两个同名扩展导致悬停重复

## [1.0.2] - 2026-03-23

### Changed
- 更新插件显示名称为 SecLang - WGE Rules Language Support
- 修复插件图标显示

## [1.0.0] - 2026-03-23

### Added
- 完整的 SecLang 语法高亮支持
- 智能代码补全（指令、变量、操作符、动作、转换函数，覆盖 230+ 关键字）
- 悬停文档（中英文双语，自动切换）
- 20 个预定义代码片段（SQL注入检测、XSS检测、速率限制等常见场景）
- 支持 .conf, .seclang, .modsec 文件扩展名
- 兼容 ModSecurity v2/v3、OWASP CRS 3.x、Coraza、WGE WAF
