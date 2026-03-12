# SecLang for Visual Studio Code

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/HawkeyeTW/seclang-vscode)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

为 ModSecurity / SecLang WAF 规则语言提供开发支持的 VS Code 插件。

<!-- 截图占位，后续补充 -->
<!-- ![preview](images/preview.png) -->

## 为什么需要这个插件

写过 ModSecurity 规则的人都知道，SecLang 的指令、变量、操作符加起来有几百个，全靠记忆和查文档效率很低。这个插件把常用的关键字补全、文档查看、规则模板都集成到了编辑器里。

## 功能

**语法高亮** — 对指令、变量、操作符、动作、转换函数做了分类着色，一眼能分清规则结构。

**代码补全** — 覆盖 230+ 个关键字。输入 `@` 自动弹出操作符列表，输入 `t:` 弹出转换函数，补全项附带简要说明。

**悬停文档** — 鼠标放到关键字上直接看用法和示例，不用切到浏览器查文档。文档根据 VS Code 语言设置自动切换中英文。

**代码片段** — 提供 18 个常用规则模板，输入前缀按 Tab 就能展开。比如 `secrule-sqli` 直接生成一条 SQL 注入检测规则，`modsec-config` 生成完整的基础配置。

<details>
<summary>全部片段列表</summary>

| 前缀 | 说明 |
|------|------|
| `secrule` | 基本 SecRule |
| `secrule-chain` | 链式规则 |
| `secrule-sqli` | SQL 注入检测 |
| `secrule-xss` | XSS 检测 |
| `secrule-lfi` | 路径遍历检测 |
| `secrule-rce` | 命令注入检测 |
| `secrule-ipblock` | IP 封锁 |
| `secrule-ratelimit` | 速率限制 |
| `secrule-upload` | 文件上传检测 |
| `secrule-anomaly` | 异常评分 |
| `secrule-skip` | 跳过规则 |
| `secaction` | SecAction |
| `secmarker` | SecMarker |
| `secdefaultaction` | 默认动作 |
| `secruleengine` | 引擎配置 |
| `modsec-config` | 完整配置模板 |
| `include` | Include 指令 |
| `secruleremove` | 移除规则 |
| `secruleupdatetarget` | 更新规则目标 |
| `secgeolookup` | 地理封锁 |

</details>

## 安装

在 VS Code 扩展商店搜索 **SecLang** 安装，或者通过命令行：

```bash
code --install-extension seclang-vscode-1.0.0.vsix
```

## 文件关联

插件会自动识别以下文件：

- `*.seclang`、`*.modsec` 扩展名
- `modsecurity.conf`、`crs-setup.conf` 等特定文件名

`.conf` 不做自动关联，防止和 Nginx/Apache 等配置文件冲突。如果你的规则文件用的是 `.conf` 后缀，手动加一下关联就行：

```json
{
  "files.associations": {
    "waf-rules.conf": "seclang",
    "*.modsecurity.conf": "seclang"
  }
}
```

## 配置项

| 选项 | 默认值 | 说明 |
|------|--------|------|
| `seclang.enableCompletions` | `true` | 开关代码补全 |
| `seclang.enableHover` | `true` | 开关悬停文档 |

## 兼容性

支持 ModSecurity v2/v3、OWASP CRS 3.x、Coraza、WGE WAF 的规则语法。

## 本地开发

```bash
git clone https://github.com/HawkeyeTW/seclang-vscode.git
cd seclang-vscode
npm install
npm run compile
```

按 F5 启动调试窗口测试。打包用 `npx vsce package`。

文档数据从 [WGE 文档](https://hawkeyetw.github.io/wge/) 自动生成，更新方式：

```bash
npm run gen-docs
```

## License

[MIT](LICENSE)
