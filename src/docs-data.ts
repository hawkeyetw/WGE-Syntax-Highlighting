// ============================================================================
// 此文件由 scripts/generate-docs.js 自动生成，请勿手动编辑
// 更新方法: 修改文档后运行 pnpm run gen-docs
// 生成时间: 2026-03-24T10:38:21.883Z
// 文档来源: /root/WGE-FILE/docs/content
// ============================================================================

export interface DocEntry {
    /** 英文文档内容 (Markdown) */
    en: string;
    /** 中文文档内容 (Markdown) */
    zh: string;
    /** URL slug，用于生成文档链接 */
    slug: string;
}

// 指令 - 61 个条目
export const DIRECTIVE_DOCS: Record<string, DocEntry> = {
    "Include": {
        en: "**Description:** Include an external configuration file into the current configuration.\n\n\n**Syntax:** `Include /path/to/file.conf`\n\n\n**Case Sensitive:** Yes\n\n\nThis directive includes the contents of an external configuration file at the current position. It supports both absolute paths and relative paths (relative to the current configuration file). Wildcards can be used to include multiple files.\n\nThis is commonly used to organize rule sets into separate files for easier management.\n\n\n**Example:**\n\n\n```apache\nInclude /etc/modsecurity/crs/crs-setup.conf\nInclude /etc/modsecurity/crs/rules/*.conf\n```",
        zh: "**描述:** 将外部配置文件包含到当前配置中。\n\n\n**语法:** `Include /path/to/file.conf`\n\n\n**区分大小写:** 是\n\n\n此指令在当前位置包含外部配置文件的内容。支持绝对路径和相对路径（相对于当前配置文件）。可以使用通配符来包含多个文件。\n\n通常用于将规则集组织到单独的文件中，以便于管理。\n\n\n**示例:**\n\n\n```apache\nInclude /etc/modsecurity/crs/crs-setup.conf\nInclude /etc/modsecurity/crs/rules/*.conf\n```",
        slug: "include"
    },
    "SecAction": {
        en: "**Description:** Unconditionally execute the specified actions.\n\n\n**Syntax:** `SecAction \"ACTIONS\"`\n\n\nSecAction is used to unconditionally execute a set of actions, commonly used for setting variables, initializing collections, etc.\n\n\n\n**Case Sensitive:** Yes\n\n\n\nSecAction unconditionally processes the specified action list, and its parameter syntax is identical to the third parameter of SecRule. This directive is commonly used for setting variables and initializing persistent collections through the initcol action. Because there are no variable and operator parameters, SecAction's actions will be executed unconditionally during each processing.\n\n\n**Example:**\n\n\n```apache\nSecAction \"id:9001,phase:1,nolog,pass,setvar:tx.blocking_paranoia_level=2\"\n```",
        zh: "**描述:** 无条件执行指定的动作。\n\n\n**语法:** `SecAction \"ACTIONS\"`\n\n\nSecAction 用于无条件执行一组动作,常用于设置变量、初始化集合等。\n\n\n\n**区分大小写:** 是\n\n\n\nSecAction 无条件处理指定的动作列表，其参数语法与 SecRule 的第三参数完全一致。该指令常用于设置变量及通过 initcol 操作初始化持久集合。由于没有变量和操作符参数，SecAction 的动作将在每次处理时无条件执行。\n\n\n**示例:**\n\n\n```apache\nSecAction \"id:9001,phase:1,nolog,pass,setvar:tx.blocking_paranoia_level=2\"\n```",
        slug: "secaction"
    },
    "SecArgumentSeparator": {
        en: "**Description:** Specify the parameter separator character used for application/x-www-form-urlencoded content.\n\n\n**Syntax:** `SecArgumentSeparator CHARACTER`\n\n\n**Default:** &\n\n\n**Case Sensitive:** Yes\n\n\n**Implemented:** No\n\n\nThis directive is required when the backend web application uses a non-standard parameter separator. Some applications use semicolons as separators. Do not change the default setting unless you confirm that the application you are protecting requires a different separator. If this directive is not correctly configured for each web application, parameters will not be parsed correctly, significantly reducing rule matching effectiveness.\n\n\n**Example:**\n\n\n```apache\nSecArgumentSeparator &\n```",
        zh: "**描述:** 指定应用于 application/x-www-form-urlencoded 内容的参数分隔符字符。\n\n\n**语法:** `SecArgumentSeparator CHARACTER`\n\n\n**默认值:** &\n\n\n**区分大小写:** 是\n\n\n**是否实现:** 否\n\n\n当后端 Web 应用程序使用非标准参数分隔符时需要此指令。某些应用程序会采用分号作为分隔符。除非确认所处理的应用程序需要不同分隔符，否则不应更改默认设置。若未为每个 Web 应用程序正确配置此指令，将无法正确解析参数，导致规则匹配效果显著降低。\n\n\n**示例:**\n\n\n```apache\nSecArgumentSeparator &\n```",
        slug: "secargumentseparator"
    },
    "SecArgumentsLimit": {
        en: "**Description:** Configure the maximum number of acceptable parameters.\n\n\n**Syntax:** `SecArgumentsLimit LIMIT`\n\n\n**Case Sensitive:** Yes\n\n\n\n**Implemented:** No\n\n\nWhen using this setting, it is recommended to combine it with rules that detect the same integer value and reject requests when the limit is reached. For example:\nIf a matching rule is not configured, an attacker may evade detection by placing attack payloads in parameters beyond the limit.\n\n\n**Example:**\n\n\n```apache\nSecArgumentsLimit 1000\n```",
        zh: "**描述:** 配置可接受的最大参数数量。\n\n\n**语法:** `SecArgumentsLimit LIMIT`\n\n\n**区分大小写:** 是\n\n\n\n**是否实现：** 否\n\n\n使用此设置时，建议配合规则检测相同整数值，达到上限时拒绝请求。例如：\n若未配置匹配规则，攻击者可能通过将攻击有效载荷放置在超出限制的参数中规避检测。\n\n\n**示例:**\n\n\n```apache\nSecArgumentsLimit 1000\n```",
        slug: "secargumentslimit"
    },
    "SecAuditEngine": {
        en: "**Description:** Configure the audit logging engine.\n\n\n**Syntax:** `SecAuditEngine On|Off|RelevantOnly`\n\n\n**Default:** Off\n\n**Options:**\n\n\n- **On:** Enable audit logging for all transactions\n- **Off:** Disable audit logging\n- **RelevantOnly:** Only log transactions that trigger a warning/error or match the status code pattern configured via SecAuditLogRelevantStatus\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\n\n**Example:**\n\n\n```apache\nSecAuditEngine RelevantOnly\n```",
        zh: "**描述:** 配置审计日志引擎。\n\n\n**语法:** `SecAuditEngine On|Off|RelevantOnly`\n\n\n**默认值:** Off\n\n**可选值:**\n\n\n- **On:** 对所有事务启用审计日志\n- **Off:** 禁用审计日志\n- **RelevantOnly:** 仅记录触发警告/错误或匹配 SecAuditLogRelevantStatus 配置的状态码的事务\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n\n**示例:**\n\n\n```apache\nSecAuditEngine RelevantOnly\n```",
        slug: "secauditengine"
    },
    "SecAuditLog": {
        en: "**Description:** Configure the path to the primary audit log file.\n\n\n**Syntax:** `SecAuditLog /path/to/audit.log`\n\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\n\nThis directive defines the path to the main audit log file where the engine will write detailed information about transactions.\n\n\n**Example:**\n\n\n```apache\nSecAuditLog /var/log/modsec_audit.log\n```",
        zh: "**描述:** 配置主审计日志文件的路径。\n\n\n**语法:** `SecAuditLog /path/to/audit.log`\n\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n\n此指令定义引擎写入事务详细信息的主审计日志文件路径。\n\n\n**示例:**\n\n\n```apache\nSecAuditLog /var/log/modsec_audit.log\n```",
        slug: "secauditlog"
    },
    "SecAuditLog2": {
        en: "**Description:** Configure the path to the secondary audit log file.\n\n\n**Syntax:** `SecAuditLog2 /path/to/audit2.log`\n\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\n\nThis directive defines the path to a secondary audit log file, typically used for concurrent logging or as a backup destination.\n\n\n**Example:**\n\n\n```apache\nSecAuditLog2 /var/log/modsec_audit2.log\n```",
        zh: "**描述:** 配置辅助审计日志文件的路径。\n\n\n**语法:** `SecAuditLog2 /path/to/audit2.log`\n\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n\n此指令定义辅助审计日志文件的路径，通常用于并发日志记录或作为备份目标。\n\n\n**示例:**\n\n\n```apache\nSecAuditLog2 /var/log/modsec_audit2.log\n```",
        slug: "secauditlog2"
    },
    "SecAuditLogDirMode": {
        en: "**Description:** Configure the directory permission mode for concurrent audit log directories.\n\n\n**Syntax:** `SecAuditLogDirMode OCTAL`\n\n\n**Default:** 0600\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\n\nThis directive sets the Unix permission mode for directories created when using concurrent audit logging. The value must be specified in octal format.\n\n\n**Example:**\n\n\n```apache\nSecAuditLogDirMode 0750\n```",
        zh: "**描述:** 配置并发审计日志目录的目录权限模式。\n\n\n**语法:** `SecAuditLogDirMode OCTAL`\n\n\n**默认值:** 0600\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n\n此指令设置使用并发审计日志时创建目录的 Unix 权限模式。值必须以八进制格式指定。\n\n\n**示例:**\n\n\n```apache\nSecAuditLogDirMode 0750\n```",
        slug: "secauditlogdirmode"
    },
    "SecAuditLogFileMode": {
        en: "**Description:** Configure the file permission mode for audit log files.\n\n\n**Syntax:** `SecAuditLogFileMode OCTAL`\n\n\n**Default:** 0600\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\n\nThis directive sets the Unix permission mode for audit log files created when using concurrent audit logging. The value must be specified in octal format.\n\n\n**Example:**\n\n\n```apache\nSecAuditLogFileMode 0640\n```",
        zh: "**描述:** 配置审计日志文件的文件权限模式。\n\n\n**语法:** `SecAuditLogFileMode OCTAL`\n\n\n**默认值:** 0600\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n\n此指令设置使用并发审计日志时创建的审计日志文件的 Unix 权限模式。值必须以八进制格式指定。\n\n\n**示例:**\n\n\n```apache\nSecAuditLogFileMode 0640\n```",
        slug: "secauditlogfilemode"
    },
    "SecAuditLogFormat": {
        en: "**Description:** Configure the format of the audit log output.\n\n\n**Syntax:** `SecAuditLogFormat Native|JSON`\n\n\n**Default:** Native\n\n**Options:**\n\n\n- **Native:** Use the traditional ModSecurity audit log format\n- **JSON:** Output audit log entries in JSON format for easier parsing\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\n\n**Example:**\n\n\n```apache\nSecAuditLogFormat JSON\n```",
        zh: "**描述:** 配置审计日志的输出格式。\n\n\n**语法:** `SecAuditLogFormat Native|JSON`\n\n\n**默认值:** Native\n\n**可选值:**\n\n\n- **Native:** 使用传统的 ModSecurity 审计日志格式\n- **JSON:** 以 JSON 格式输出审计日志条目，便于解析\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n\n**示例:**\n\n\n```apache\nSecAuditLogFormat JSON\n```",
        slug: "secauditlogformat"
    },
    "SecAuditLogParts": {
        en: "**Description:** Configure which parts of a transaction should be recorded in the audit log.\n\n\n**Syntax:** `SecAuditLogParts PARTS`\n\n\n**Default:** ABCFHZ\n\n**Parts:**\n\n\n- **A:** Audit log header (mandatory)\n- **B:** Request headers\n- **C:** Request body (only if request body access is enabled and the body exists)\n- **D:** Reserved for intermediary response headers\n- **E:** Response body (only if response body access is enabled and the body exists)\n- **F:** Final response headers\n- **G:** Reserved for actual response body\n- **H:** Audit log trailer (contains additional data)\n- **I:** Compact request body (alternative to C, excludes files)\n- **J:** Reserved for upload file information\n- **K:** List of all rules that matched\n- **Z:** Final boundary marker (mandatory)\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\n\n**Example:**\n\n\n```apache\nSecAuditLogParts ABCFHZ\n```",
        zh: "**描述:** 配置应在审计日志中记录事务的哪些部分。\n\n\n**语法:** `SecAuditLogParts PARTS`\n\n\n**默认值:** ABCFHZ\n\n**可选部分:**\n\n\n- **A:** 审计日志头（必需）\n- **B:** 请求头\n- **C:** 请求体（仅当启用请求体访问且请求体存在时）\n- **D:** 保留用于中间响应头\n- **E:** 响应体（仅当启用响应体访问且响应体存在时）\n- **F:** 最终响应头\n- **G:** 保留用于实际响应体\n- **H:** 审计日志尾部（包含附加数据）\n- **I:** 精简请求体（C 的替代品，排除文件）\n- **J:** 保留用于上传文件信息\n- **K:** 所有匹配规则的列表\n- **Z:** 最终边界标记（必需）\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n\n**示例:**\n\n\n```apache\nSecAuditLogParts ABCFHZ\n```",
        slug: "secauditlogparts"
    },
    "SecAuditLogRelevantStatus": {
        en: "**Description:** Configure which HTTP response status codes are considered relevant for audit logging.\n\n\n**Syntax:** `SecAuditLogRelevantStatus REGEX`\n\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\n\nThis directive defines a regular expression pattern to match HTTP response status codes. When SecAuditEngine is set to RelevantOnly, only transactions with matching response status codes will be logged.\n\n\n**Example:**\n\n\n```apache\nSecAuditLogRelevantStatus \"^(?:5|4(?!04))\"\n```\n\nThis example logs all 5xx errors and 4xx errors except 404.",
        zh: "**描述:** 配置哪些 HTTP 响应状态码被视为审计日志的相关状态码。\n\n\n**语法:** `SecAuditLogRelevantStatus REGEX`\n\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n\n此指令定义用于匹配 HTTP 响应状态码的正则表达式模式。当 SecAuditEngine 设置为 RelevantOnly 时，只有匹配响应状态码的事务才会被记录。\n\n\n**示例:**\n\n\n```apache\nSecAuditLogRelevantStatus \"^(?:5|4(?!04))\"\n```\n\n此示例记录所有 5xx 错误和除 404 外的 4xx 错误。",
        slug: "secauditlogrelevantstatus"
    },
    "SecAuditLogStorageDir": {
        en: "**Description:** Configure the directory for storing individual audit log files in concurrent mode.\n\n\n**Syntax:** `SecAuditLogStorageDir /path/to/dir`\n\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\n\nThis directive specifies the directory where individual audit log files will be stored when using concurrent audit logging (SecAuditLogType Concurrent). Each transaction will have its own file in this directory.\n\n\n**Example:**\n\n\n```apache\nSecAuditLogStorageDir /var/log/modsec_audit\n```",
        zh: "**描述:** 配置并发模式下存储单独审计日志文件的目录。\n\n\n**语法:** `SecAuditLogStorageDir /path/to/dir`\n\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n\n此指令指定使用并发审计日志（SecAuditLogType Concurrent）时存储单独审计日志文件的目录。每个事务将在此目录中有自己的文件。\n\n\n**示例:**\n\n\n```apache\nSecAuditLogStorageDir /var/log/modsec_audit\n```",
        slug: "secauditlogstoragedir"
    },
    "SecAuditLogType": {
        en: "**Description:** Configure the type of audit logging mechanism.\n\n\n**Syntax:** `SecAuditLogType Serial|Concurrent`\n\n\n**Default:** Serial\n\n**Options:**\n\n\n- **Serial:** Write all audit log entries to a single file (specified by SecAuditLog), suitable for low-traffic environments\n- **Concurrent:** Create separate files for each transaction in the directory specified by SecAuditLogStorageDir, suitable for high-traffic environments\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\n\n**Example:**\n\n\n```apache\nSecAuditLogType Concurrent\n```",
        zh: "**描述:** 配置审计日志的记录机制类型。\n\n\n**语法:** `SecAuditLogType Serial|Concurrent`\n\n\n**默认值:** Serial\n\n**可选值:**\n\n\n- **Serial:** 将所有审计日志条目写入单个文件（由 SecAuditLog 指定），适用于低流量环境\n- **Concurrent:** 为每个事务在 SecAuditLogStorageDir 指定的目录中创建单独的文件，适用于高流量环境\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n\n**示例:**\n\n\n```apache\nSecAuditLogType Concurrent\n```",
        slug: "secauditlogtype"
    },
    "SecCollectionTimeout": {
        en: "**Description:** Configure the expiration time (seconds) for persistent collections.\n\n\n**Syntax:** `SecCollectionTimeout SECONDS`\n\n\n**Default:** 3600\n\n\n**Case Sensitive:** Yes\n\n\n**Implemented:** No\n\n\nPersistent collections (such as IP, SESSION, USER, etc.) are used to track data across requests. This directive defines the lifetime of collection records. After this time, collection records will be automatically cleaned up. Setting this value appropriately can balance security tracking needs and storage space usage.\n\n\n**Example:**\n\n\n```apache\nSecCollectionTimeout 3600\n```",
        zh: "**描述:** 配置持久化集合的过期时间 (秒)。\n\n\n**语法:** `SecCollectionTimeout SECONDS`\n\n\n**默认值:** 3600\n\n\n**区分大小写:** 是\n\n\n**是否实现:** 否\n\n\n持久化集合（如 IP、SESSION、USER 等）用于跨请求跟踪数据。此指令定义集合记录的存活时间。超过此时间后，集合记录将被自动清理。合理设置此值可平衡安全跟踪需求和存储空间使用。\n\n\n**示例:**\n\n\n```apache\nSecCollectionTimeout 3600\n```",
        slug: "seccollectiontimeout"
    },
    "SecComponentSignature": {
        en: "**Description:** Add component signature information to the log.\n\n\n**Syntax:** `SecComponentSignature \"SIGNATURE\"`\n\n\n**Case Sensitive:** Yes\n\n\n**Implemented:** No\n\n\nThis directive is used to identify the presence of important rule sets. The complete signature will be recorded in the transaction audit log.\n\n\n**Example:**\n\n\n```apache\nSecComponentSignature \"OWASP_CRS/3.3.2\"\n```",
        zh: "**描述:** 添加组件签名信息到日志中。\n\n\n**语法:** `SecComponentSignature \"SIGNATURE\"`\n\n\n**区分大小写:** 是\n\n\n**是否实现:** 否\n\n\n此指令用于标识重要规则集的存在。完整签名将记录于事务审计日志中。\n\n\n**示例:**\n\n\n```apache\nSecComponentSignature \"OWASP_CRS/3.3.2\"\n```",
        slug: "seccomponentsignature"
    },
    "SecCookieFormat": {
        en: "**Description:** Configure the cookie parsing format version.\n\n\n**Syntax:** `SecCookieFormat VERSION`\n\n\n**Default:** 0\n\n\n**Options:**\n\n\n- **0:** Use Netscape cookie format (version 0)\n- **1:** Use RFC 2109 cookie format (version 1)\n\n**Case Sensitive:** Yes\n\n\n**Implemented:** No\n\n\n**Example:**\n\n\n```apache\nSecCookieFormat 0\n```",
        zh: "**描述:** 配置 Cookie 解析格式版本。\n\n\n**语法:** `SecCookieFormat VERSION`\n\n\n**默认值:** 0\n\n\n**可选值:**\n\n\n- **0:** 使用 Netscape Cookie 格式 (版本 0)\n- **1:** 使用 RFC 2109 Cookie 格式 (版本 1)\n\n**区分大小写:** 是\n\n\n**是否实现:** 否\n\n\n**示例:**\n\n\n```apache\nSecCookieFormat 0\n```",
        slug: "seccookieformat"
    },
    "SecDataDir": {
        en: "**Description:** Configure the persistent data storage directory.\n\n\n**Syntax:** `SecDataDir PATH`\n\n\n**Case Sensitive:** Yes\n\n\n**Implemented:** No\n\n\nThis directory is used to store persistent data such as IP reputation records, session data, user tracking data, etc. The WAF uses this directory to save collection data that needs to persist across requests (initialized through the initcol action). The directory must have write permissions for the user running the WAF process.\n\n\n**Example:**\n\n\n```apache\nSecDataDir /var/lib/wge/\n```",
        zh: "**描述:** 配置持久化数据存储目录。\n\n\n**语法:** `SecDataDir PATH`\n\n\n**区分大小写:** 是\n\n\n**是否实现:** 否\n\n\n此目录用于存储持久化数据，如 IP 信誉记录、会话数据、用户跟踪数据等。WAF 使用该目录保存需要跨请求持久化的集合数据（通过 initcol 动作初始化）。该目录需对运行 WAF 进程的用户具有可写权限。\n\n\n**示例:**\n\n\n```apache\nSecDataDir /var/lib/wge/\n```",
        slug: "secdatadir"
    },
    "SecDebugLog": {
        en: "**Description:** Configure the debug log file path.\n\n\n**Syntax:** `SecDebugLog PATH`\n\n\n**Case Sensitive:** Yes\n\n\n**Implemented:** No\n\n\nThe debug log records detailed runtime information from the WAF rule engine and is very useful for rule debugging and troubleshooting. The verbosity level of the debug log is controlled by SecDebugLogLevel. It is recommended to enable debug logging in production environments only when troubleshooting issues.\n\n\n**Example:**\n\n\n```apache\nSecDebugLog /var/log/wge_debug.log\n```",
        zh: "**描述:** 配置调试日志文件路径。\n\n\n**语法:** `SecDebugLog PATH`\n\n\n**区分大小写:** 是\n\n\n**是否实现:** 否\n\n\n调试日志用于记录 WAF 规则引擎的详细运行信息，对于规则调试和问题排查非常有用。调试日志的详细程度由 SecDebugLogLevel 控制。建议在生产环境中仅在排查问题时启用调试日志。\n\n\n**示例:**\n\n\n```apache\nSecDebugLog /var/log/wge_debug.log\n```",
        slug: "secdebuglog"
    },
    "SecDebugLogLevel": {
        en: "**Description:** Configure the verbosity level of the debug log.\n\n\n**Syntax:** `SecDebugLogLevel LEVEL`\n\n\n**Default:** 0\n\n\n**Options:**\n\n\n- **0:** No logging\n- **1:** Errors only\n- **2:** Warnings\n- **3:** Notices\n- **4:** Detailed information\n- **5:** Debug information\n- **9:** Most verbose\n\n**Case Sensitive:** Yes\n\n\n**Implemented:** No\n\n\nKeeping debug logging always enabled in production environments is generally not recommended. Even when troubleshooting specific issues, be aware that using level 4 or higher will significantly impact performance.\nDebug log level value range:\n\n\n**Example:**\n\n\n```apache\nSecDebugLogLevel 3\n```",
        zh: "**描述:** 配置调试日志的详细级别。\n\n\n**语法:** `SecDebugLogLevel LEVEL`\n\n\n**默认值:** 0\n\n\n**可选值:**\n\n\n- **0:** 无日志\n- **1:** 仅错误\n- **2:** 警告\n- **3:** 通知\n- **4:** 详细信息\n- **5:** 调试信息\n- **9:** 最详细\n\n**区分大小写:** 是\n\n\n**是否实现:** 否\n\n\n在生产环境中始终启用调试日志通常不被建议。即使在排查特定问题时，也需注意使用 4 级或更高级别的日志会显著影响性能。\n调试日志级别的取值范围：\n\n\n**示例:**\n\n\n```apache\nSecDebugLogLevel 3\n```",
        slug: "secdebugloglevel"
    },
    "SecDefaultAction": {
        en: "**Description:** Define the default action list for a specific phase.\n\n\n**Syntax:** `SecDefaultAction \"ACTIONS\"`\n\n\n**Case Sensitive:** Yes\n\n\nSecDefaultAction sets a series of actions that will be inherited by all rules in the same phase. Therefore, SecDefaultAction must contain a phase. If there are multiple SecDefaultAction directives in the same phase, the later one will replace the earlier one. SecDefaultAction mainly affects three aspects:\n\n1. **Transformation functions**: Transformation functions in SecDefaultAction will be executed by all rules in the same phase, and executed before their own transformation functions, unless the rule has t:none;\n2. **Disruptive actions**: Rules using **block** will determine whether to block based on whether the DefaultAction in the same phase has disruptive actions (such as allow, deny);\n3. **Post-match actions**: Actions like setvar, ctl, etc. - when rules in the same phase match successfully, they will first execute DefaultAction and then execute their own actions.\n\n\n**Example:**\n\n\n```apache\nSecDefaultAction \"phase:1,log,auditlog,pass\"\nSecDefaultAction \"phase:2,log,auditlog,deny,status:403\"\n```",
        zh: "**描述:** 定义特定阶段的默认动作列表。\n\n\n**语法:** `SecDefaultAction \"ACTIONS\"`\n\n\n**区分大小写:** 是\n\n\nSecDefaultAction中设置了一系列动作，这个动作会被同阶段的所有规则继承，由此SecDefaultAction中必须包含phase，若同一阶段存在多个SecDefaultAction，那么后面的会取代前面的。SecDefaultAction主要影响三方面：\n\n1. **转化函数**：SecDefaultAction中的转换函数会被所有同阶段的所有规则执行，且在其自己的转换函数之前执行，除非其存在t:none；\n2. **阻断性动作**：使用**block**的规则会根据同阶段的DefaultAction是否存在阻断性动作（如allow、deny）来决定自己是否阻断；\n3. **匹配后动作**：如setvar、ctl等动作，所有同阶段的规则匹配成功会首先执行DefaultAction再执行自己的动作。\n\n\n**示例:**\n\n\n```apache\nSecDefaultAction \"phase:1,log,auditlog,pass\"\nSecDefaultAction \"phase:2,log,auditlog,deny,status:403\"\n```",
        slug: "secdefaultaction"
    },
    "SecGeoLookupDb": {
        en: "**Description:** Configure the geolocation database file path for the @geoLookup operator.\n\n**Syntax:** `SecGeoLookupDb PATH`\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\n**Example:**\n\n```apache\nSecGeoLookupDb /usr/share/GeoIP/GeoLite2-Country.mmdb\n```",
        zh: "**描述:** 配置地理位置数据库文件路径，用于 @geoLookup 操作符。\n\n**语法:** `SecGeoLookupDb PATH`\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n**示例:**\n\n```apache\nSecGeoLookupDb /usr/share/GeoIP/GeoLite2-Country.mmdb\n```",
        slug: "secgeolookupdb"
    },
    "SecHttpBlKey": {
        en: "**Description:** Configure the HTTP Blacklist (Project Honeypot) API key for @rbl usage.\n\n**Syntax:** `SecHttpBlKey API_KEY`\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\n**Example:**\n\n```apache\nSecHttpBlKey abcdefghijkl\n```",
        zh: "**描述:** 配置 HTTP 黑名单 (Project Honeypot) API 密钥以便于@rbl使用。\n\n**语法:** `SecHttpBlKey API_KEY`\n\n**是否实现:** 否\n\n**示例:**\n\n```apache\nSecHttpBlKey abcdefghijkl\n```",
        slug: "sechttpblkey"
    },
    "SecMarker": {
        en: "**Description:** Create a rule marker that can be used as a target for the `skipAfter` action.\n\n\n**Syntax:** `SecMarker LABEL`\n\n\n**Case Sensitive:** Yes\n\n\nSecMarker creates a fixed-position rule marker that serves as a target for the `skipAfter` action. When `skipAfter` is triggered, rule processing skips forward to the marker with the matching label. This enables conditional rule execution by allowing groups of rules to be skipped.\n\nThe marker itself does not perform any action; it simply serves as a jump target.\n\n\n**Example:**\n\n\n```apache\nSecRule REQUEST_URI \"^/admin\" \"id:100,phase:1,pass,skipAfter:END_ADMIN_CHECK\"\nSecRule REQUEST_HEADERS:Authorization \"^Basic\" \"id:101,phase:1,deny,status:401\"\nSecMarker END_ADMIN_CHECK\n```\n\nIn this example, if the URI does not start with `/admin`, rule 101 is executed; if it does, rule processing skips directly to `END_ADMIN_CHECK`, bypassing rule 101.",
        zh: "**描述:** 创建一个规则标记，用作 `skipAfter` 动作的跳转目标。\n\n\n**语法:** `SecMarker LABEL`\n\n\n**区分大小写:** 是\n\n\nSecMarker 创建一个固定位置的规则标记，作为 `skipAfter` 动作的跳转目标。当 `skipAfter` 被触发时，规则处理将跳转到具有匹配标签的标记处。这通过允许跳过规则组来实现条件性规则执行。\n\n标记本身不执行任何动作，它仅作为跳转目标。\n\n\n**示例:**\n\n\n```apache\nSecRule REQUEST_URI \"^/admin\" \"id:100,phase:1,pass,skipAfter:END_ADMIN_CHECK\"\nSecRule REQUEST_HEADERS:Authorization \"^Basic\" \"id:101,phase:1,deny,status:401\"\nSecMarker END_ADMIN_CHECK\n```\n\n在此示例中，如果 URI 不以 `/admin` 开头，则执行规则 101；如果是，则规则处理直接跳转到 `END_ADMIN_CHECK`，跳过规则 101。",
        slug: "secmarker"
    },
    "SecPcreMatchLimit": {
        en: "**Description:** Configure the maximum number of PCRE regular expression matches to prevent ReDoS attacks.\n\n\n**Syntax:** `SecPcreMatchLimit LIMIT`\n\n\n**Default:** 0\n\n\n**Case Sensitive:** Yes\n\n\nSince WGE currently uses re2 as the default regex matching library, PCRE is only used as a fallback when re2 fails to compile the regex, so this configuration has minimal impact.\n\n\n**Example:**\n\n\n```apache\nSecPcreMatchLimit 3000\n```",
        zh: "**描述:** 配置 PCRE 正则表达式匹配的最大次数,防止 ReDoS 攻击。\n\n\n**语法:** `SecPcreMatchLimit LIMIT`\n\n\n**默认值:** 0\n\n\n**区分大小写:** 是\n\n\n由于目前WGE默认使用的正则匹配库为re2，只有在re2编译正则失败的情况下才会退回使用pcre，所以此配置的影响不大。\n\n\n**示例:**\n\n\n```apache\nSecPcreMatchLimit 3000\n```",
        slug: "secpcrematchlimit"
    },
    "SecPcreMatchLimitRecursion": {
        en: "**Description:** Configure the PCRE regular expression recursion depth limit.\n\n**Syntax:** `SecPcreMatchLimitRecursion LIMIT`\n\n**Default:** 1000\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\n**Example:**\n\n```apache\nSecPcreMatchLimitRecursion 1000\n```",
        zh: "**描述:** 配置 PCRE 正则表达式递归深度限制。\n\n**语法:** `SecPcreMatchLimitRecursion LIMIT`\n\n**默认值:** 1000\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n此指令限制正则表达式匹配时的递归调用深度，用于防止复杂正则表达式导致的栈溢出。当正则表达式包含嵌套的分组或回溯时，递归深度可能快速增加。\n\n**示例:**\n\n```apache\nSecPcreMatchLimitRecursion 1000\n```",
        slug: "secpcrematchlimitrecursion"
    },
    "SecRemoteRules": {
        en: "**Description:** Load rule configuration from a remote HTTPS server.\n\n\n**Case Sensitive:** Yes\n\n\n**Implemented:** No\n\n\nThis directive allows dynamically loading rules from a remote server, facilitating centralized management and updates of security policies. The KEY parameter is used for authentication, allowing the target server to provide differentiated rule sets for different clients.\n\n\n**Example:**\n\n\n```apache\nSecRemoteRules some-key https://example.com/rules.conf\n```",
        zh: "**描述:** 从远程 HTTPS 服务器加载规则配置。\n\n\n**区分大小写:** 是\n\n\n**是否实现:** 否\n\n\n此指令允许从远程服务器动态加载规则，便于集中管理和更新安全策略。KEY 参数用于身份验证，目标服务器可据此为不同客户端提供差异化规则集。\n\n\n**示例:**\n\n\n```apache\nSecRemoteRules some-key https://example.com/rules.conf\n```",
        slug: "secremoterules"
    },
    "SecRemoteRulesFailAction": {
        en: "**Description:** Configure how to handle remote rule loading failures.\n\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\n\n**Example:**\n\n\n```apache\nSecRemoteRulesFailAction Warn\n```",
        zh: "**描述:** 配置远程规则加载失败时的处理方式。\n\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n\n**示例:**\n\n\n```apache\nSecRemoteRulesFailAction Warn\n```",
        slug: "secremoterulesfailaction"
    },
    "SecRequestBodyAccess": {
        en: "**Description:** Configure whether the WAF is allowed to access request body content.\n\n\n**Syntax:** `SecRequestBodyAccess On|Off`\n\n\n**Default:** Off\n\n\n**Case Sensitive:** Yes\n\n\nThis directive must be enabled to inspect data transmitted in the request body (such as POST parameters). Request buffering is also essential for reliable blocking. Options:\n- **On:** Buffer and inspect the request body\n- **Off:** Do not buffer the request body\n\nThis directive does not actually affect whether WGE buffers the request body, because WGE cannot control the buffering action itself - it can only passively receive the request body from the server. For this directive to take effect, related logic needs to be added in the server.\n\n\n**Example:**\n\n\n```apache\nSecRequestBodyAccess On\n```",
        zh: "**描述:** 配置是否允许 WAF 访问请求体内容。\n\n\n**语法:** `SecRequestBodyAccess On|Off`\n\n\n**默认值:** Off\n\n\n**区分大小写:** 是\n\n\n\n若需检查请求主体传输的数据（如 POST 参数），则必须使用此指令。为实现可靠阻塞，请求缓冲亦不可或缺。可选值：\n- **On:** 缓冲并检查请求体\n- **Off:** 不缓冲请求体\n\n这个命令实际上并不影响WGE是否缓冲请求体，因为缓冲这个动作WGE并不能控制，其只能被动接收来自服务器的请求体，如果需要此命令生效，需要在服务器中增加相关逻辑。\n\n**示例:**\n\n\n```apache\nSecRequestBodyAccess On\n```",
        slug: "secrequestbodyaccess"
    },
    "SecRequestBodyInMemoryLimit": {
        en: "**Description:** Configure the maximum size of request body buffered in memory; content exceeding this limit will be written to a temporary file.\n\n\n**Syntax:** `SecRequestBodyInMemoryLimit LIMIT`\n\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\n\nThis directive controls how much request body data the WAF keeps in memory. When the request body size exceeds this limit, the excess portion will be written to the temporary directory specified by SecTmpDir. Setting this value appropriately balances memory usage and I/O performance.\n\nThis directive is not implemented in WGE and cannot be used.\n\n\n**Example:**\n\n\n```apache\nSecRequestBodyInMemoryLimit 131072\n```",
        zh: "**描述:** 配置请求体在内存中缓冲的最大大小，超过此限制将写入临时文件。\n\n\n**语法:** `SecRequestBodyInMemoryLimit LIMIT`\n\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n\n此指令控制 WAF 将多少请求体数据保留在内存中。当请求体大小超过此限制时，超出部分将写入 SecTmpDir 指定的临时目录。适当设置此值可在内存使用和 I/O 性能之间取得平衡。\n\n此指令并未在WGE中实现，无法使用。\n\n**示例:**\n\n\n```apache\nSecRequestBodyInMemoryLimit 131072\n```",
        slug: "secrequestbodyinmemorylimit"
    },
    "SecRequestBodyJsonDepthLimit": {
        en: "**Description:** Configure the maximum parsing depth for JSON objects.\n\n**Syntax:** `SecRequestBodyJsonDepthLimit DEPTH`\n\n**Default:** 0 (unlimited)\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\nWhen parsing JSON objects, if the nesting level exceeds the configured depth limit, parsing will terminate and set a REQBODY_ERROR error.\n\n**Example:**\n\n```apache\nSecRequestBodyJsonDepthLimit 512\n```",
        zh: "**描述:** 配置 JSON 对象的最大解析深度。\n\n**语法:** `SecRequestBodyJsonDepthLimit DEPTH`\n\n**默认值:** 0（unlimited）\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n解析 JSON 对象时，若嵌套层级超过配置深度限制，解析将终止并设置 REQBODY_ERROR 错误。\n\n**示例:**\n\n```apache\nSecRequestBodyJsonDepthLimit 512\n```",
        slug: "secrequestbodyjsondepthlimit"
    },
    "SecRequestBodyLimit": {
        en: "**Description:** Configure the maximum acceptable request body size in bytes.\n\n**Syntax:** `SecRequestBodyLimit LIMIT`\n\n**Default:** 134217728 (128MB)\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\nRequests exceeding this limit will be rejected with a 413 (Request Entity Too Large) status code. The hard upper limit is 1 GB.\n\n**Example:**\n\n```apache\nSecRequestBodyLimit 134217728\n```",
        zh: "**描述:** 配置可接受的最大请求体大小 (字节)。\n\n**语法:** `SecRequestBodyLimit LIMIT`\n\n**默认值:** 134217728 (128MB)\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n超过限制的请求将返回状态码 413（请求实体过大）被拒绝。硬性上限为 1 GB。\n\n**示例:**\n\n```apache\nSecRequestBodyLimit 134217728\n```",
        slug: "secrequestbodylimit"
    },
    "SecRequestBodyLimitAction": {
        en: "**Description:** Configure how to handle requests when the body exceeds the SecRequestBodyLimit.\n\n**Syntax:** `SecRequestBodyLimitAction Reject|ProcessPartial`\n\n**Default:** ProcessPartial\n\n**Options:**\n\n- **Reject:** Reject requests that exceed the limit\n- **ProcessPartial:** Only inspect the portion of the request body that fits within the limit, pass through the rest\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\nThis means that even if the request body size exceeds the SecRequestBodyLimit setting, it will not affect rule execution or WGE's internal state.\n\n**Example:**\n\n```apache\nSecRequestBodyLimitAction Reject\n```",
        zh: "**描述:** 配置当请求体超过 SecRequestBodyLimit 限制时的处理方式。\n\n**语法:** `SecRequestBodyLimitAction Reject|ProcessPartial`\n\n**默认值:** ProcessPartial\n\n**可选值:**\n\n- **Reject:** 拒绝超限请求\n- **ProcessPartial:** 仅检查符合限制的部分请求体，放行其余内容\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n也即是说即使请求体的大小超过SecRequestBodyLimit的设置大小也不会对规则执行和WGE内部状态有任何影响。\n\n**示例:**\n\n```apache\nSecRequestBodyLimitAction Reject\n```",
        slug: "secrequestbodylimitaction"
    },
    "SecRequestBodyNoFilesLimit": {
        en: "**Description:** Configure the maximum request body size in bytes for requests without file uploads.\n\n**Syntax:** `SecRequestBodyNoFilesLimit LIMIT`\n\n**Default:** 1048576 (1MB)\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\n**Example:**\n\n```apache\nSecRequestBodyNoFilesLimit 131072\n```",
        zh: "**描述:** 配置不包含文件上传的请求体最大大小 (字节)。\n\n**语法:** `SecRequestBodyNoFilesLimit LIMIT`\n\n**默认值:** 1048576 (1MB)\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n**示例:**\n\n```apache\nSecRequestBodyNoFilesLimit 131072\n```",
        slug: "secrequestbodynofileslimit"
    },
    "SecResponseBodyAccess": {
        en: "**Description:** Configure whether the WAF is allowed to access response body content.\n\n**Syntax:** `SecResponseBodyAccess On|Off`\n\n**Default:** Off\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\n**Example:**\n\n```apache\nSecResponseBodyAccess On\n```",
        zh: "**描述:** 配置是否允许 WAF 访问响应体内容。\n\n**语法:** `SecResponseBodyAccess On|Off`\n\n**默认值:** Off\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n**示例:**\n\n```apache\nSecResponseBodyAccess On\n```",
        slug: "secresponsebodyaccess"
    },
    "SecResponseBodyLimit": {
        en: "**Description:** Configure the maximum response body buffer size in bytes.\n\n**Syntax:** `SecResponseBodyLimit LIMIT`\n\n**Default:** 524288 (512KB)\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\n**Example:**\n\n```apache\nSecResponseBodyLimit 524288\n```",
        zh: "**描述:** 配置响应体缓冲区的最大大小 (字节)。\n\n**语法:** `SecResponseBodyLimit LIMIT`\n\n**默认值:** 524288 (512KB)\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n**示例:**\n\n```apache\nSecResponseBodyLimit 524288\n```",
        slug: "secresponsebodylimit"
    },
    "SecResponseBodyLimitAction": {
        en: "**Description:** Configure how to handle responses when the body exceeds the SecResponseBodyLimit.\n\n**Syntax:** `SecResponseBodyLimitAction Reject|ProcessPartial`\n\n**Default:** ProcessPartial\n\n**Options:**\n\n- **Reject:** Reject responses that exceed the limit\n- **ProcessPartial:** Only inspect the portion of the response body that fits within the limit, pass through the rest\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\n**Example:**\n\n```apache\nSecResponseBodyLimitAction ProcessPartial\n```",
        zh: "**描述:** 配置当响应体超过 SecResponseBodyLimit 限制时的处理方式。\n\n**语法:** `SecResponseBodyLimitAction Reject|ProcessPartial`\n\n**默认值:** ProcessPartial\n\n**可选值:**\n\n- **Reject:** 拒绝超限响应\n- **ProcessPartial:** 仅检查符合限制的部分响应体，放行其余内容\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n**示例:**\n\n```apache\nSecResponseBodyLimitAction ProcessPartial\n```",
        slug: "secresponsebodylimitaction"
    },
    "SecResponseBodyMimeType": {
        en: "**Description:** Configure which response body MIME types should be inspected.\n\n**Syntax:** `SecResponseBodyMimeType MIME_TYPE1 MIME_TYPE2 ...`\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\nIf you need this functionality, you can use content-type and skip/skipafter to control whether rules are executed for specific MIME types.\n\nAlternatively, you can read the configuration parsed by WGE in the server and use it to determine whether to pass the body.\n\nWhen this directive appears multiple times, the final parsed result is a merge of all directives.\n\n**Example:**\n\n```apache\nSecResponseBodyMimeType text/plain text/html text/xml\n```",
        zh: "**描述:** 配置需要检查的响应体 MIME 类型。\n\n**语法:** `SecResponseBodyMimeType MIME_TYPE1 MIME_TYPE2 ...`\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n如果需要此功能，可以通过content-type和skip/skipafter控制对于特定MIME是否执行规则。\n\n或者在服务器中读取WGE中解析的配置，通过此判断是否传入Body。\n\n当此指令多次出现时，最后解析的结果是所有指令的合并。\n\n**示例:**\n\n```apache\nSecResponseBodyMimeType text/plain text/html text/xml\n```",
        slug: "secresponsebodymimetype"
    },
    "SecResponseBodyMimeTypesClear": {
        en: "**Description:** Clear all response body MIME type configurations.\n\n\n**Syntax:** `SecResponseBodyMimeTypesClear`\n\n\n**Case Sensitive:** Yes\n\n\n\nThis directive clears all MIME types previously configured through SecResponseBodyMimeType, allowing you to redefine which response types need to be buffered from scratch. Typically used to override inherited configurations.\n\n\n**Example:**\n\n\n```apache\nSecResponseBodyMimeTypesClear\nSecResponseBodyMimeType text/html text/plain\n```",
        zh: "**描述:** 清除所有响应体 MIME 类型配置。\n\n\n**语法:** `SecResponseBodyMimeTypesClear`\n\n\n**区分大小写:** 是\n\n\n\n此指令清除先前通过 SecResponseBodyMimeType 配置的所有 MIME 类型，允许从零开始重新定义需要缓冲的响应类型。通常用于覆盖继承的配置。\n\n\n**示例:**\n\n\n```apache\nSecResponseBodyMimeTypesClear\nSecResponseBodyMimeType text/html text/plain\n```",
        slug: "secresponsebodymimetypesclear"
    },
    "SecRule": {
        en: "**Description:** Define a security rule.\n\n\n**Syntax:** `SecRule VARIABLES \"OPERATOR\" \"ACTIONS\"`\n\n**Case Sensitive:** Yes\n\nSecRule is the most important directive in SecLang, used to define rules for detecting and responding to security threats. A rule consists of three parts:\n\n\n- **Variables (VARIABLES):** Specify the data sources to inspect, such as ARGS for query parameters\n- **Operator (OPERATOR):** Define the matching conditions, including regex matching, comparison, etc.\n- **Actions (ACTIONS):** Contains configuration actions like phase and id, transformation functions, and post-match actions like setvar\n\nThe execution logic of a SecRule: obtain the data to be matched from the variables (VARIABLES), process the data through transformation functions for encoding/decoding operations (such as t:urlDecode for URL decoding), perform the specified matching operation on the decoded data, execute post-match actions (such as setvar) after a successful match, and if there are chained rules, continue executing them.\n\n\n**Basic Example:**\n\n\n```apache\nSecRule ARGS \"@contains \" \\\n    \"id:1001,phase:2,deny,status:403,msg:'XSS Attack Detected'\"\n```\n\n\n\n**Multiple Variables Example:**\n\n\n```apache\nSecRule ARGS|REQUEST_HEADERS \"@rx (?i:eval\\s*\\()\" \\\n    \"id:1002,phase:2,deny,status:403,msg:'Code Injection Detected'\"\n```\n\n\n\n**Using Transformations Example:**\n\n\n```apache\nSecRule ARGS \"@rx select.*from\" \\\n    \"id:1003,phase:2,t:lowercase,t:removeWhitespace,deny,msg:'SQL Injection'\"\n```",
        zh: "**描述:** 定义一个安全规则。\n\n\n**语法:** `SecRule VARIABLES \"OPERATOR\" \"ACTIONS\"`\n\n**区分大小写:** 是\n\nSecRule 是 SecLang 中最重要的指令,用于定义检测和响应安全威胁的规则。一个规则由三部分组成:\n\n\n- **变量 (VARIABLES):** 指定要检查的数据源，如ARGS代表查询参数\n- **操作符 (OPERATOR):** 定义匹配条件，包括正则匹配、大小写比较等\n- **动作 (ACTIONS):** 包含phase、id等配置动作、转换函数和setvar等匹配后动作\n\n一条SecRule的执行逻辑为：从变量 (VARIABLES)获取到被匹配的数据，将数据经过转换函数进行编解码操作（如 t:urlDecode 进行url解码），将解码后的数据进行指定匹配操作，匹配成功后再执行匹配后动作（如 setvar 等），若存在子规则，会继续执行子规则。\n\n\n**基本示例:**\n\n\n```apache\nSecRule ARGS \"@contains \" \\\n    \"id:1001,phase:2,deny,status:403,msg:'XSS Attack Detected'\"\n```\n\n\n\n**多个变量示例:**\n\n\n```apache\nSecRule ARGS|REQUEST_HEADERS \"@rx (?i:eval\\s*\\()\" \\\n    \"id:1002,phase:2,deny,status:403,msg:'Code Injection Detected'\"\n```\n\n\n\n**使用转换示例:**\n\n\n```apache\nSecRule ARGS \"@rx select.*from\" \\\n    \"id:1003,phase:2,t:lowercase,t:removeWhitespace,deny,msg:'SQL Injection'\"\n```",
        slug: "secrule"
    },
    "SecRuleEngine": {
        en: "**Description:** Configure the operating mode of the rule engine.\n\n\n**Syntax:** `SecRuleEngine On|Off|DetectionOnly`\n\n\n**Default:** Off\n\n**Options:**\n\n\n- **On:** Enable the rule engine, execute all rules and apply disruptive actions\n- **Off:** Disable the rule engine, no rules are executed\n- **DetectionOnly:** Detection-only mode, execute rules but do not apply disruptive actions\n\n**Case Sensitive:** Yes\n\n\n\n**Example:**\n\n\n```apache\nSecRuleEngine On\n```",
        zh: "**描述:** 配置规则引擎的运行模式。\n\n\n**语法:** `SecRuleEngine On|Off|DetectionOnly`\n\n\n**默认值:** Off\n\n**可选值:**\n\n\n- **On:** 启用规则引擎,执行所有规则并应用破坏性动作\n- **Off:** 禁用规则引擎,不执行任何规则\n- **DetectionOnly:** 仅检测模式,执行规则但不应用破坏性动作\n\n**区分大小写:** 是\n\n\n\n**示例:**\n\n\n```apache\nSecRuleEngine On\n```",
        slug: "secruleengine"
    },
    "SecRuleRemoveById": {
        en: "**Description:** Remove rules by ID.\n\n\n**Syntax:** `SecRuleRemoveById [ID|ID_RANGE] ...`\n\n\n**Case Sensitive:** Yes\n\n\n\nThis directive supports multiple parameters, each of which can be a rule ID or range.\n\n**Note:** SecRuleRemoveById should be loaded last; it will not take effect if it appears before the rules it intends to disable.\n\n**Example:**\n\n\n```apache\n# Remove a single rule\nSecRuleRemoveById 1001\n\n# Remove multiple rules\nSecRuleRemoveById 1001 1002 1003\n\n# Remove a range of rules\nSecRuleRemoveById 1001-1100\n```",
        zh: "**描述:** 根据 ID 移除规则。\n\n\n**语法:** `SecRuleRemoveById [ID|ID_RANGE] ...`\n\n\n**区分大小写:** 是\n\n\n\n该指令支持多个参数，每个参数可为规则 ID 或范围。\n\n**注意**：SecRuleRemoveById应该在最后加载，当SecRuleRemoveById出现在其想要禁用的规则之前时禁用不会生效。\n\n**示例:**\n\n\n```apache\n# 移除单个规则\nSecRuleRemoveById 1001\n\n# 移除多个规则\nSecRuleRemoveById 1001 1002 1003\n\n# 移除范围内的规则\nSecRuleRemoveById 1001-1100\n```",
        slug: "secruleremovebyid"
    },
    "SecRuleRemoveByMsg": {
        en: "**Description:** Remove rules by msg content.\n\n\n**Syntax:** `SecRuleRemoveByMsg \"STRING\"`\n\n\n**Case Sensitive:** Yes\n\n\n\nTypically SecRuleRemoveById is used to remove rules, but this directive supports removing rules by matching the rule's msg action. Matching uses case-sensitive exact string matching.\n\nLike SecRuleRemoveById, it can only disable rules that appear before it.\n\n**Example:**\n\n\n```apache\nSecRuleRemoveByMsg \"SQL Injection Attack\"\n```",
        zh: "**描述:** 根据msg内容移除规则。\n\n\n**语法:** `SecRuleRemoveByMsg \"STRING\"`\n\n\n**区分大小写:** 是\n\n\n\n通常使用 SecRuleRemoveById 删除规则，但本指令支持通过匹配规则的 msg 操作进行删除。匹配采用区分大小写的字符串精确匹配。\n\n与 SecRuleRemoveById 一致，其只能禁用在其之前的规则。\n\n**示例:**\n\n\n```apache\nSecRuleRemoveByMsg \"SQL Injection Attack\"\n```",
        slug: "secruleremovebymsg"
    },
    "SecRuleRemoveByTag": {
        en: "**Description:** Remove rules by tag.\n\n\n**Syntax:** `SecRuleRemoveByTag \"STRING\"`\n\n\n**Case Sensitive:** Yes\n\n\n\nTypically SecRuleRemoveById is used to remove rules, but sometimes it is more convenient to disable a group of rules using SecRuleRemoveByTag. Matching is case-sensitive.\n\nLike SecRuleRemoveById, it can only disable rules that appear before it.\n\n**Example:**\n\n\n```apache\nSecRuleRemoveByTag \"attack-sqli\"\n```",
        zh: "**描述:** 根据tag移除规则。\n\n\n**语法:** `SecRuleRemoveByTag \"STRING\"`\n\n\n**区分大小写:** 是\n\n\n\n通常使用 SecRuleRemoveById 删除规则，但有时通过 SecRuleRemoveByTag 禁用整组规则更为便捷，其中匹配是大小写区分的。\n\n与 SecRuleRemoveById 一致，其只能禁用在其之前的规则。\n\n**示例:**\n\n\n```apache\nSecRuleRemoveByTag \"attack-sqli\"\n```",
        slug: "secruleremovebytag"
    },
    "SecRuleScript": {
        en: "**Description:** Define rule logic using Lua scripts.\n\n\n**Syntax:** `SecRuleScript LUA_PATH \"ACTIONS\"`\n\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\nThis directive creates a special rule that decides whether to match by executing a Lua script. The main difference from SecRule is that there are no target and operator parameters. The script can access any variables from the WAF context and use Lua operators for testing. All Lua scripts are compiled and cached in memory at configuration load time; if you need to reload scripts, you must reload the entire configuration.\n\n\n**Example:**\n\n\n```apache\nSecRuleScript /etc/wge/scripts/custom_check.lua \"id:5001,phase:2,deny,msg:'Script check failed'\"\n```",
        zh: "**描述:** 使用 Lua 脚本定义规则逻辑。\n\n\n**语法:** `SecRuleScript LUA_PATH \"ACTIONS\"`\n\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n此指令创建特殊规则，通过执行 Lua 脚本决定是否匹配。与 SecRule 的主要区别在于不存在目标和运算符。脚本可获取 WAF 上下文中的任意变量，并使用 Lua 运算符进行测试。所有 Lua 脚本在配置加载时编译并缓存至内存，若需重新加载脚本，必须重新加载整个配置。\n\n\n**示例:**\n\n\n```apache\nSecRuleScript /etc/wge/scripts/custom_check.lua \"id:5001,phase:2,deny,msg:'Script check failed'\"\n```",
        slug: "secrulescript"
    },
    "SecRuleUpdateActionById": {
        en: "**Description:** Update a rule's actions by ID.\n\n\n**Syntax:** `SecRuleUpdateActionById INT|(INT ':' '-'? INT) \"ACTIONS\"`\n\n\n**Case Sensitive:** Yes\n\n\n\nThis directive will override the specified rule's action list with the actions provided in the second parameter. There are two limitations: it cannot be used to modify the rule ID or phase; it only overrides actions that can only appear once. Actions that are allowed to appear multiple times in the list will be appended to the end.\n\nAdding t:none will override any previously specified transformation functions (such as t:lowercase in the example).\n\nFor rules with chained rules, you can use SecRuleUpdateActionById id:0 to update the action of chained rules. The second INT value of -1 represents the top-level parent rule, 0 represents the child rule at depth 1, and so on.\n\n**Example:**\n\n\n```apache\nSecRuleUpdateActionById 1001 \"pass,log\"\n```",
        zh: "**描述:** 根据 ID 更新规则的动作。\n\n\n**语法:** `SecRuleUpdateActionById INT| (INT ':' '-'? INT) \"ACTIONS\"`\n\n\n**区分大小写:** 是\n\n\n\n该指令将用第二个参数提供的动作覆盖指定规则的动作列表。存在两项限制：无法用于修改规则 ID 或阶段；仅覆盖只能出现一次的动作。允许在列表中多次出现的动作将追加至列表末尾。\n前例中最终生效的规则如下：\n添加 t:none 将覆盖先前指定的任何转换函数（如示例中的 t:lowercase）。\n\n对于存在子规则的，可以使用SecRuleUpdateActionById id:0来更新子规则的action，其中第二个INT的值为-1代表最上层父规则，0为深度为1的子规则……\n\n**示例:**\n\n\n```apache\nSecRuleUpdateActionById 1001 \"pass,log\"\n```",
        slug: "secruleupdateactionbyid"
    },
    "SecRuleUpdateOperatorById": {
        en: "**Description:** Update the operator of an existing rule by its ID.\n\n\n**Syntax:** `SecRuleUpdateOperatorById ID [ID...] \"OPERATOR\"`\n\n\n**Case Sensitive:** Yes\n\n**WGE Extension:** This is a WGE-specific extension, not available in standard ModSecurity.\n\n\nThis directive allows you to modify the operator of one or more existing rules by their ID. This is useful for customizing third-party rule sets (like OWASP CRS) without modifying the original rule files.\n\nThe ID can be a single rule ID, a range (e.g., `100-200`), or an ID with chain index (e.g., `100:1` for the first chained rule).\n\n\n**Example:**\n\n\n```apache\n# Change rule 942100 to use case-insensitive matching\nSecRuleUpdateOperatorById 942100 \"@rx (?i)select.*from\"\n\n# Update multiple rules at once\nSecRuleUpdateOperatorById 942100 942110 942120 \"@pm select insert update delete\"\n\n# Update a rule range\nSecRuleUpdateOperatorById 942100-942199 \"@rx new_pattern\"\n```",
        zh: "**描述:** 通过规则 ID 更新现有规则的操作符。\n\n\n**语法:** `SecRuleUpdateOperatorById ID [ID...] \"OPERATOR\"`\n\n\n**区分大小写:** 是\n\n**WGE 扩展:** 这是 WGE 特有的扩展，在标准 ModSecurity 中不可用。\n\n\n此指令允许您通过 ID 修改一个或多个现有规则的操作符。这对于自定义第三方规则集（如 OWASP CRS）非常有用，无需修改原始规则文件。\n\nID 可以是单个规则 ID、范围（如 `100-200`）或带链索引的 ID（如 `100:1` 表示第一个链式规则）。\n\n\n**示例:**\n\n\n```apache\n# 将规则 942100 更改为使用不区分大小写的匹配\nSecRuleUpdateOperatorById 942100 \"@rx (?i)select.*from\"\n\n# 同时更新多个规则\nSecRuleUpdateOperatorById 942100 942110 942120 \"@pm select insert update delete\"\n\n# 更新规则范围\nSecRuleUpdateOperatorById 942100-942199 \"@rx new_pattern\"\n```",
        slug: "secruleupdateoperatorbyid"
    },
    "SecRuleUpdateOperatorByTag": {
        en: "**Description:** Update the operator of existing rules by their tag.\n\n\n**Syntax:** `SecRuleUpdateOperatorByTag \"TAG\" \"OPERATOR\"`\n\n\n**Case Sensitive:** Yes\n\n**WGE Extension:** This is a WGE-specific extension, not available in standard ModSecurity.\n\n\nThis directive allows you to modify the operator of all rules that have a matching tag. This is useful for applying a consistent operator change across multiple related rules in a rule set.\n\n\n**Example:**\n\n\n```apache\n# Update all SQL injection rules to use a new pattern\nSecRuleUpdateOperatorByTag \"attack-sqli\" \"@rx (?i)(union|select|insert|update|delete)\"\n\n# Update all XSS detection rules\nSecRuleUpdateOperatorByTag \"attack-xss\" \"@rx <script[^>]*>\"\n```",
        zh: "**描述:** 通过标签更新现有规则的操作符。\n\n\n**语法:** `SecRuleUpdateOperatorByTag \"TAG\" \"OPERATOR\"`\n\n\n**区分大小写:** 是\n\n**WGE 扩展:** 这是 WGE 特有的扩展，在标准 ModSecurity 中不可用。\n\n\n此指令允许您修改所有具有匹配标签的规则的操作符。这对于在规则集中跨多个相关规则应用一致的操作符更改非常有用。\n\n\n**示例:**\n\n\n```apache\n# 更新所有 SQL 注入规则以使用新模式\nSecRuleUpdateOperatorByTag \"attack-sqli\" \"@rx (?i)(union|select|insert|update|delete)\"\n\n# 更新所有 XSS 检测规则\nSecRuleUpdateOperatorByTag \"attack-xss\" \"@rx <script[^>]*>\"\n```",
        slug: "secruleupdateoperatorbytag"
    },
    "SecRuleUpdateTargetById": {
        en: "**Description:** Update a rule's variable list by ID.\n\n\n**Syntax:** `SecRuleUpdateTargetById ID VARIABLES`\n\n\n**Case Sensitive:** Yes\n\nUpdates the variables (VARIABLES) of the rule with the specified ID, allowing operations such as adding or removing variables.\n\n**Note:** This directive is a configuration directive, not runtime - meaning skipAfter and similar directives do not affect it. It must be loaded after the rule it updates.\n\n**Example:**\n\nIf the rule with ID 1001 is:\n\n```apache\nSecRule ARGS|REQUEST_HEADERS \"@rx admin\" \"id:1001,phase:1,deny,tag:'template_rule',t:none\"\n```\n\n**Add variable:**\n\nThe following example will add REQUEST_LINE detection to rule 1001:\n```apache\nSecRuleUpdateTargetById 1001 REQUEST_LINE\n```\n\n**Remove variable:**\n\nThe following example will remove ARGS detection from rule 1001:\n```apache\nSecRuleUpdateTargetById 1001 !ARGS\n```\n\n**Remove specific sub-variable:**\n\nThe following example will make rule 1001 not inspect the parameter named username:\n```apache\nSecRuleUpdateTargetById 1001 !ARGS:username\n```\n\n**Using regex:**\n\nThe following example will make rule 1001 not inspect parameters matching the specified regex:\n```apache\nSecRuleUpdateTargetById 1001 !ARGS:/[a-zA-Z]{100,}/\n```",
        zh: "**描述:** 根据 ID 更新规则的参数列表。\n\n\n**语法:** `SecRuleUpdateTargetById ID VARIABLES`\n\n\n**区分大小写:** 是\n\n更新指定ID规则的变量（VARIABLES），可以尝试增加、删除变量等操作;\n\n**注意:** 此规则是作为配置的指令，其并不是运行时的，也就是说skipafter等对这并不有效；且其必须在其更新的规则之后加载。\n\n**示例:**\n\n若ID为1001的规则为：\n\n```apache\nSecRule ARGS|REQUEST_HEADERS \"@rx admin\" \"id:1001,phase:1,deny,tag:'template_rule',t:none\"\n```\n\n**增加变量:**\n\n下面的示例会让1001规则增加对于REQUEST_LINE的检测：\n```apache\nSecRuleUpdateTargetById 1001 REQUEST_LINE\n```\n\n**删除变量:**\n\n下面的示例会删除指定1001规则对ARGS的检测：\n```apache\nSecRuleUpdateTargetById 1001 !ARGS\n```\n\n**删除特定子变量:**\n\n下面的示例会让1001规则不检测参数名为username的参数：\n```apache\nSecRuleUpdateTargetById 1001 !ARGS:username\n```\n\n**使用正则:**\n\n下面的示例会让1001规则不检测参数名符合指定正则的参数：\n```apache\nSecRuleUpdateTargetById 1001 !ARGS:/[a-zA-Z]{100,}/\n```",
        slug: "secruleupdatetargetbyid"
    },
    "SecRuleUpdateTargetByMsg": {
        en: "**Description:** Update a rule's variable list by message content.\n\n\n**Syntax:** `SecRuleUpdateTargetByMsg \"MESSAGE\" VARIABLES`\n\n\n**Case Sensitive:** Yes\n\nSimilar to SecRuleUpdateTargetById, SecRuleUpdateTargetByMsg modifies the variables of specified rules by matching the msg. For more details, see SecRuleUpdateTargetById.\n\n**Example:**\n\n\n```apache\nSecRuleUpdateTargetByMsg \"SQL Injection\" !ARGS:id\n```",
        zh: "**描述:** 根据消息内容更新规则的参数列表。\n\n\n**语法:** `SecRuleUpdateTargetByMsg \"MESSAGE\" VARIABLES`\n\n\n**区分大小写:** 是\n\n与 SecRuleUpdateTargetById 类似，SecRuleUpdateTargetByMsg 是通过msg修改指定规则的变量，更多注意事项可见 SecRuleUpdateTargetById。\n\n**示例:**\n\n\n```apache\nSecRuleUpdateTargetByMsg \"SQL Injection\" !ARGS:id\n```",
        slug: "secruleupdatetargetbymsg"
    },
    "SecRuleUpdateTargetByTag": {
        en: "**Description:** Update a rule's variable list by tag.\n\n\n**Syntax:** `SecRuleUpdateTargetByTag \"TAG\" VARIABLES`\n\n\n**Case Sensitive:** Yes\n\nSimilar to SecRuleUpdateTargetById, SecRuleUpdateTargetByTag modifies the variables of specified rules by matching the tag. For more details, see SecRuleUpdateTargetById.\n\n\n**Example:**\n\n\n```apache\nSecRuleUpdateTargetByTag \"attack-sqli\" !ARGS:search\n```",
        zh: "**描述:** 根据标签更新规则的参数列表。\n\n\n**语法:** `SecRuleUpdateTargetByTag \"TAG\" VARIABLES`\n\n\n**区分大小写:** 是\n\n与 SecRuleUpdateTargetById SecRuleUpdateTargetByTag 是通过tag修改指定规则的变量，更多注意事项可见 SecRuleUpdateTargetById。\n\n\n**示例:**\n\n\n```apache\nSecRuleUpdateTargetByTag \"attack-sqli\" !ARGS:search\n```",
        slug: "secruleupdatetargetbytag"
    },
    "SecStatusEngine": {
        en: "**Description:** Configure the status engine for collecting and reporting runtime statistics.\n\n**Syntax:** `SecStatusEngine On|Off`\n\n**Default:** Off\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\nWhen enabled, the status engine collects WAF runtime statistics including the number of requests processed, rule matches, blocks, and more. This information helps monitor WAF performance and security posture.\n\n**Example:**\n\n```apache\nSecStatusEngine On\n```",
        zh: "**描述:** 配置状态引擎，用于收集和报告运行时统计信息。\n\n**语法:** `SecStatusEngine On|Off`\n\n**默认值:** Off\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n启用后，状态引擎会收集 WAF 运行时的统计数据，包括处理的请求数、规则匹配次数、阻断次数等。这些信息有助于监控 WAF 性能和安全态势。\n\n**示例:**\n\n```apache\nSecStatusEngine On\n```",
        slug: "secstatusengine"
    },
    "SecTmpDir": {
        en: "**Description:** Configure the temporary file storage directory.\n\n**Syntax:** `SecTmpDir PATH`\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\nThis directory is used to store temporary files during request body processing, especially when the request body size exceeds the SecRequestBodyInMemoryLimit setting. The WAF will write the excess portion to this directory. The directory must have write permissions for the user running the WAF process.\n\n**Example:**\n\n```apache\nSecTmpDir /tmp/\n```",
        zh: "**描述:** 配置临时文件存储目录。\n\n**语法:** `SecTmpDir PATH`\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n此目录用于存储请求体处理过程中的临时文件，特别是当请求体大小超过 SecRequestBodyInMemoryLimit 设置时，WAF 将把超出部分写入此目录。该目录需对运行 WAF 进程的用户具有可写权限。\n\n**示例:**\n\n```apache\nSecTmpDir /tmp/\n```",
        slug: "sectmpdir"
    },
    "SecTmpSaveUploadedFiles": {
        en: "**Description:** Configure whether to save uploaded files to the temporary directory.\n\n**Syntax:** `SecTmpSaveUploadedFiles On|Off`\n\n**Default:** Off\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\nWhen enabled, files uploaded via multipart/form-data will be saved to the temporary directory specified by SecTmpDir. This allows rules to use the @inspectFile operator for deep inspection of uploaded files (such as virus scanning).\n\n**Example:**\n\n```apache\nSecTmpSaveUploadedFiles On\n```",
        zh: "**描述:** 配置是否保存上传的文件到临时目录。\n\n**语法:** `SecTmpSaveUploadedFiles On|Off`\n\n**默认值:** Off\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n启用后，通过 multipart/form-data 上传的文件将保存到 SecTmpDir 指定的临时目录。这允许规则使用 @inspectFile 操作符对上传文件进行深度检查（如病毒扫描）。\n\n**示例:**\n\n```\nSecTmpSaveUploadedFiles On\n```",
        slug: "sectmpsaveuploadedfiles"
    },
    "SecUnicodeMapFile": {
        en: "**Description:** Configure the Unicode mapping file path and code page.\n\n**Syntax:** `SecUnicodeMapFile PATH CODEPAGE`\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\nThis directive defines the Unicode mapping file path used by the urlDecodeUni transformation function. The code page parameter specifies the target character encoding (e.g., 20127 represents US-ASCII). When processing URLs that use non-ASCII encoding, this configuration ensures correct character conversion.\n\n**Example:**\n\n```apache\nSecUnicodeMapFile unicode.mapping 20127\n```",
        zh: "**描述:** 配置 Unicode 映射文件路径和代码页。\n\n**语法:** `SecUnicodeMapFile PATH CODEPAGE`\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n该指令定义用于 urlDecodeUni 转换函数的 Unicode 映射文件路径。代码页参数指定目标字符编码（如 20127 表示 US-ASCII）。当处理使用非 ASCII 编码的 URL 时，此配置确保正确的字符转换。\n\n**示例:**\n\n```apache\nSecUnicodeMapFile unicode.mapping 20127\n```",
        slug: "secunicodemapfile"
    },
    "SecUploadDir": {
        en: "**Description:** Configure the storage directory for file uploads.\n\n**Syntax:** `SecUploadDir PATH`\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\nThis directory must be on the same filesystem as the temporary directory defined by SecTmpDir. This directive should be used in conjunction with SecUploadKeepFiles.\n\nThis directive is not implemented in WGE and cannot be used.\n\n**Example:**\n\n```apache\nSecUploadDir /var/lib/wge/upload/\n```",
        zh: "**描述:** 配置文件上传的存储目录。\n\n**语法:** `SecUploadDir PATH`\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n该目录必须与 SecTmpDir 定义的临时目录位于同一文件系统。此指令需配合 SecUploadKeepFiles 使用。\n\n此指令并未在WGE中实现，无法使用\n\n**示例:**\n\n```apache\nSecUploadDir /var/lib/wge/upload/\n```",
        slug: "secuploaddir"
    },
    "SecUploadFileLimit": {
        en: "**Description:** Configure the maximum number of files allowed to be uploaded in a single request.\n\n\n**Syntax:** `SecUploadFileLimit INT`\n\n\n**Default:** 0\n\n\n**Case Sensitive:** Yes\n\nWhen the number of uploaded files exceeds the configured value, the error flag MULTIPART_FILE_LIMIT_EXCEEDED will be set. This error value, along with other multipart/form-data format errors, is included in the variable MULTIPART_STRICT_ERROR.\n\n**Example:**\n\n\n```apache\nSecUploadFileLimit 10\n```",
        zh: "**描述:** 配置单次请求允许上传的最大文件数量。\n\n\n**语法:** `SecUploadFileLimit INT`\n\n\n**默认值:** 0\n\n\n**区分大小写:** 是\n\n当上传的文件数量超过设置的值时，会设置错误标志 MULTIPART_FILE_LIMIT_EXCEEDED，该错误值和其它multipart/form-data格式的错误被包含在变量 MULTIPART_STRICT_ERROR 中。\n\n**示例:**\n\n\n```apache\nSecUploadFileLimit 10\n```",
        slug: "secuploadfilelimit"
    },
    "SecUploadFileMode": {
        en: "**Description:** Configure the permission mode for uploaded files (octal).\n\n**Syntax:** `SecUploadFileMode MODE`\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\nThis directive is not implemented in WGE and cannot be used.\n\n**Example:**\n\n```apache\nSecUploadFileMode 0640\n```",
        zh: "**描述:** 配置上传文件的权限模式 (八进制)。\n\n**语法:** `SecUploadFileMode MODE`\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n此指令并未在WGE中实现，无法使用。\n\n**示例:**\n\n```apache\nSecUploadFileMode 0640\n```",
        slug: "secuploadfilemode"
    },
    "SecUploadKeepFiles": {
        en: "**Description:** Configure whether to keep uploaded files after request processing is complete.\n\n**Syntax:** `SecUploadKeepFiles On|Off`\n\n**Default:** Off\n\n**Options:**\n\n- **On:** Keep all uploaded files\n- **Off:** Do not keep uploaded files\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\nThis directive requires that the storage directory has been defined via SecUploadDir.\n\n**Example:**\n\n```apache\nSecUploadKeepFiles RelevantOnly\n```",
        zh: "**描述:** 配置是否在请求处理完成后保留上传的文件。\n\n**语法:** `SecUploadKeepFiles On|Off`\n\n**默认值:** Off\n\n**可选值:**\n\n- **On:** 保留所有上传文件\n- **Off:** 不保留上传文件\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n此指令要求存储目录已通过 SecUploadDir 定义。\n\n**示例:**\n\n```apache\nSecUploadKeepFiles RelevantOnly\n```",
        slug: "secuploadkeepfiles"
    },
    "SecWebAppId": {
        en: "**Description:** Configure the web application identifier to distinguish between different applications.\n\n**Syntax:** `SecWebAppId NAME`\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\n**Example:**\n\n```apache\nSecWebAppId \"MyWebApp\"\n```",
        zh: "**描述:** 配置 Web 应用程序标识符,用于区分不同的应用程序。\n\n**语法:** `SecWebAppId NAME`\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n**示例:**\n\n```apache\nSecWebAppId \"MyWebApp\"\n```",
        slug: "secwebappid"
    },
    "SecXmlExternalEntity": {
        en: "**Description:** Configure whether XML external entity processing is allowed.\n\n**Syntax:** `SecXmlExternalEntity On|Off`\n\n**Default:** Off\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\n**Example:**\n\n```apache\nSecXmlExternalEntity Off\n```",
        zh: "**描述:** 配置是否允许 XML 外部实体处理。\n\n**语法:** `SecXmlExternalEntity On|Off`\n\n**默认值:** Off\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n**示例:**\n\n```apache\nSecXmlExternalEntity Off\n```",
        slug: "secxmlexternalentity"
    },
};

// 变量 - 101 个条目
export const VARIABLE_DOCS: Record<string, DocEntry> = {
    "ARGS": {
        en: "**Description:** All request parameters\n\n**Syntax:** `ARGS | ARGS:Key`\n\nARGS contains parameters from multiple sources, including request-line parameters, request bodies of type `application/x-www-form-urlencoded`, `multipart/form-data`, and `application/json`, and, when `SecParseXmlIntoArgs` is set to `On` or `OnlyArgs`, content parsed from `application/xml` request bodies.\n\n**Note:** When this variable is used in phase 1, it behaves the same as `ARGS_GET`.\n\n**Example:**\n\n```apache\nSecRule ARGS:user \"@rx admin\" \"id:1001,deny,msg:'Test'\"\n```\n\n**ARGS Parsing Examples**\n\n## 1. JSON Request Body Parsing (`application/json`)\n\nFor JSON values of type number, boolean, or null, WGE stores only the key because those values usually do not carry attack payloads.\n\nDuring parsing, one JS decode pass is applied by default, including escapes and `\\u` encodings. For example, `\\\\\"` is automatically decoded to `\"`. Its behavior is equivalent to the `jsDecode` transformation.\n\n**Request:**\n\n```\nPOST /api/users HTTP/1.1\nContent-Type: application/json\n\n{\n  \"username\": \"admin\",\n  \"password\": \"secret\\\"123\",\n  \"profile\": {\n    \"email\": \"admin@example.com\",\n    \"role\": \"administrator\"\n  },\n  \"tags\": [\"vip\", \"test\"],\n  \"enable\":false,\n  \"num\":10,\n  \"body\":null\n}\n```\n\n**ARGS parsing result:**\n\n`-` indicates that the parameter name or parameter value is empty:\n\n| Parameter Name | Parameter Value |\n|----------------|-----------------|\n| username | admin |\n| password | secret\"123 |\n| profile | - |\n| email | admin@example.com |\n| role | administrator |\n| tags | - |\n| - | vip |\n| - | test |\n| enable | - |\n| num | - |\n| body | - |\n\n## 2. XML Request Body Parsing (`application/xml`)\n\n**Request:**\n\n```\nPOST /api/order HTTP/1.1\nContent-Type: application/xml\n\n```\n\n**ARGS parsing result:**\n\n`-` indicates that the parameter name or parameter value is empty:\n\n| Parameter Name | Parameter Value |\n|----------------|-----------------|\n| username | admin |\n\n## 3. URL-Encoded Form (`application/x-www-form-urlencoded`)\n\n**Request:**\n\n```\nPOST /login HTTP/1.1\nContent-Type: application/x-www-form-urlencoded\n\nusername=admin&password=secret%26123&remember=true\n```\n\n**ARGS parsing result:**\n\n`-` indicates that the parameter name or parameter value is empty:\n\n| Parameter Name | Parameter Value |\n|----------------|-----------------|\n| username | admin |\n\n## 4. Multipart Form (`multipart/form-data`)\n\n**Request:**\n\n```\nPOST /upload HTTP/1.1\nContent-Type: multipart/form-data; boundary=----WebKitFormBoundary\n\n------WebKitFormBoundary\nContent-Disposition: form-data; name=\"title\"\n\nMy Document\n------WebKitFormBoundary\nContent-Disposition: form-data; name=\"file\"; filename=\"report.pdf\"\nContent-Type: application/pdf\n\n[binary content]\n------WebKitFormBoundary--\n```\n\n**ARGS parsing result:**\n\n`-` indicates that the parameter name or parameter value is empty:\n\n| Parameter Name | Parameter Value |\n|----------------|-----------------|\n| username | admin |",
        zh: "**描述:** 所有请求参数\n\n**语法:** `ARGS | ARGS:Key`\n\nARGS 包含多个部分，其包括请求行的参数、application/x-www-form-urlencoded、multipart/form-data和application/json类型请求体中的参数，同时若SecParseXmlIntoArgs设置为On或者OnlyArgs时，application/xml请求体解析出来的内容也会包含在ARGS中。\n\n**注意：** 当此variable在第一阶段使用时，其相当于`ARGS_GET`。\n\n**示例:**\n\n```apache\nSecRule ARGS:user \"@rx admin\" \"id:1001,deny,msg:'Test'\"\n```\n\n\n**ARGS 解析示例**\n\n## 1. JSON 请求体解析 (application/json)\n\n对于json中value类型为数字、bool值、null类型的，WGE会只保存其key，因为这些value通常不具备攻击能力。\n\n解析过程中会默认发生一次js解码，包括转义和\\u等编码，例如\\\\\"会被自动解码为\"，其能力与转换函数中的jsDecode一致。\n\n**请求:**\n\n```\nPOST /api/users HTTP/1.1\nContent-Type: application/json\n\n{\n  \"username\": \"admin\",\n  \"password\": \"secret\\\"123\",\n  \"profile\": {\n    \"email\": \"admin@example.com\",\n    \"role\": \"administrator\"\n  },\n  \"tags\": [\"vip\", \"test\"],\n  \"enable\":false,\n  \"num\":10,\n  \"body\":null\n}\n```\n**ARGS 解析结果:**\n\n“-”表示参数名或者参数值为空：\n\n| 参数名 | 参数值 |\n|--------|------|\n| username | admin |\n| password | secret\"123 |\n| profile | - |\n| email | admin@example.com |\n| role | administrator |\n| tags | - |\n| - | vip |\n| - | test |\n| enable | - |\n| num | - |\n| body | - |\n\n## 2. XML 请求体解析 (application/xml)\n\n**请求:**\n```\nPOST /api/order HTTP/1.1\nContent-Type: application/xml\n\n \n```\n\n**ARGS 解析结果:**\n\n“-”表示参数名或者参数值为空：\n\n| 参数名 | 参数值 |\n|--------|------|\n| username | admin |\n\n## 3. URL-encoded 表单 (application/x-www-form-urlencoded)\n\n**请求:**\n```\nPOST /login HTTP/1.1\nContent-Type: application/x-www-form-urlencoded\n\nusername=admin&password=secret%26123&remember=true\n```\n\n\n**ARGS 解析结果:**\n\n“-”表示参数名或者参数值为空：\n\n| 参数名 | 参数值 |\n|--------|------|\n| username | admin |\n\n## 4. Multipart 表单 (multipart/form-data)\n\n**请求:**\n\n```\nPOST /upload HTTP/1.1\nContent-Type: multipart/form-data; boundary=----WebKitFormBoundary\n\n------WebKitFormBoundary\nContent-Disposition: form-data; name=\"title\"\n\nMy Document\n------WebKitFormBoundary\nContent-Disposition: form-data; name=\"file\"; filename=\"report.pdf\"\nContent-Type: application/pdf\n\n[binary content]\n------WebKitFormBoundary--\n```\n\n**ARGS 解析结果:**\n\n“-”表示参数名或者参数值为空：\n\n| 参数名 | 参数值 |\n|--------|------|\n| username | admin |",
        slug: "args"
    },
    "ARGS_COMBINED_SIZE": {
        en: "**Description:** Combined size of all parameters\n\n**Syntax:** `ARGS_COMBINED_SIZE`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule ARGS_COMBINED_SIZE \"@eq 10\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 所有参数的总大小\n\n**语法:** `ARGS_COMBINED_SIZE`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule ARGS_COMBINED_SIZE \"@eq 10\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "args_combined_size"
    },
    "ARGS_GET": {
        en: "**Description:** GET parameters\n\n**Syntax:** `ARGS_GET | ARGS_GET:Key`\n\nARGS_GET contains only parameters passed in the URL query string (i.e., GET parameters). Unlike ARGS, it does not include parameters from the POST request body, making it useful for inspecting only URL-passed data without false positives from POST data. Specific parameters can be accessed via ARGS_GET:paramname.\n\n**Example:**\n\n```apache\n# Check for SQL injection in URL query parameters\nSecRule ARGS_GET \"@detectSQLi\" \"id:1001,phase:1,deny,status:403,msg:'SQL injection detected in GET parameters'\"\n\n# Check specific GET parameter\nSecRule ARGS_GET:id \"@rx [^0-9]\" \"id:1002,phase:1,deny,msg:'ID parameter must be numeric'\"\n```",
        zh: "**描述:** GET 请求参数\n\n**语法:** `ARGS_GET | ARGS_GET:Key`\n\nARGS_GET 仅包含 URL 查询字符串中传递的参数（即 GET 参数）。与 ARGS 不同，它不包含 POST 请求体中的参数，因此可用于仅检查 URL 传递的数据，避免误检 POST 数据。可以通过 ARGS_GET:paramname 访问特定参数。\n\n**示例:**\n\n```apache\n# 检查 URL 查询参数中的 SQL 注入\nSecRule ARGS_GET \"@detectSQLi\" \"id:1001,phase:1,deny,status:403,msg:'GET 参数检测到 SQL 注入'\"\n\n# 检查特定的 GET 参数\nSecRule ARGS_GET:id \"@rx [^0-9]\" \"id:1002,phase:1,deny,msg:'ID 参数必须为数字'\"\n```",
        slug: "args_get"
    },
    "ARGS_GET_NAMES": {
        en: "**Description:** GET parameter names\n\n**Syntax:** `ARGS_GET_NAMES | ARGS_GET_NAMES:Key`\n\nARGS_GET_NAMES contains only the names of parameters in the URL query string. Used to detect whether GET parameter names contain suspicious content without checking POST parameter names.\n\n**Example:**\n\n```apache\nSecRule ARGS_GET_NAMES \"@detectSQLi\" \"id:1007,phase:1,deny,msg:'SQL injection detected in GET parameter name'\"\n```",
        zh: "**描述:** GET 参数名称\n\n**语法:** `ARGS_GET_NAMES | ARGS_GET_NAMES:Key`\n\nARGS_GET_NAMES 仅包含 URL 查询字符串中参数的名称。用于检测 GET 参数名是否包含可疑内容，而不检查 POST 参数名。\n\n**示例:**\n\n```apache\nSecRule ARGS_GET_NAMES \"@detectSQLi\" \"id:1007,phase:1,deny,msg:'GET 参数名检测到 SQL 注入'\"\n```",
        slug: "args_get_names"
    },
    "ARGS_NAMES": {
        en: "**Description:** All parameter names\n\n**Syntax:** `ARGS_NAMES | ARGS_NAMES:Key`\n\nARGS_NAMES contains the names (keys) of all request parameters, including both GET and POST parameters. This variable is used to detect whether parameter names themselves contain attack payloads, which is a common bypass technique where attackers may inject malicious code in parameter names.\n\n**Example:**\n\n```apache\n# Detect SQL injection keywords in parameter names\nSecRule ARGS_NAMES \"@pm select union insert delete drop\" \\\n    \"id:1005,phase:2,deny,msg:'Parameter name contains SQL keyword'\"\n\n# Limit parameter names to alphanumeric and underscores only\nSecRule ARGS_NAMES \"!@rx ^[a-zA-Z0-9_\\[\\]\\.]+$\" \\\n    \"id:1006,phase:2,deny,msg:'Parameter name contains illegal characters'\"\n```",
        zh: "**描述:** 所有参数名称\n\n\n**语法:** `ARGS_NAMES | ARGS_NAMES:Key`\n\n\nARGS_NAMES 包含所有请求参数的名称（键名），包括 GET 和 POST 参数。此变量用于检测参数名称本身是否包含攻击载荷，这是一种常见的绕过技术，攻击者可能在参数名中注入恶意代码。\n\n\n**示例:**\n\n\n```apache\n# 检测参数名中的 SQL 注入关键字\nSecRule ARGS_NAMES \"@pm select union insert delete drop\" \\\n    \"id:1005,phase:2,deny,msg:'参数名包含 SQL 关键字'\"\n\n# 限制参数名只能包含字母数字和下划线\nSecRule ARGS_NAMES \"!@rx ^[a-zA-Z0-9_\\[\\]\\.]+$\" \\\n    \"id:1006,phase:2,deny,msg:'参数名包含非法字符'\"\n```",
        slug: "args_names"
    },
    "ARGS_POST": {
        en: "**Description:** POST request parameters\n\n**Syntax:** `ARGS_POST | ARGS_POST:Key`\n\nARGS_POST contains only parameters passed in the request body, that is, POST data. WGE supports parsing request bodies in `application/x-www-form-urlencoded`, `multipart/form-data`, and `application/json` formats. Use this variable to inspect only data submitted in the request body without checking URL parameters. `SecRequestBodyAccess` must be enabled to access this variable.\n\n**Note:**\n\n- This variable must be used in phase 2 or later. Otherwise, its value is empty.\n- When `SecParseXmlIntoArgs` is `On` or `OnlyArgs`, it also includes data parsed from `application/xml` request bodies.\n\n**Example:**\n\n```apache\n# Check for XSS in POST form parameters\nSecRule ARGS_POST \"@detectXSS\" \"id:1003,phase:2,deny,status:403,msg:'XSS detected in POST parameters'\"\n\n# Validate login form username format\nSecRule ARGS_POST:username \"!@rx ^[a-zA-Z0-9_]{3,20}$\" \\\n    \"id:1004,phase:2,deny,msg:'Invalid username format'\"\n```",
        zh: "**描述:** POST 请求参数\n\n**语法:** `ARGS_POST | ARGS_POST:Key`\n\nARGS_POST 仅包含请求体中传递的参数（即 POST 数据）。WGE 支持解析 application/x-www-form-urlencoded、multipart/form-data、application/json 格式的请求体。使用此变量可以仅检查表单提交的数据，而不检查 URL 参数。需要启用 SecRequestBodyAccess 才能访问此变量。\n\n**注意：** \n- 此变量需要在第二阶段及其之后的规则使用，否则其值为空。\n- 当`SecParseXmlIntoArgs`为`On`或者`OnlyArgs`时，其还包含application/xml类型的请求体。\n\n**示例:**\n\n```apache\n# 检查 POST 表单参数中的 XSS\nSecRule ARGS_POST \"@detectXSS\" \"id:1003,phase:2,deny,status:403,msg:'POST 参数检测到 XSS'\"\n\n# 验证登录表单的用户名格式\nSecRule ARGS_POST:username \"!@rx ^[a-zA-Z0-9_]{3,20}$\" \\\n    \"id:1004,phase:2,deny,msg:'用户名格式无效'\"\n```",
        slug: "args_post"
    },
    "ARGS_POST_NAMES": {
        en: "**Description:** POST parameter names\n\n**Syntax:** `ARGS_POST_NAMES | ARGS_POST_NAMES:Key`\n\nARGS_POST_NAMES contains only the names of parameters in the request body. Used to detect whether POST parameter names contain suspicious content. SecRequestBodyAccess must be enabled to access this variable.\n\n**Example:**\n\n```apache\nSecRule ARGS_POST_NAMES \"@detectXSS\" \"id:1008,phase:2,deny,msg:'XSS detected in POST parameter name'\"\n```",
        zh: "**描述:** POST 参数名称\n\n\n**语法:** `ARGS_POST_NAMES | ARGS_POST_NAMES:Key`\n\nARGS_POST_NAMES 仅包含请求体中参数的名称。用于检测 POST 参数名是否包含可疑内容，需要启用 SecRequestBodyAccess 才能访问。\n\n**示例:**\n\n```apache\nSecRule ARGS_POST_NAMES \"@detectXSS\" \"id:1008,phase:2,deny,msg:'POST 参数名检测到 XSS'\"\n```",
        slug: "args_post_names"
    },
    "AUTH_TYPE": {
        en: "**Description:** Authentication type\n\n**Syntax:** `AUTH_TYPE`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule AUTH_TYPE \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 认证类型\n\n\n**语法:** `AUTH_TYPE`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n\n```apache\nSecRule AUTH_TYPE \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "auth_type"
    },
    "DURATION": {
        en: "**Description:** Transaction processing duration\n\n**Syntax:** `DURATION`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule DURATION \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 事务处理时长\n\n\n**语法:** `DURATION`\n\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule DURATION \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "duration"
    },
    "ENV": {
        en: "**Description:** Environment variable collection\n\n**Syntax:** `ENV`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule ENV \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 环境变量集合\n\n\n**语法:** `ENV`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule ENV \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "env"
    },
    "FILES": {
        en: "**Description:** Uploaded file names\n\n**Syntax:** `FILES | FILES:fieldname`\n\nFILES contains the original filenames of files uploaded via multipart/form-data. You can access files uploaded in a specific form field using FILES:fieldname. This variable is central to file upload security checks and can be used to verify file extensions, filename formats, etc.\n\n**Example:**\n\n```apache\n# Check for dangerous extensions in uploaded files\nSecRule FILES \"@rx \\.(php|jsp|asp|exe|sh|bat)$\" \\\n    \"id:1050,phase:2,deny,status:403,msg:'Uploading this file type is forbidden'\"\n```",
        zh: "**描述:** 上传文件内容\n\n**语法:** `FILES | FILES:fieldname`\n\nFILES 包含通过 multipart/form-data 上传的文件的原始文件名。可通过 FILES:fieldname 访问特定表单字段中上传的文件。此变量是文件上传安全检查的核心，可用于验证文件扩展名、文件名格式等。\n\n**示例:**\n\n```apache\n# 检查上传文件的危险扩展名\nSecRule FILES \"@rx \\.(php|jsp|asp|exe|sh|bat)$\" \\\n    \"id:1050,phase:2,deny,status:403,msg:'禁止上传此类型文件'\"\n```",
        slug: "files"
    },
    "FILES_COMBINED_SIZE": {
        en: "**Description:** Combined size of all uploaded files\n\n**Syntax:** `FILES_COMBINED_SIZE`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule FILES_COMBINED_SIZE \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 所有上传文件的总大小\n\n\n**语法:** `FILES_COMBINED_SIZE`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule FILES_COMBINED_SIZE \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "files_combined_size"
    },
    "FILES_NAMES": {
        en: "**Description:** Uploaded file names\n\n**Syntax:** `FILES_NAMES | FILES_NAMES:Key`\n\nFILES_NAMES contains the form field names corresponding to all uploaded files. Can be used to detect anomalous content in form field names, or to verify that uploaded files are submitted through expected form fields.\n\n**Example:**\n\n```apache\n# Ensure files are only uploaded through the 'avatar' field\nSecRule FILES_NAMES \"!@streq avatar\" \\\n    \"id:1051,phase:2,deny,msg:'Illegal file upload field'\"\n```",
        zh: "**描述:** 上传文件名称\n\n\n**语法:** `FILES_NAMES | FILES_NAMES:Key`\n\nFILES_NAMES 包含所有上传文件对应的表单字段名称。可用于检测表单字段名中的异常内容，或验证上传文件是否通过预期的表单字段提交。\n\n**示例:**\n\n```apache\n# 确保文件仅通过 'avatar' 字段上传\nSecRule FILES_NAMES \"!@streq avatar\" \\\n    \"id:1051,phase:2,deny,msg:'非法的文件上传字段'\"\n```",
        slug: "files_names"
    },
    "FILES_SIZES": {
        en: "**Description:** Uploaded file sizes\n\n**Syntax:** `FILES_SIZES`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule FILES_SIZES \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 上传文件大小\n\n\n**语法:** `FILES_SIZES`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n\n```apache\nSecRule FILES_SIZES \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "files_sizes"
    },
    "FILES_TMPNAMES": {
        en: "**Description:** Uploaded file temporary names\n\n**Syntax:** `FILES_TMPNAMES`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule FILES_TMPNAMES \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 上传文件临时名称\n\n**语法:** `FILES_TMPNAMES`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule FILES_TMPNAMES \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "files_tmpnames"
    },
    "FILES_TMP_CONTENT": {
        en: "**Description:** Uploaded file temporary content\n\n**Syntax:** `FILES_TMP_CONTENT | FILES_TMP_CONTENT:Key`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule FILES_TMP_CONTENT \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 上传文件临时内容\n\n\n**语法:** `FILES_TMP_CONTENT | FILES_TMP_CONTENT:Key`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n\n```apache\nSecRule FILES_TMP_CONTENT \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "files_tmp_content"
    },
    "FULL_REQUEST": {
        en: "**Description:** Complete request data\n\n**Syntax:** `FULL_REQUEST`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule FULL_REQUEST \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 完整的请求数据\n\n**语法:** `FULL_REQUEST`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule FULL_REQUEST \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "full_request"
    },
    "FULL_REQUEST_LENGTH": {
        en: "**Description:** Complete request length\n\n**Syntax:** `FULL_REQUEST_LENGTH`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule FULL_REQUEST_LENGTH \"@gt 10485760\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 完整请求的长度\n\n\n**语法:** `FULL_REQUEST_LENGTH`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule FULL_REQUEST_LENGTH \"@gt 10485760\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "full_request_length"
    },
    "GEO": {
        en: "**Description:** Geolocation information\n\n**Syntax:** `GEO`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule GEO \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 地理位置信息\n\n**语法:** `GEO`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n\n**示例:**\n\n```apache\nSecRule GEO \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "geo"
    },
    "GLOBAL": {
        en: "**Description:** Global variable collection\n\n**Syntax:** `GLOBAL:key`\n\nThe GLOBAL collection is used to store global persistent data across transactions. Unlike TX, GLOBAL variables persist across multiple requests and can be used to implement global counters, global status flags, etc. Must be initialized via the initcol action before use.\n\nThis variable is not recommended at the moment because its parsing and assignment behavior still has some issues.\n\n**Example:**\n\n```apache\n# Initialize global collection\nSecAction \"id:1055,phase:1,pass,nolog,initcol:GLOBAL=global\"\n\n# Global request count\nSecRule GLOBAL \"@eq 100\" \"id:1056,phase:1,deny,nolog\"\n```",
        zh: "**描述:** 全局变量集合\n\n**语法:** `GLOBAL:key`\n\nGLOBAL 集合用于存储跨事务的全局持久化数据。与 TX 不同，GLOBAL 变量在多个请求之间保持，可用于实现全局计数器、全局状态标志等。需要通过 initcol 动作初始化后才能使用。\n\n此变量不建议使用，目前其解析和赋值等功能存在一些问题。\n\n**示例:**\n\n```apache\n# 初始化全局集合\nSecAction \"id:1055,phase:1,pass,nolog,initcol:GLOBAL=global\"\n\n# 全局请求计数\nSecRule GLOBAL \"@eq 100\" \"id:1056,phase:1,deny,nolog\"\n```",
        slug: "global"
    },
    "HIGHEST_SEVERITY": {
        en: "**Description:** Highest severity level\n\n**Syntax:** `HIGHEST_SEVERITY`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule HIGHEST_SEVERITY \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 最高严重级别\n\n\n**语法:** `HIGHEST_SEVERITY`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule HIGHEST_SEVERITY \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "highest_severity"
    },
    "INBOUND_DATA_ERROR": {
        en: "**Description:** Request body length limit exceeded error\n\n**Syntax:** `INBOUND_DATA_ERROR`\n\nWhen the request body size exceeds the value configured by the `SecRequestBodyLimit` directive, this variable is set to `1`.\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule INBOUND_DATA_ERROR \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 请求体长度超限错误\n\n**语法:** `INBOUND_DATA_ERROR`\n\n当请求体大小高于SecRequestBodyLimit指令配置的设置时，此变量将被设置为1。\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule INBOUND_DATA_ERROR \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "inbound_data_error"
    },
    "IP": {
        en: "**Description:** IP address collection\n\n**Syntax:** `IP:key`\n\nThe IP collection is used to store persistent data associated with client IP addresses. Commonly used to implement IP-level request rate limiting, IP reputation scoring, etc. Needs to be initialized via initcol:IP=%{REMOTE_ADDR}. Data in the IP collection persists across multiple requests from the same client IP.\n\nThis variable is not recommended at the moment because its parsing and assignment behavior still has some issues.\n\n**Example:**\n\n```apache\n# Initialize IP collection\nSecAction \"id:1057,phase:1,pass,nolog,initcol:IP=%{REMOTE_ADDR}\"\n\n# IP-level request rate limiting\nSecRule IP:request_count \"@gt 100\" \\\n    \"id:1058,phase:1,deny,msg:'IP request rate exceeded'\"\nSecRule REQUEST_URI \"@rx .\" \\\n    \"id:1059,phase:1,pass,nolog,setvar:IP.request_count=+1,\\\n    expirevar:IP.request_count=60\"\n```",
        zh: "**描述:** IP 地址集合\n\n\n**语法:** `IP:key`\n\n\nIP 集合用于存储与客户端 IP 地址关联的持久化数据。常用于实现 IP 级别的访问频率限制、IP 信誉评分等。需要通过 initcol:IP=%{REMOTE_ADDR} 初始化。IP 集合中的数据在同一客户端 IP 的多次请求间保持。\n\n此变量不建议使用，目前其解析和赋值等功能存在一些问题。\n\n**示例:**\n\n\n```apache\n# 初始化 IP 集合\nSecAction \"id:1057,phase:1,pass,nolog,initcol:IP=%{REMOTE_ADDR}\"\n\n# IP 级别的请求频率限制\nSecRule IP:request_count \"@gt 100\" \\\n    \"id:1058,phase:1,deny,msg:'IP 请求频率超限'\"\nSecRule REQUEST_URI \"@rx .\" \\\n    \"id:1059,phase:1,pass,nolog,setvar:IP.request_count=+1,\\\n    expirevar:IP.request_count=60\"\n```",
        slug: "ip"
    },
    "MATCHED_VAR": {
        en: "**Description:** Last matched variable value\n\n**Syntax:** `MATCHED_VAR`\n\nMATCHED_VAR contains the value of the last variable that matched successfully in the rule. When a rule checks multiple variables (e.g., ARGS) and finds a match, this variable holds the specific value that triggered the match. Commonly used for logging and debugging to understand exactly what content triggered the rule.\n\n**Note:** By default, `MATCHED_VAR` returns the last value matched by the parent rule. If there is no parent rule, it returns the last value matched by the current rule.\n\n**Example:**\n\n```apache\n# Log the matched content\nSecRule ARGS \"@detectSQLi\" \\\n    \"id:1063,phase:2,deny,msg:'SQL injection: %{MATCHED_VAR}'\"\n```",
        zh: "**描述:** 最后匹配的变量值\n\n**语法:** `MATCHED_VAR`\n\nMATCHED_VAR 包含规则中最后一个匹配成功的变量的值。当规则检查多个变量（如 ARGS）并找到匹配时，此变量保存触发匹配的具体值。常用于日志记录和调试，了解具体什么内容触发了规则。\n\n**注意：** MATCHED_VAR默认拿取的是父规则的最后一个匹配成功的值，当其不存在父规则时，其会拿取当前规则的最后一个匹配成功的值。\n\n**示例:**\n\n```apache\n# 在日志中记录匹配的内容\nSecRule ARGS \"@detectSQLi\" \\\n    \"id:1063,phase:2,deny,msg:'SQL 注入: %{MATCHED_VAR}'\"\n```",
        slug: "matched_var"
    },
    "MATCHED_VARS": {
        en: "**Description:** All matched variable values\n\n**Syntax:** `MATCHED_VARS`\n\nMATCHED_VARS is a collection variable containing all variable values that matched successfully in the current rule. Unlike MATCHED_VAR, when a rule matches multiple values (e.g., multiple parameters containing malicious content), MATCHED_VARS contains all these values. Can be used in chain rules to further inspect all matched content.\n\n**Note:** By default, `MATCHED_VARS` returns the values matched by the parent rule. If there is no parent rule, it returns the values matched by the current rule.\n\nWGE's `MATCHED_VARS` behavior is not the same as ModSecurity. WGE does not keep accumulating matches indefinitely. It can return only the values matched by the parent rule or the current rule, as in the following example:\n\n```apache\nSecRule ARGS \"@rx [0-9]+['\\\"]\\s*(and|or)\" \"id:1001,phase:2,t:none,deny,chain\"\n    SecRule ARGS \"@rx --\" \"chain,t:none\"\n        SecRule MATCHED_VARS \"@rx select\" \"t:none\"\n```\n\nIn WGE, `MATCHED_VARS` in this rule gets only the value matched by the parent rule. In ModSecurity, it gets the values matched by both the parent rule and the grandparent rule. `MATCHED_VARS_NAMES` behaves similarly.\n\n**Example:**\n\n```apache\n# Check the length of all matched values\nSecRule ARGS \"@rx script\" \\\n    \"id:1065,phase:2,pass,setvar:tx.script_found=1,chain\"\nSecRule MATCHED_VARS \"@gt 100\" \"t:length,deny,msg:'Long script content detected'\"\n```",
        zh: "**描述:** 所有匹配的变量值\n\n\n**语法:** `MATCHED_VARS`\n\n\nMATCHED_VARS 是一个集合变量，包含当前规则所有匹配成功的变量值。与 MATCHED_VAR 不同，当规则匹配多个值时（如多个参数都包含恶意内容），MATCHED_VARS 包含所有这些值。可用于链式规则中进一步检查所有匹配内容。\n\n**注意：** MATCHED_VAR_NAMES 默认拿取的是父规则的匹配成功的值，当其不存在父规则时，其会拿取当前规则的匹配成功的值。\n\nWGE 的 MATCHED_VARS 与 modsecurity 的有所不一致，WGE 的并不会不断累积，且其仅可能访问父规则或者自己的匹配成功的值，例如下面的规则：\n```apache\nSecRule ARGS \"@rx [0-9]+['\\\"]\\s*(and|or)\" \"id:1001,phase:2,t:none,deny,chain\"\n    SecRule ARGS \"@rx --\" \"chain,t:none\"\n        SecRule MATCHED_VARS \"@rx select\" \"t:none\"\n```\n\n这条规则在 WGE 中 MATCHED_VARS 仅会拿到父规则的匹配成功的值，但是在 modsecurity 中其同时会拿到父规则和父规则的父规则的匹配成功的值，MATCHED_VARS_NAMES 也类似。\n\n**示例:**\n\n```apache\n# 检查所有匹配值的长度\nSecRule ARGS \"@rx script\" \\\n    \"id:1065,phase:2,pass,setvar:tx.script_found=1,chain\"\nSecRule MATCHED_VARS \"@gt 100\" \"t:length,deny,msg:'检测到长脚本内容'\"\n```",
        slug: "matched_vars"
    },
    "MATCHED_VARS_NAMES": {
        en: "**Description:** All matched variable names\n\n**Syntax:** `MATCHED_VARS_NAMES`\n\nMATCHED_VARS_NAMES is a collection variable containing the names of all variables that matched successfully in the current rule. Unlike MATCHED_VAR_NAME, when a rule matches multiple variables, this variable contains all matched variable names.\n\n**Note:** By default, `MATCHED_VARS_NAMES` returns the full names matched by the parent rule. If there is no parent rule, it returns the full names matched by the current rule.\n\n**Example:**\n\n```apache\n# Log all matched variable names\nSecRule ARGS|REQUEST_HEADERS \"@detectSQLi\" \\\n    \"id:1066,phase:2,deny,msg:'SQL injection in: %{MATCHED_VARS_NAMES}'\"\n```",
        zh: "**描述:** 所有匹配的变量名\n\n**语法:** `MATCHED_VARS_NAMES`\n\nMATCHED_VARS_NAMES 是一个集合变量，包含当前规则所有匹配成功的变量名称。与 MATCHED_VAR_NAME 不同，当规则匹配多个变量时，此变量包含所有匹配变量的名称。\n\n**注意：** MATCHED_VAR_NAMES默认拿取的是父规则的匹配成功的完整名称，当其不存在父规则时，其会拿取当前规则的匹配成功的完整名称。\n\n\n**示例:**\n\n```apache\n# 记录所有匹配的变量名\nSecRule ARGS|REQUEST_HEADERS \"@detectSQLi\" \\\n    \"id:1066,phase:2,deny,msg:'SQL 注入在: %{MATCHED_VARS_NAMES}'\"\n```",
        slug: "matched_vars_names"
    },
    "MATCHED_VAR_NAME": {
        en: "**Description:** Last matched variable name\n\n**Syntax:** `MATCHED_VAR_NAME`\n\nMATCHED_VAR_NAME contains the full name of the last variable that matched successfully. For example, if ARGS:username triggered the rule, the value of MATCHED_VAR_NAME would be \"ARGS:username\". Used together with MATCHED_VAR to fully record both the location and content that triggered the rule.\n\n**Note:** By default, `MATCHED_VAR_NAME` returns the full name matched by the parent rule. If there is no parent rule, it returns the full name matched by the current rule.\n\n**Example:**\n\n```apache\n# Log the matched variable name and value\nSecRule ARGS \"@detectXSS\" \\\n    \"id:1064,phase:2,deny,msg:'XSS in %{MATCHED_VAR_NAME}: %{MATCHED_VAR}'\"\n```",
        zh: "**描述:** 最后匹配的变量名\n\n**语法:** `MATCHED_VAR_NAME`\n\nMATCHED_VAR_NAME 包含最后一个匹配成功的变量的完整名称。例如，如果 ARGS:username 触发了规则，MATCHED_VAR_NAME 的值为 \"ARGS:username\"。与 MATCHED_VAR 配合使用可以完整记录触发规则的位置和内容。\n\n**注意：** MATCHED_VAR_NAME默认拿取的是父规则的最后一个匹配成功的完整名称，当其不存在父规则时，其会拿取当前规则的最后一个匹配成功的完整名称。\n\n**示例:**\n\n```apache\n# 记录匹配的变量名和值\nSecRule ARGS \"@detectXSS\" \\\n    \"id:1064,phase:2,deny,msg:'XSS 在 %{MATCHED_VAR_NAME}: %{MATCHED_VAR}'\"\n```",
        slug: "matched_var_name"
    },
    "MODSEC_BUILD": {
        en: "**Description:** ModSecurity build version\n\n**Syntax:** `MODSEC_BUILD`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule MODSEC_BUILD \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** ModSecurity 构建版本\n\n**语法:** `MODSEC_BUILD`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule MODSEC_BUILD \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "modsec_build"
    },
    "MSC_PCRE_LIMITS_EXCEEDED": {
        en: "**Description:** PCRE limits exceeded flag\n\n**Syntax:** `MSC_PCRE_LIMITS_EXCEEDED`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule MSC_PCRE_LIMITS_EXCEEDED \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** PCRE 限制超出标志\n\n**语法:** `MSC_PCRE_LIMITS_EXCEEDED`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule MSC_PCRE_LIMITS_EXCEEDED \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "msc_pcre_limits_exceeded"
    },
    "MULTIPART_BOUNDARY_QUOTED": {
        en: "**Description:** Multipart boundary quoting error\n\n**Syntax:** `MULTIPART_BOUNDARY_QUOTED`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule MULTIPART_BOUNDARY_QUOTED \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** Multipart 边界引号错误\n\n**语法:** `MULTIPART_BOUNDARY_QUOTED`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule MULTIPART_BOUNDARY_QUOTED \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "multipart_boundary_quoted"
    },
    "MULTIPART_BOUNDARY_WHITESPACE": {
        en: "**Description:** Multipart boundary whitespace error\n\n**Syntax:** `MULTIPART_BOUNDARY_WHITESPACE`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule MULTIPART_BOUNDARY_WHITESPACE \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** Multipart 边界空白错误\n\n**语法:** `MULTIPART_BOUNDARY_WHITESPACE`\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**是否实现:** 否\n\n**示例:**\n\n```apache\nSecRule MULTIPART_BOUNDARY_WHITESPACE \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "multipart_boundary_whitespace"
    },
    "MULTIPART_CRLF_LF_LINES": {
        en: "**Description:** Multipart CRLF/LF line count\n\n**Syntax:** `MULTIPART_CRLF_LF_LINES`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule MULTIPART_CRLF_LF_LINES \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** Multipart CRLF/LF 行数\n\n**语法:** `MULTIPART_CRLF_LF_LINES`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n\n```apache\nSecRule MULTIPART_CRLF_LF_LINES \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "multipart_crlf_lf_lines"
    },
    "MULTIPART_DATA_AFTER": {
        en: "**Description:** Data after multipart boundary\n\n**Syntax:** `MULTIPART_DATA_AFTER`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule MULTIPART_DATA_AFTER \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** Multipart 边界后的数据\n\n**语法:** `MULTIPART_DATA_AFTER`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule MULTIPART_DATA_AFTER \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "multipart_data_after"
    },
    "MULTIPART_DATA_BEFORE": {
        en: "**Description:** Data before multipart boundary\n\n**Syntax:** `MULTIPART_DATA_BEFORE`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule MULTIPART_DATA_BEFORE \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** Multipart 边界前的数据\n\n**语法:** `MULTIPART_DATA_BEFORE`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule MULTIPART_DATA_BEFORE \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "multipart_data_before"
    },
    "MULTIPART_FILENAME": {
        en: "**Description:** Multipart filename\n\n**Syntax:** `MULTIPART_FILENAME`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule MULTIPART_FILENAME \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** Multipart 文件名\n\n**语法:** `MULTIPART_FILENAME`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule MULTIPART_FILENAME \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "multipart_filename"
    },
    "MULTIPART_FILE_LIMIT_EXCEEDED": {
        en: "**Description:** Multipart file count limit exceeded\n\n**Syntax:** `MULTIPART_FILE_LIMIT_EXCEEDED`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule MULTIPART_FILE_LIMIT_EXCEEDED \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** Multipart 文件数量超限\n\n**语法:** `MULTIPART_FILE_LIMIT_EXCEEDED`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule MULTIPART_FILE_LIMIT_EXCEEDED \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "multipart_file_limit_exceeded"
    },
    "MULTIPART_HEADER_FOLDING": {
        en: "**Description:** Multipart header folding\n\n**Syntax:** `MULTIPART_HEADER_FOLDING`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule MULTIPART_HEADER_FOLDING \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** Multipart 头折叠\n\n**语法:** `MULTIPART_HEADER_FOLDING`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule MULTIPART_HEADER_FOLDING \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "multipart_header_folding"
    },
    "MULTIPART_INVALID_HEADER_FOLDING": {
        en: "**Description:** Multipart invalid header folding\n\n**Syntax:** `MULTIPART_INVALID_HEADER_FOLDING`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule MULTIPART_INVALID_HEADER_FOLDING \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** Multipart 无效头折叠\n\n**语法:** `MULTIPART_INVALID_HEADER_FOLDING`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule MULTIPART_INVALID_HEADER_FOLDING \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "multipart_invalid_header_folding"
    },
    "MULTIPART_INVALID_PART": {
        en: "**Description:** Multipart invalid part\n\n**Syntax:** `MULTIPART_INVALID_PART`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule MULTIPART_INVALID_PART \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** Multipart 无效部分\n\n**语法:** `MULTIPART_INVALID_PART`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule MULTIPART_INVALID_PART \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "multipart_invalid_part"
    },
    "MULTIPART_INVALID_QUOTING": {
        en: "**Description:** Multipart invalid quoting\n\n**Syntax:** `MULTIPART_INVALID_QUOTING`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule MULTIPART_INVALID_QUOTING \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** Multipart 无效引号\n\n**语法:** `MULTIPART_INVALID_QUOTING`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule MULTIPART_INVALID_QUOTING \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "multipart_invalid_quoting"
    },
    "MULTIPART_LF_LINE": {
        en: "**Description:** Multipart LF line\n\n**Syntax:** `MULTIPART_LF_LINE`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule MULTIPART_LF_LINE \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** Multipart LF 行\n\n**语法:** `MULTIPART_LF_LINE`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule MULTIPART_LF_LINE \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "multipart_lf_line"
    },
    "MULTIPART_MISSING_SEMICOLON": {
        en: "**Description:** Multipart missing semicolon\n\n**Syntax:** `MULTIPART_MISSING_SEMICOLON`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule MULTIPART_MISSING_SEMICOLON \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** Multipart 缺少分号\n\n**语法:** `MULTIPART_MISSING_SEMICOLON`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule MULTIPART_MISSING_SEMICOLON \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "multipart_missing_semicolon"
    },
    "MULTIPART_NAME": {
        en: "**Description:** Multipart field name\n\n**Syntax:** `MULTIPART_NAME`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule MULTIPART_NAME \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** Multipart 字段名\n\n**语法:** `MULTIPART_NAME`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule MULTIPART_NAME \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "multipart_name"
    },
    "MULTIPART_PART_HEADERS": {
        en: "**Description:** Headers of multipart parts\n\n**Syntax:** `MULTIPART_PART_HEADERS | MULTIPART_PART_HEADERS:HeaderName`\n\nMULTIPART_PART_HEADERS contains the header information of each part in a multipart/form-data request. Used to detect abnormal content in headers like Content-Type and Content-Disposition of uploaded file parts.\n\n**Example:**\n\n```apache\n# Detect abnormal Content-Type in multipart headers\nSecRule MULTIPART_PART_HEADERS \"@rx application/(php|x-php|x-httpd-php)\" \\\n    \"id:1041,phase:2,deny,msg:'Uploaded file has abnormal Content-Type'\"\n```",
        zh: "**描述:** Multipart 部分头\n\n**语法:** `MULTIPART_PART_HEADERS | MULTIPART_PART_HEADERS:HeaderName`\n\nMULTIPART_PART_HEADERS 包含 multipart/form-data 请求中各部分的头信息。可用于检测上传文件部分的 Content-Type、Content-Disposition 等头信息中的异常内容。\n\n**示例:**\n\n```apache\n# 检测 multipart 头中的异常 Content-Type\nSecRule MULTIPART_PART_HEADERS \"@rx application/(php|x-php|x-httpd-php)\" \\\n    \"id:1041,phase:2,deny,msg:'上传文件 Content-Type 异常'\"\n```",
        slug: "multipart_part_headers"
    },
    "MULTIPART_STRICT_ERROR": {
        en: "**Description:** Multipart strict parsing error flag\n\n**Syntax:** `MULTIPART_STRICT_ERROR`\n\nMULTIPART_STRICT_ERROR is a composite flag variable set to 1 when any strict mode violations are detected during multipart request body parsing. It combines multiple multipart error flags (such as MULTIPART_UNMATCHED_BOUNDARY, etc.) for quick determination of whether a multipart request contains anomalies. This is an important checkpoint for preventing file upload bypass attacks.\n\n**Example:**\n\n```apache\n# Reject requests with multipart parsing errors\nSecRule MULTIPART_STRICT_ERROR \"!@eq 0\" \\\n    \"id:1042,phase:2,deny,status:403,msg:'Multipart request parsing anomaly'\"\n```",
        zh: "**描述:** Multipart 严格错误标志\n\n**语法:** `MULTIPART_STRICT_ERROR`\n\nMULTIPART_STRICT_ERROR 是一个复合标志变量，当 multipart 请求体解析过程中检测到任何严格模式违规时设置为 1。它综合了多个 multipart 错误标志（如 MULTIPART_UNMATCHED_BOUNDARY 等），用于快速判断 multipart 请求是否存在异常。这是防范文件上传绕过攻击的重要检查点。\n\n**示例:**\n\n\n```apache\n# 拒绝存在 multipart 解析错误的请求\nSecRule MULTIPART_STRICT_ERROR \"!@eq 0\" \\\n    \"id:1042,phase:2,deny,status:403,msg:'Multipart 请求解析异常'\"\n```",
        slug: "multipart_strict_error"
    },
    "MULTIPART_UNMATCHED_BOUNDARY": {
        en: "**Description:** Multipart unmatched boundary flag\n\n**Syntax:** `MULTIPART_UNMATCHED_BOUNDARY`\n\nMULTIPART_UNMATCHED_BOUNDARY is set to 1 when unmatched boundary markers appear in the multipart request body. Unmatched boundaries usually indicate the request has been tampered with or constructed abnormally, possibly an attacker attempting to bypass upload file detection.\n\n**Example:**\n\n```apache\n# Reject multipart requests with unmatched boundaries\nSecRule MULTIPART_UNMATCHED_BOUNDARY \"!@eq 0\" \\\n    \"id:1043,phase:2,deny,status:403,msg:'Multipart boundary mismatch'\"\n```",
        zh: "**描述:** Multipart 不匹配的边界\n\n**语法:** `MULTIPART_UNMATCHED_BOUNDARY`\n\nMULTIPART_UNMATCHED_BOUNDARY 当 multipart 请求体中出现未匹配的边界标记时设置为 1。不匹配的边界通常表明请求被篡改或构造异常，可能是攻击者尝试绕过上传文件检测的手段。\n\n**示例:**\n\n```apache\n# 拒绝包含不匹配边界的 multipart 请求\nSecRule MULTIPART_UNMATCHED_BOUNDARY \"!@eq 0\" \\\n    \"id:1043,phase:2,deny,status:403,msg:'Multipart 边界不匹配'\"\n```",
        slug: "multipart_unmatched_boundary"
    },
    "OUTBOUND_DATA_ERROR": {
        en: "**Description:** Response body length limit exceeded error\n\n**Syntax:** `OUTBOUND_DATA_ERROR`\n\nWhen the response body size exceeds the value configured by the `SecResponseBodyLimit` directive, this variable is set to `1`.\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule OUTBOUND_DATA_ERROR \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 响应体长度超限错误\n\n**语法:** `OUTBOUND_DATA_ERROR`\n\n当响应体大小高于SecResponseBodyLimit指令配置的设置时，此变量将被设置为1。\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule OUTBOUND_DATA_ERROR \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "outbound_data_error"
    },
    "PATH_INFO": {
        en: "**Description:** Path information\n\n**Syntax:** `PATH_INFO`\n\nPATH_INFO contains additional path information after the file path in the URL and before the query string. For example, for /cgi-bin/script.py/extra/path, PATH_INFO's value is /extra/path. In RESTful APIs, this variable may contain routing parameters.\n\n**Note:** This variable is automatically URL-decoded once.\n\n**Example:**\n\n```apache\n# Detect directory traversal in PATH_INFO\nSecRule PATH_INFO \"@contains ..\" \\\n    \"id:1040,phase:1,deny,msg:'Directory traversal detected in PATH_INFO'\"\n```",
        zh: "**描述:** 路径信息\n\n**语法:** `PATH_INFO`\n\nPATH_INFO 包含 URL 中文件路径之后、查询字符串之前的附加路径信息。例如，对于 /cgi-bin/script.py/extra/path，PATH_INFO 的值为 /extra/path。在 RESTful API 中，此变量可能包含路由参数。\n\n**注意：** 此变量会自动进行一次url解码。\n\n**示例:**\n\n```apache\n# 检测 PATH_INFO 中的目录遍历\nSecRule PATH_INFO \"@contains ..\" \\\n    \"id:1040,phase:1,deny,msg:'PATH_INFO 检测到目录遍历'\"\n```",
        slug: "path_info"
    },
    "QUERY_STRING": {
        en: "**Description:** Query string\n\n**Syntax:** `QUERY_STRING`\n\nQUERY_STRING contains the query string portion of the URL after the question mark (?), excluding the question mark itself. This is the original query string, not parsed into individual parameters. Used to detect abnormal patterns in the overall query string.\n\n**Example:**\n\n```apache\n# Detect SQL injection in query string\nSecRule QUERY_STRING \"@detectSQLi\" \\\n    \"id:1032,phase:1,deny,msg:'SQL injection detected in query string'\"\n\n# Limit query string length\nSecRule QUERY_STRING \"@gt 2048\" \"t:length,id:1033,phase:1,deny,msg:'Query string too long'\"\n```",
        zh: "**描述:** 查询字符串\n\n**语法:** `QUERY_STRING`\n\nQUERY_STRING 包含 URL 中问号 (?) 后面的查询字符串部分，不包括问号本身。这是原始的查询字符串，未经解析为单独的参数。可用于检测整体查询字符串的异常模式。\n\n**示例:**\n\n```apache\n# 检测查询字符串中的 SQL 注入\nSecRule QUERY_STRING \"@detectSQLi\" \\\n    \"id:1032,phase:1,deny,msg:'查询字符串检测到 SQL 注入'\"\n\n# 限制查询字符串长度\nSecRule QUERY_STRING \"@gt 2048\" \"t:length,id:1033,phase:1,deny,msg:'查询字符串过长'\"\n```",
        slug: "query_string"
    },
    "REMOTE_ADDR": {
        en: "**Description:** Remote client IP address\n\n**Syntax:** `REMOTE_ADDR`\n\nREMOTE_ADDR contains the IP address of the client making the request. This is one of the most commonly used variables for implementing IP blacklists/whitelists, rate limiting, and other security policies. Often used with the @ipMatch operator to match IP addresses or CIDR ranges.\n\n**Example:**\n\n```apache\n# IP whitelist - skip checks for internal IPs\nSecRule REMOTE_ADDR \"@ipMatch 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16\" \\\n    \"id:1038,phase:1,pass,nolog,allow\"\n\n# IP blacklist - block specific IPs\nSecRule REMOTE_ADDR \"@ipMatch 1.2.3.4,5.6.7.8\" \\\n    \"id:1039,phase:1,deny,status:403,msg:'IP has been banned'\"\n```",
        zh: "**描述:** 客户端 IP 地址\n\n**语法:** `REMOTE_ADDR`\n\nREMOTE_ADDR 包含发起请求的客户端 IP 地址。这是最常用的变量之一，用于实现 IP 黑白名单、访问频率控制等安全策略。常与 @ipMatch 操作符配合使用来匹配 IP 地址或 CIDR 网段。\n\n**示例:**\n\n```apache\n# IP 白名单 - 跳过内网 IP 的检查\nSecRule REMOTE_ADDR \"@ipMatch 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16\" \\\n    \"id:1038,phase:1,pass,nolog,allow\"\n\n# IP 黑名单 - 阻止特定 IP\nSecRule REMOTE_ADDR \"@ipMatch 1.2.3.4,5.6.7.8\" \\\n    \"id:1039,phase:1,deny,status:403,msg:'IP 已被封禁'\"\n```",
        slug: "remote_addr"
    },
    "REMOTE_HOST": {
        en: "**Description:** Client hostname\n\n**Syntax:** `REMOTE_HOST`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule REMOTE_HOST \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 客户端主机名\n\n**语法:** `REMOTE_HOST`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule REMOTE_HOST \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "remote_host"
    },
    "REMOTE_PORT": {
        en: "**Description:** Client port\n\n**Syntax:** `REMOTE_PORT`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule REMOTE_PORT \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 客户端端口\n\n**语法:** `REMOTE_PORT`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule REMOTE_PORT \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "remote_port"
    },
    "REMOTE_USER": {
        en: "**Description:** Authenticated username\n\n**Syntax:** `REMOTE_USER`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule REMOTE_USER \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 认证用户名\n\n**语法:** `REMOTE_USER`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule REMOTE_USER \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "remote_user"
    },
    "REQBODY_ERROR": {
        en: "**Description:** Request body error flag\n\n**Syntax:** `REQBODY_ERROR`\n\nREQBODY_ERROR is set to 1 when errors occur during request body parsing. For example, when JSON format is invalid, XML format is incorrect, or multipart data is abnormal, this variable will be set. Used to detect and block requests with invalid request bodies in phase:2.\n\n**Note:** This variable is not currently assigned and remains at the default value `0`.\n\n**Example:**\n\n```apache\n# Reject requests with failed body parsing\nSecRule REQBODY_ERROR \"!@eq 0\" \\\n    \"id:1044,phase:2,deny,status:400,msg:'Request body parsing failed: %{REQBODY_ERROR_MSG}'\"\n```",
        zh: "**描述:** 请求体错误标志\n\n**语法:** `REQBODY_ERROR`\n\nREQBODY_ERROR 当请求体解析过程中出现错误时设置为 1。例如，当 JSON 格式无效、XML 格式错误或 multipart 数据异常时，此变量会被设置。可用于在 phase:2 中检测并阻止包含无效请求体的请求。\n\n**注意：** 此变量当前并没有赋值，其是默认值0。\n\n**示例:**\n\n```apache\n# 拒绝请求体解析失败的请求\nSecRule REQBODY_ERROR \"!@eq 0\" \\\n    \"id:1044,phase:2,deny,status:400,msg:'请求体解析失败: %{REQBODY_ERROR_MSG}'\"\n```",
        slug: "reqbody_error"
    },
    "REQBODY_ERROR_MSG": {
        en: "**Description:** Request body error message\n\n**Syntax:** `REQBODY_ERROR_MSG`\n\nREQBODY_ERROR_MSG contains the error description when request body parsing fails. Typically used together with REQBODY_ERROR to log the specific error reason for debugging and analysis. Can be referenced in the msg action via %{REQBODY_ERROR_MSG}.\n\n**Note:** This variable is not currently assigned, so its default value remains empty.\n\n**Example:**\n\n```apache\n# Log detailed request body parsing error information\nSecRule REQBODY_ERROR \"!@eq 0\" \\\n    \"id:1045,phase:2,pass,log,msg:'Request body error: %{REQBODY_ERROR_MSG}'\"\n```",
        zh: "**描述:** 请求体错误消息\n\n**语法:** `REQBODY_ERROR_MSG`\n\nREQBODY_ERROR_MSG 包含请求体解析失败时的错误描述信息。通常与 REQBODY_ERROR 配合使用，在日志中记录具体的错误原因，便于调试和分析。可通过 %{REQBODY_ERROR_MSG} 在 msg 动作中引用。\n\n**注意：** 此变量当前并没有赋值，所以其是默认的空值。\n\n**示例:**\n\n```apache\n# 记录请求体解析错误的详细信息\nSecRule REQBODY_ERROR \"!@eq 0\" \\\n    \"id:1045,phase:2,pass,log,msg:'请求体错误: %{REQBODY_ERROR_MSG}'\"\n```",
        slug: "reqbody_error_msg"
    },
    "REQBODY_PROCESSOR": {
        en: "**Description:** Request body processor type\n\n**Syntax:** `REQBODY_PROCESSOR`\n\nREQBODY_PROCESSOR contains the name of the request body processor used for the current request, such as URLENCODED, MULTIPART, JSON, or XML.\nWhen the `Content-Type` request header is `application/x-www-form-urlencoded` or `multipart/form-data`, WGE automatically sets this variable to `URLENCODED` or `MULTIPART` respectively. Users can also manually specify processors such as `JSON` via the `ctl:requestBodyProcessor` action.\n\n**Example:**\n\n```apache\n# Configure different request body processors based on Content-Type\nSecRule REQUEST_HEADERS:Content-Type \"^(?:application(?:/soap\\\\+|/)|text/)xml\" \\\n     \"id:'200000',phase:1,t:none,t:lowercase,pass,nolog,ctl:requestBodyProcessor=XML\"\n\nSecRule REQUEST_HEADERS:Content-Type \"^application/json\" \\\n     \"id:'200001',phase:1,t:none,t:lowercase,pass,nolog,ctl:requestBodyProcessor=JSON\"\n```",
        zh: "**描述:** 请求体处理器类型\n\n**语法:** `REQBODY_PROCESSOR`\n\nREQBODY_PROCESSOR 包含当前请求使用的请求体处理器名称，如 URLENCODED、MULTIPART、JSON 或 XML。\n当请求头中的 Content-Type 为`application/x-www-form-urlencoded`或者`multipart/form-data`时，WGE 会自动设置该变量为对应的URLENCODED或者MULTIPART，使用者也可通过 ctl:requestBodyProcessor 动作手动指定为JSON等。\n\n**示例:**\n\n```apache\n# 根据处理器类型执行不同检查\nSecRule REQUEST_HEADERS:Content-Type \"^(?:application(?:/soap\\+|/)|text/)xml\" \\\n     \"id:'200000',phase:1,t:none,t:lowercase,pass,nolog,ctl:requestBodyProcessor=XML\"\n\nSecRule REQUEST_HEADERS:Content-Type \"^application/json\" \\\n     \"id:'200001',phase:1,t:none,t:lowercase,pass,nolog,ctl:requestBodyProcessor=JSON\"\n```",
        slug: "reqbody_processor"
    },
    "REQBODY_PROCESSOR_ERROR": {
        en: "**Description:** Request body processor error\n\n**Syntax:** `REQBODY_PROCESSOR_ERROR`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule REQBODY_PROCESSOR_ERROR \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 请求体处理器错误\n\n**语法:** `REQBODY_PROCESSOR_ERROR`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule REQBODY_PROCESSOR_ERROR \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "reqbody_processor_error"
    },
    "REQUEST_BASENAME": {
        en: "**Description:** Request file basename\n\n**Syntax:** `REQUEST_BASENAME`\n\nREQUEST_BASENAME contains only the filename portion of the request path, excluding the directory path. For example, for /path/to/file.php, this variable's value is file.php. Used to detect specific filenames or file extensions.\n\n**Note:** This variable is automatically URL-decoded once.\n\n**Example:**\n\n```apache\n# Block access to backup files\nSecRule REQUEST_BASENAME \"@rx \\.(bak|backup|old|orig)$\" \\\n    \"id:1026,phase:1,deny,msg:'Access to backup file forbidden'\"\n\n# Block execution of shell scripts\nSecRule REQUEST_BASENAME \"@endsWith .sh\" \\\n    \"id:1027,phase:1,deny,msg:'Shell script execution forbidden'\"\n```",
        zh: "**描述:** 请求文件的基础名称\n\n\n**语法:** `REQUEST_BASENAME`\n\n\nREQUEST_BASENAME 仅包含请求路径中的文件名部分，不包括目录路径。例如，对于 /path/to/file.php，此变量的值为 file.php。用于检测特定文件名或文件扩展名。\n\n**注意：** 此变量会自动进行一次url解码。\n\n**示例:**\n\n```apache\n# 阻止访问备份文件\nSecRule REQUEST_BASENAME \"@rx \\.(bak|backup|old|orig)$\" \\\n    \"id:1026,phase:1,deny,msg:'禁止访问备份文件'\"\n\n# 阻止执行 shell 脚本\nSecRule REQUEST_BASENAME \"@endsWith .sh\" \\\n    \"id:1027,phase:1,deny,msg:'禁止执行 shell 脚本'\"\n```",
        slug: "request_basename"
    },
    "REQUEST_BODY": {
        en: "**Description:** Request body content\n\n**Syntax:** `REQUEST_BODY`\n\nREQUEST_BODY contains the raw request body data. Unlike ARGS_POST, REQUEST_BODY is unparsed raw data. When the request body processor cannot parse the content (such as unknown Content-Type), this variable can be used to inspect the raw data. SecRequestBodyAccess must be enabled to access this variable.\n\n**Example:**\n\n```apache\n# Check for malicious patterns in the raw request body\nSecRule REQUEST_BODY \"@rx <script\" \\\n    \"id:1016,phase:2,deny,msg:'Script tag detected in request body'\"\n```",
        zh: "**描述:** 请求体内容\n\n**语法:** `REQUEST_BODY`\n\nREQUEST_BODY 包含原始的请求体数据。与 ARGS_POST 不同，REQUEST_BODY 是未解析的原始数据。当请求体处理器无法解析内容时（如未知的 Content-Type），可以使用此变量检查原始数据。需要启用 SecRequestBodyAccess 才能访问此变量。\n\n**示例:**\n\n```apache\n# 检查原始请求体中的恶意模式\nSecRule REQUEST_BODY \"@rx\n```",
        slug: "request_body"
    },
    "REQUEST_BODY_LENGTH": {
        en: "**Description:** Request body length\n\n**Syntax:** `REQUEST_BODY_LENGTH`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule REQUEST_BODY_LENGTH \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 请求体长度\n\n**语法:** `REQUEST_BODY_LENGTH`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule REQUEST_BODY_LENGTH \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "request_body_length"
    },
    "REQUEST_COOKIES": {
        en: "**Description:** Request Cookie values\n\n**Syntax:** `REQUEST_COOKIES | REQUEST_COOKIES:CookieName`\n\nREQUEST_COOKIES contains the values of all cookies in the request. Specific cookies can be accessed with `REQUEST_COOKIES:name`. Cookies are common attack vectors where attackers may inject malicious code or attempt session hijacking.\n\n**Example:**\n\n```apache\n# Check all cookies for SQL injection\nSecRule REQUEST_COOKIES \"@detectSQLi\" \\\n    \"id:1013,phase:1,deny,msg:'SQL injection detected in cookie'\"\n\n# Validate session cookie format\nSecRule REQUEST_COOKIES:SESSIONID \"!@rx ^[a-zA-Z0-9]{32}$\" \\\n    \"id:1014,phase:1,deny,msg:'Invalid session cookie format'\"\n```",
        zh: "**描述:** 请求 Cookie\n\n**语法:** `REQUEST_COOKIES | REQUEST_COOKIES:CookieName`\n\nREQUEST_COOKIES 包含请求中所有 Cookie 的值。可以使用 REQUEST_COOKIES:name 访问特定 Cookie。Cookie 是常见的攻击载体，攻击者可能在 Cookie 中注入恶意代码或尝试会话劫持。\n\n**示例:**\n\n```apache\n# 检查所有 Cookie 中的 SQL 注入\nSecRule REQUEST_COOKIES \"@detectSQLi\" \\\n    \"id:1013,phase:1,deny,msg:'Cookie 检测到 SQL 注入'\"\n\n# 验证会话 Cookie 格式\nSecRule REQUEST_COOKIES:SESSIONID \"!@rx ^[a-zA-Z0-9]{32}$\" \\\n    \"id:1014,phase:1,deny,msg:'无效的会话 Cookie 格式'\"\n```",
        slug: "request_cookies"
    },
    "REQUEST_COOKIES_NAMES": {
        en: "**Description:** Request Cookie names\n\n**Syntax:** `REQUEST_COOKIES_NAMES`\n\nREQUEST_COOKIES_NAMES contains the names of all cookies. Used to detect whether cookie names contain abnormal characters or attack payloads.\n\n**Example:**\n\n```apache\n# Detect abnormal characters in cookie names\nSecRule REQUEST_COOKIES_NAMES \"@rx [<>'\\\";()]\" \\\n    \"id:1015,phase:1,deny,msg:'Cookie name contains illegal characters'\"\n```",
        zh: "**描述:** Cookie 名称\n\n**语法:** `REQUEST_COOKIES_NAMES`\n\nREQUEST_COOKIES_NAMES 包含所有 Cookie 的名称。可用于检测 Cookie 名称是否包含异常字符或攻击载荷。\n\n**示例:**\n\n```apache\n# 检测 Cookie 名称中的异常字符\nSecRule REQUEST_COOKIES_NAMES \"@rx [<>'\\\";()]\" \\\n    \"id:1015,phase:1,deny,msg:'Cookie 名称包含非法字符'\"\n```",
        slug: "request_cookies_names"
    },
    "REQUEST_FILENAME": {
        en: "**Description:** Requested file path\n\n**Syntax:** `REQUEST_FILENAME`\n\nREQUEST_FILENAME contains the file path portion of the request URI, excluding the query string. This is a normalized path extracted from the URI, used to detect access to specific files or directories.\n\n**Note:** This variable is automatically URL-decoded once.\n\n**Example:**\n\n```apache\n# Block access to admin directory\nSecRule REQUEST_FILENAME \"@beginsWith /admin\" \\\n    \"id:1024,phase:1,deny,msg:'Access to admin directory forbidden'\"\n\n# Block access to PHP configuration files\nSecRule REQUEST_FILENAME \"@endsWith .htaccess\" \\\n    \"id:1025,phase:1,deny,msg:'Access to .htaccess forbidden'\"\n```",
        zh: "**描述:** 请求的文件路径\n\n**语法:** `REQUEST_FILENAME`\n\nREQUEST_FILENAME 包含请求 URI 中的文件路径部分，不包括查询字符串。这是从 URI 中提取的规范化路径，可用于检测对特定文件或目录的访问。\n\n**注意：** 此变量会自动进行一次url解码。\n\n**示例:**\n\n```apache\n# 阻止访问管理目录\nSecRule REQUEST_FILENAME \"@beginsWith /admin\" \\\n    \"id:1024,phase:1,deny,msg:'禁止访问管理目录'\"\n\n# 阻止访问 PHP 配置文件\nSecRule REQUEST_FILENAME \"@endsWith .htaccess\" \\\n    \"id:1025,phase:1,deny,msg:'禁止访问 .htaccess'\"\n```",
        slug: "request_filename"
    },
    "REQUEST_HEADERS": {
        en: "**Description:** HTTP request headers\n\n**Syntax:** `REQUEST_HEADERS | REQUEST_HEADERS:HeaderName`\n\nREQUEST_HEADERS contains all HTTP request headers. Specific headers can be accessed using REQUEST_HEADERS:HeaderName, such as User-Agent, Host, Content-Type, etc. Request headers are common injection points for attackers, so key headers should be inspected.\n\n**Example:**\n\n```apache\n# Check for malicious patterns in User-Agent\nSecRule REQUEST_HEADERS:User-Agent \"@pm nikto sqlmap nmap\" \\\n    \"id:1009,phase:1,deny,msg:'Scanning tool User-Agent detected'\"\n\n# Validate Host header format\nSecRule REQUEST_HEADERS:Host \"!@rx ^[a-zA-Z0-9\\.\\-]+$\" \\\n    \"id:1010,phase:1,deny,msg:'Invalid Host header'\"\n\n# Check for XSS in Referer header\nSecRule REQUEST_HEADERS:Referer \"@detectXSS\" \\\n    \"id:1011,phase:1,deny,msg:'XSS detected in Referer header'\"\n```",
        zh: "**描述:** 请求头\n\n**语法:** `REQUEST_HEADERS | REQUEST_HEADERS:HeaderName`\n\nREQUEST_HEADERS 包含所有 HTTP 请求头。可以使用 REQUEST_HEADERS:HeaderName 访问特定头部，如 User-Agent、Host、Content-Type 等。请求头是攻击者常用的注入点，应对关键头部进行检测。\n\n**示例:**\n\n```apache\n# 检查 User-Agent 中的恶意模式\nSecRule REQUEST_HEADERS:User-Agent \"@pm nikto sqlmap nmap\" \\\n    \"id:1009,phase:1,deny,msg:'检测到扫描工具 User-Agent'\"\n\n# 验证 Host 头格式\nSecRule REQUEST_HEADERS:Host \"!@rx ^[a-zA-Z0-9\\.\\-]+$\" \\\n    \"id:1010,phase:1,deny,msg:'无效的 Host 头'\"\n\n# 检查 Referer 头中的 XSS\nSecRule REQUEST_HEADERS:Referer \"@detectXSS\" \\\n    \"id:1011,phase:1,deny,msg:'Referer 头检测到 XSS'\"\n```",
        slug: "request_headers"
    },
    "REQUEST_HEADERS_NAMES": {
        en: "**Description:** HTTP request header names\n\n**Syntax:** `REQUEST_HEADERS_NAMES`\n\nREQUEST_HEADERS_NAMES contains the names of all request headers (excluding values). Used to detect abnormal custom headers or whether header names themselves contain attack payloads.\n\n**Example:**\n\n```apache\n# Detect abnormal characters in header names\nSecRule REQUEST_HEADERS_NAMES \"@rx [<>'\\\"]\" \\\n    \"id:1012,phase:1,deny,msg:'Request header name contains illegal characters'\"\n```",
        zh: "**描述:** 请求头名称\n\n**语法:** `REQUEST_HEADERS_NAMES`\n\nREQUEST_HEADERS_NAMES 包含所有请求头的名称（不包括值）。可用于检测是否存在异常的自定义头部，或检测头部名称本身是否包含攻击载荷。\n\n**示例:**\n\n```apache\n# 检测头部名称中的异常字符\nSecRule REQUEST_HEADERS_NAMES \"@rx [<>'\\\"]\" \\\n    \"id:1012,phase:1,deny,msg:'请求头名称包含非法字符'\"\n```",
        slug: "request_headers_names"
    },
    "REQUEST_LINE": {
        en: "**Description:** Full request line\n\n**Syntax:** `REQUEST_LINE`\n\nREQUEST_LINE contains the complete HTTP request line in the format \"METHOD URI PROTOCOL\", for example \"GET /index.html HTTP/1.1\". Used for comprehensive inspection of abnormal content in the request line.\n\n**Example:**\n\n```apache\n# Detect control characters in request line\nSecRule REQUEST_LINE \"@rx [\\x00-\\x08\\x0b\\x0c\\x0e-\\x1f]\" \\\n    \"id:1030,phase:1,deny,msg:'Request line contains control characters'\"\n\n# Detect excessively long request line\nSecRule REQUEST_LINE \"@gt 8192\" \"t:length,id:1031,phase:1,deny,msg:'Request line too long'\"\n```",
        zh: "**描述:** 完整的请求行\n\n**语法:** `REQUEST_LINE`\n\nREQUEST_LINE 包含完整的 HTTP 请求行，格式为 \"METHOD URI PROTOCOL\"，例如 \"GET /index.html HTTP/1.1\"。可用于全面检查请求行中的异常内容。\n\n**示例:**\n\n```apache\n# 检测请求行中的控制字符\nSecRule REQUEST_LINE \"@rx [\\x00-\\x08\\x0b\\x0c\\x0e-\\x1f]\" \\\n    \"id:1030,phase:1,deny,msg:'请求行包含控制字符'\"\n\n# 检测超长请求行\nSecRule REQUEST_LINE \"@gt 8192\" \"t:length,id:1031,phase:1,deny,msg:'请求行过长'\"\n```",
        slug: "request_line"
    },
    "REQUEST_METHOD": {
        en: "**Description:** HTTP request method\n\n**Syntax:** `REQUEST_METHOD`\n\nREQUEST_METHOD contains the HTTP request method, such as GET, POST, PUT, DELETE, HEAD, OPTIONS, etc. Used to restrict allowed request methods for specific endpoints or detect abnormal HTTP methods.\n\n**Example:**\n\n```apache\n# Allow only GET and POST methods\nSecRule REQUEST_METHOD \"!@pm GET POST HEAD\" \\\n    \"id:1018,phase:1,deny,msg:'HTTP method not allowed'\"\n\n# Block TRACE method (prevent XST attacks)\nSecRule REQUEST_METHOD \"@streq TRACE\" \\\n    \"id:1019,phase:1,deny,msg:'TRACE method is forbidden'\"\n```",
        zh: "**描述:** 请求方法 (GET, POST 等)\n\n**语法:** `REQUEST_METHOD`\n\nREQUEST_METHOD 包含 HTTP 请求方法，如 GET、POST、PUT、DELETE、HEAD、OPTIONS 等。可用于限制特定端点允许的请求方法，或检测异常的 HTTP 方法。\n\n**示例:**\n\n```apache\n# 仅允许 GET 和 POST 方法\nSecRule REQUEST_METHOD \"!@pm GET POST HEAD\" \\\n    \"id:1018,phase:1,deny,msg:'不允许的 HTTP 方法'\"\n\n# 阻止 TRACE 方法（防止 XST 攻击）\nSecRule REQUEST_METHOD \"@streq TRACE\" \\\n    \"id:1019,phase:1,deny,msg:'TRACE 方法被禁止'\"\n```",
        slug: "request_method"
    },
    "REQUEST_PROTOCOL": {
        en: "**Description:** HTTP request protocol\n\n**Syntax:** `REQUEST_PROTOCOL`\n\nREQUEST_PROTOCOL contains the HTTP protocol version used in the request, such as HTTP/1.0, HTTP/1.1, or HTTP/2.0. Used to detect protocol violations or enforce specific protocol versions.\n\n**Example:**\n\n```apache\n# Reject HTTP/1.0 requests\nSecRule REQUEST_PROTOCOL \"@streq HTTP/1.0\" \\\n    \"id:1028,phase:1,deny,msg:'HTTP/1.0 not supported'\"\n\n# Detect abnormal protocol\nSecRule REQUEST_PROTOCOL \"!@rx ^HTTP/[12]\\.[0-9]$\" \\\n    \"id:1029,phase:1,deny,msg:'Invalid HTTP protocol'\"\n```",
        zh: "**描述:** 请求协议 (HTTP/1.1 等)\n\n**语法:** `REQUEST_PROTOCOL`\n\nREQUEST_PROTOCOL 包含请求使用的 HTTP 协议版本，如 HTTP/1.0、HTTP/1.1 或 HTTP/2.0。可用于检测协议违规或强制使用特定协议版本。\n\n\n**示例:**\n\n```apache\n# 拒绝 HTTP/1.0 请求\nSecRule REQUEST_PROTOCOL \"@streq HTTP/1.0\" \\\n    \"id:1028,phase:1,deny,msg:'不支持 HTTP/1.0'\"\n\n# 检测异常协议\nSecRule REQUEST_PROTOCOL \"!@rx ^HTTP/[12]\\.[0-9]$\" \\\n    \"id:1029,phase:1,deny,msg:'无效的 HTTP 协议'\"\n```",
        slug: "request_protocol"
    },
    "REQUEST_URI": {
        en: "**Description:** Request URI (decoded)\n\n**Syntax:** `REQUEST_URI`\n\nREQUEST_URI contains the complete request URI, including the query string portion, and is URL-decoded. This is the primary variable for detecting attack payloads in URLs. Unlike REQUEST_URI_RAW, the content of this variable is already **decoded**, making it easier to match attack patterns directly.\n\n**Example:**\n\n```apache\n# Detect directory traversal attacks in URL\nSecRule REQUEST_URI \"@rx \\.\\.\" \\\n    \"id:1020,phase:1,deny,msg:'Directory traversal attack detected'\"\n\n# Block access to sensitive files\nSecRule REQUEST_URI \"@rx \\.(conf|ini|log|bak)$\" \\\n    \"id:1021,phase:1,deny,msg:'Attempt to access sensitive file'\"\n```",
        zh: "**描述:** 请求 URI (已解码)\n\n**语法:** `REQUEST_URI`\n\nREQUEST_URI 包含完整的请求 URI，包括查询字符串部分，且已经过 URL 解码。这是检测 URL 中攻击载荷的主要变量。与 REQUEST_URI_RAW 不同，此变量的内容已**解码**，便于直接匹配攻击模式。\n\n**示例:**\n\n```apache\n# 检测 URL 中的目录遍历攻击\nSecRule REQUEST_URI \"@rx \\.\\.\" \\\n    \"id:1020,phase:1,deny,msg:'检测到目录遍历攻击'\"\n\n# 阻止访问敏感文件\nSecRule REQUEST_URI \"@rx \\.(conf|ini|log|bak)$\" \\\n    \"id:1021,phase:1,deny,msg:'尝试访问敏感文件'\"\n```",
        slug: "request_uri"
    },
    "REQUEST_URI_RAW": {
        en: "**Description:** Raw request URI\n\n**Syntax:** `REQUEST_URI_RAW`\n\nREQUEST_URI_RAW contains the original, non-URL-decoded request URI. Used to detect encoding bypass attacks where attackers may use multiple encoding or abnormal encoding to bypass WAF detection. It is recommended to check both REQUEST_URI and REQUEST_URI_RAW for more comprehensive protection.\n\n**Example:**\n\n```apache\n# Detect double encoding attacks in URL\nSecRule REQUEST_URI_RAW \"@rx %25\" \\\n    \"id:1022,phase:1,deny,msg:'Double encoding detected'\"\n\n# Detect NULL byte injection\nSecRule REQUEST_URI_RAW \"@rx %00\" \\\n    \"id:1023,phase:1,deny,msg:'NULL byte injection detected'\"\n```",
        zh: "**描述:** 原始请求 URI (未解码)\n\n**语法:** `REQUEST_URI_RAW`\n\nREQUEST_URI_RAW 包含原始的、未经 URL 解码的请求 URI。用于检测编码绕过攻击，攻击者可能使用多重编码或异常编码来绕过 WAF 检测。建议同时检查 REQUEST_URI 和 REQUEST_URI_RAW 以获得更全面的保护。\n\n**示例:**\n\n```apache\n# 检测 URL 中的双重编码攻击\nSecRule REQUEST_URI_RAW \"@rx %25\" \\\n    \"id:1022,phase:1,deny,msg:'检测到双重编码'\"\n\n# 检测 NULL 字节注入\nSecRule REQUEST_URI_RAW \"@rx %00\" \\\n    \"id:1023,phase:1,deny,msg:'检测到 NULL 字节注入'\"\n```",
        slug: "request_uri_raw"
    },
    "RESOURCE": {
        en: "**Description:** Resource variable collection\n\n**Syntax:** `RESOURCE:key`\n\nThe RESOURCE collection is used to store persistent data associated with specific resources (such as URL paths). Can be used to track access patterns for specific resources, such as the call frequency of a particular API endpoint.\n\nThis variable is not recommended at the moment because its parsing and assignment behavior still has some issues.\n\n**Example:**\n\n```apache\n# Initialize resource collection\nSecAction \"id:1062,phase:1,pass,nolog,initcol:RESOURCE=%{REQUEST_FILENAME}\"\n```",
        zh: "**描述:** 资源变量集合\n\n**语法:** `RESOURCE:key`\n\nRESOURCE 集合用于存储与特定资源（如 URL 路径）关联的持久化数据。可用于跟踪对特定资源的访问模式，如特定 API 端点的调用频率。\n\n此变量不建议使用，目前其解析和赋值等功能存在一些问题。\n\n**示例:**\n\n```apache\n# 初始化资源集合\nSecAction \"id:1062,phase:1,pass,nolog,initcol:RESOURCE=%{REQUEST_FILENAME}\"\n```",
        slug: "resource"
    },
    "RESPONSE_BODY": {
        en: "**Description:** HTTP response body\n\n**Syntax:** `RESPONSE_BODY`\n\nRESPONSE_BODY contains the server's response body content. SecResponseBodyAccess must be enabled to access this variable. Used to detect sensitive information leakage, malicious content, or abnormal patterns in responses. Use in phase:4 (response body phase).\n\n**Example:**\n\n```apache\n# Detect credit card number leakage in response\nSecRule RESPONSE_BODY \"@rx \\b(?:\\d{4}[-\\s]?){3}\\d{4}\\b\" \\\n    \"id:1034,phase:4,deny,msg:'Credit card number leakage detected'\"\n\n# Detect SQL error message leakage\nSecRule RESPONSE_BODY \"@pm mysql_error ora-00 sql syntax error\" \\\n    \"id:1035,phase:4,deny,msg:'Database error message leakage detected'\"\n```",
        zh: "**描述:** 响应体内容\n\n**语法:** `RESPONSE_BODY`\n\nRESPONSE_BODY 包含服务器返回的响应体内容。需要启用 SecResponseBodyAccess 才能访问此变量。可用于检测响应中的敏感信息泄露、恶意内容或异常模式。在 phase:4 (响应体阶段) 中使用。\n\n**示例:**\n\n```apache\n# 检测响应中的信用卡号泄露\nSecRule RESPONSE_BODY \"@rx \\b(?:\\d{4}[-\\s]?){3}\\d{4}\\b\" \\\n    \"id:1034,phase:4,deny,msg:'检测到信用卡号泄露'\"\n\n# 检测 SQL 错误信息泄露\nSecRule RESPONSE_BODY \"@pm mysql_error ora-00 sql syntax error\" \\\n    \"id:1035,phase:4,deny,msg:'检测到数据库错误信息泄露'\"\n```",
        slug: "response_body"
    },
    "RESPONSE_CONTENT_LENGTH": {
        en: "**Description:** Response content length\n\n**Syntax:** `RESPONSE_CONTENT_LENGTH`\n\nThis variable returns the `content-length` response header and is equivalent to `RESPONSE_HEADERS:content-length`.\n\n**Example:**\n\n```apache\nSecRule RESPONSE_CONTENT_LENGTH \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 响应内容长度\n\n**语法:** `RESPONSE_CONTENT_LENGTH`\n\n此变量会返回响应头中的content-length，其等价于变量`RESPONSE_HEADERS:content-length`。\n\n**示例:**\n\n```apache\nSecRule RESPONSE_CONTENT_LENGTH \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "response_content_length"
    },
    "RESPONSE_CONTENT_TYPE": {
        en: "**Description:** Response content type\n\n**Syntax:** `RESPONSE_CONTENT_TYPE`\n\nThis variable returns the `content-type` response header and is equivalent to `RESPONSE_HEADERS:content-type`.\n\n**Example:**\n\n```apache\nSecRule RESPONSE_CONTENT_TYPE \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 响应内容类型\n\n**语法:** `RESPONSE_CONTENT_TYPE`\n\n此变量会返回响应头中的content-type，其等价于变量`RESPONSE_HEADERS:content-type`。\n\n**示例:**\n\n```apache\nSecRule RESPONSE_CONTENT_TYPE \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "response_content_type"
    },
    "RESPONSE_HEADERS": {
        en: "**Description:** Response headers\n\n**Syntax:** `RESPONSE_HEADERS | RESPONSE_HEADERS:Key`\n\nThis variable references response header values and behaves the same way as request headers in `REQUEST_HEADERS`.\n\n**Example:**\n\n```apache\nSecRule RESPONSE_HEADERS:User-Agent \"@rx box\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 响应头\n\n**语法:** `RESPONSE_HEADERS | RESPONSE_HEADERS:Key`\n\n此变量引用响应头的值，与REQUEST_HEADERS请求头的方式相同。\n\n**示例:**\n\n```apache\nSecRule RESPONSE_HEADERS:User-Agent \"@rx box\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "response_headers"
    },
    "RESPONSE_HEADERS_NAMES": {
        en: "**Description:** Response header names\n\n**Syntax:** `RESPONSE_HEADERS_NAMES | RESPONSE_HEADERS_NAMES:Key`\n\nThis variable references response header names and behaves the same way as request header names in `REQUEST_HEADERS_NAMES`.\n\n**Example:**\n\n```apache\nSecRule RESPONSE_HEADERS_NAMES:User-Agent \"@rx box\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 响应头名称\n\n**语法:** `RESPONSE_HEADERS_NAMES | RESPONSE_HEADERS_NAMES:Key`\n\n此变量引用响应头的名称，与REQUEST_HEADERS_NAMES请求头的方式相同。\n\n**示例:**\n\n```apache\nSecRule RESPONSE_HEADERS_NAMES:User-Agent \"@rx box\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "response_headers_names"
    },
    "RESPONSE_PROTOCOL": {
        en: "**Description:** Response protocol\n\n**Syntax:** `RESPONSE_PROTOCOL`\n\nThis variable contains HTTP response protocol information.\n\n**Example:**\n\n```apache\nSecRule RESPONSE_PROTOCOL \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 响应协议\n\n**语法:** `RESPONSE_PROTOCOL`\n\n此变量包含HTTP响应协议信息\n\n**示例:**\n\n```apache\nSecRule RESPONSE_PROTOCOL \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "response_protocol"
    },
    "RESPONSE_STATUS": {
        en: "**Description:** HTTP response status code\n\n**Syntax:** `RESPONSE_STATUS`\n\nRESPONSE_STATUS contains the HTTP status code returned by the server, such as 200, 404, 500, etc. Used to detect abnormal responses or implement security policies based on status codes. Available in phase:3 (response headers phase) or later.\n\n**Example:**\n\n```apache\n# Log all 5xx errors\nSecRule RESPONSE_STATUS \"@rx ^5\" \\\n    \"id:1036,phase:3,pass,log,msg:'Server error: %{RESPONSE_STATUS}'\"\n\n# Detect information leakage (some applications may include debug info with 500 responses)\nSecRule RESPONSE_STATUS \"@eq 500\" \\\n    \"id:1037,phase:3,pass,log,msg:'Internal server error detected'\"\n```",
        zh: "**描述:** 响应状态码\n\n**语法:** `RESPONSE_STATUS`\n\nRESPONSE_STATUS 包含服务器返回的 HTTP 状态码，如 200、404、500 等。可用于检测异常响应或基于状态码的安全策略。在 phase:3 (响应头阶段) 或之后可用。\n\n**示例:**\n\n```apache\n# 记录所有 5xx 错误\nSecRule RESPONSE_STATUS \"@rx ^5\" \\\n    \"id:1036,phase:3,pass,log,msg:'服务器错误: %{RESPONSE_STATUS}'\"\n\n# 检测信息泄露（某些应用返回 500 可能包含调试信息）\nSecRule RESPONSE_STATUS \"@eq 500\" \\\n    \"id:1037,phase:3,pass,log,msg:'检测到服务器内部错误'\"\n```",
        slug: "response_status"
    },
    "RULE": {
        en: "**Description:** Current rule information\n\n**Syntax:** `RULE`\n\nThe RULE variable provides access to the metadata of the currently executing rule. Specific properties can be accessed via subkeys, such as `RULE.id` (rule ID), `RULE.phase` (the phase where the rule runs), and `RULE.operator_value` (the rule operator's argument). It is mainly used to reference the current rule's own information in logs and dynamic messages.\n\n**Example:**\n\n```apache\n# Reference rule information in logs\nSecRule ARGS \"@detectSQLi\" \\\n    \"id:1047,phase:2,deny,msg:'Rule %{RULE.id} triggered: SQL injection detected',\\\n    severity:CRITICAL,tag:'attack-sqli'\"\n```",
        zh: "**描述:** 当前规则信息\n\n**语法:** `RULE`\n\nRULE 变量提供对当前执行规则元数据的访问。可以通过子键访问具体属性，如 RULE.id（规则ID）、RULE.phase（规则所处阶段）、RULE.operator_value（规则运算符的参数）。主要用于在日志记录和动态消息中引用规则自身的信息。\n\n**示例:**\n\n```apache\n# 在日志中引用规则信息\nSecRule ARGS \"@detectSQLi\" \\\n    \"id:1047,phase:2,deny,msg:'规则 %{RULE.id} 触发: SQL 注入检测',\\\n    severity:CRITICAL,tag:'attack-sqli'\"\n```",
        slug: "rule"
    },
    "SERVER_ADDR": {
        en: "**Description:** Server IP address\n\n**Syntax:** `SERVER_ADDR`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule SERVER_ADDR \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 服务器 IP 地址\n\n**语法:** `SERVER_ADDR`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule SERVER_ADDR \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "server_addr"
    },
    "SERVER_NAME": {
        en: "**Description:** Server name\n\n**Syntax:** `SERVER_NAME`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule SERVER_NAME \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 服务器名称\n\n**语法:** `SERVER_NAME`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule SERVER_NAME \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "server_name"
    },
    "SERVER_PORT": {
        en: "**Description:** Server port\n\n**Syntax:** `SERVER_PORT`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule SERVER_PORT \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 服务器端口\n\n**语法:** `SERVER_PORT`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule SERVER_PORT \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "server_port"
    },
    "SESSION": {
        en: "**Description:** Session variable collection\n\n**Syntax:** `SESSION:key`\n\nThe SESSION collection is used to store persistent data associated with user sessions. You need to first set the session identifier via the setsid action, then initialize via initcol:SESSION=%{SESSIONID}. Can be used to track session-level behavior and implement session-level access control.\n\nThis variable is not recommended at the moment because its parsing and assignment behavior still has some issues.\n\n**Example:**\n\n```apache\n# Set session ID and initialize\nSecRule REQUEST_COOKIES:PHPSESSID \"@rx (.+)\" \\\n    \"id:1060,phase:1,pass,nolog,setsid:%{TX.1},initcol:SESSION=%{SESSIONID}\"\n```",
        zh: "**描述:** 会话变量集合\n\n\n**语法:** `SESSION:key`\n\n\nSESSION 集合用于存储与用户会话关联的持久化数据。需要先通过 setsid 动作设置会话标识符，然后通过 initcol:SESSION=%{SESSIONID} 初始化。可用于跟踪会话级别的行为、实现会话级访问控制等。\n\n此变量不建议使用，目前其解析和赋值等功能存在一些问题。\n\n**示例:**\n\n\n```apache\n# 设置会话 ID 并初始化\nSecRule REQUEST_COOKIES:PHPSESSID \"@rx (.+)\" \\\n    \"id:1060,phase:1,pass,nolog,setsid:%{TX.1},initcol:SESSION=%{SESSIONID}\"\n```",
        slug: "session"
    },
    "SESSIONID": {
        en: "**Description:** Session ID\n\n**Syntax:** `SESSIONID`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule SESSIONID \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 会话 ID\n\n**语法:** `SESSIONID`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule SESSIONID \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "sessionid"
    },
    "STATUS_LINE": {
        en: "**Description:** HTTP status line\n\n**Syntax:** `STATUS_LINE`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule STATUS_LINE \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** HTTP 状态行\n\n**语法:** `STATUS_LINE`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule STATUS_LINE \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "status_line"
    },
    "TIME": {
        en: "**Description:** Current time (HH:MM:SS formatted string)\n\n**Syntax:** `TIME`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule TIME \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 当前时间 (时:分:秒格式字符串)\n\n**语法:** `TIME`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule TIME \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "time"
    },
    "TIME_DAY": {
        en: "**Description:** Day of the month\n\n**Syntax:** `TIME_DAY`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule TIME_DAY \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 日期\n\n**语法:** `TIME_DAY`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule TIME_DAY \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "time_day"
    },
    "TIME_EPOCH": {
        en: "**Description:** Unix timestamp\n\n**Syntax:** `TIME_EPOCH`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule TIME_EPOCH \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** Unix 时间戳\n\n**语法:** `TIME_EPOCH`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule TIME_EPOCH \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "time_epoch"
    },
    "TIME_HOUR": {
        en: "**Description:** Current hour value\n\n**Syntax:** `TIME_HOUR`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule TIME_HOUR \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 当前小时值\n\n**语法:** `TIME_HOUR`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule TIME_HOUR \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "time_hour"
    },
    "TIME_MIN": {
        en: "**Description:** Current minute value\n\n**Syntax:** `TIME_MIN`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule TIME_MIN \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 当前分钟值\n\n**语法:** `TIME_MIN`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule TIME_MIN \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "time_min"
    },
    "TIME_MON": {
        en: "**Description:** Current month value\n\n**Syntax:** `TIME_MON`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule TIME_MON \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 当前月份值\n\n**语法:** `TIME_MON`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule TIME_MON \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "time_mon"
    },
    "TIME_SEC": {
        en: "**Description:** Current second value\n\n**Syntax:** `TIME_SEC`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule TIME_SEC \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 当前秒\n\n**语法:** `TIME_SEC`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule TIME_SEC \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "time_sec"
    },
    "TIME_WDAY": {
        en: "**Description:** Current weekday value\n\n**Syntax:** `TIME_WDAY`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule TIME_WDAY \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 当前工作日值\n\n**语法:** `TIME_WDAY`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule TIME_WDAY \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "time_wday"
    },
    "TIME_YEAR": {
        en: "**Description:** Current year value\n\n**Syntax:** `TIME_YEAR`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule TIME_YEAR \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 当前年份\n\n**语法:** `TIME_YEAR`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule TIME_YEAR \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "time_year"
    },
    "TX": {
        en: "**Description:** Transaction variable collection\n\n**Syntax:** `TX:key`\n\nTX (Transaction) is the most commonly used collection variable, used to store and pass data within a single transaction (request-response cycle). TX variables are automatically destroyed when the transaction ends. Set via the setvar action and accessed via TX:key. TX:0 through TX:9 are special variables that automatically store regex capture group results from the @rx operator. Additionally, TX variables are commonly used to implement anomaly scoring patterns (e.g., tx.anomaly_score).\n\n**Example:**\n\n```apache\n# Set anomaly score\nSecRule ARGS \"@detectSQLi\" \\\n    \"id:1052,phase:2,pass,setvar:tx.anomaly_score=+5,msg:'SQL injection score added'\"\n\n# Block after score accumulates\nSecRule TX:anomaly_score \"@ge 10\" \\\n    \"id:1053,phase:2,deny,msg:'Anomaly score exceeded threshold: %{TX.anomaly_score}'\"\n\n# Using regex capture groups\nSecRule REQUEST_URI \"@rx ^/user/(\\d+)\" \\\n    \"id:1054,phase:1,pass,setvar:tx.user_id=%{TX.1}\"\n```",
        zh: "**描述:** 事务变量集合 (临时变量)\n\n**语法:** `TX:key`\n\nTX (Transaction) 是最常用的集合变量，用于在单个事务（请求-响应周期）内存储和传递数据。TX 变量在事务结束后自动销毁。通过 setvar 动作设置，通过 TX:key 访问。TX:0 到 TX:9 为特殊变量，自动存储 @rx 操作符的正则捕获组结果。此外，TX 变量常用于实现异常评分模式（如 tx.anomaly_score）。\n\n**示例:**\n\n```apache\n# 设置异常评分\nSecRule ARGS \"@detectSQLi\" \\\n    \"id:1052,phase:2,pass,setvar:tx.anomaly_score=+5,msg:'SQL 注入加分'\"\n\n# 在评分累计后进行阻断判断\nSecRule TX:anomaly_score \"@ge 10\" \\\n    \"id:1053,phase:2,deny,msg:'异常评分超过阈值: %{TX.anomaly_score}'\"\n\n# 使用正则捕获组\nSecRule REQUEST_URI \"@rx ^/user/(\\d+)\" \\\n    \"id:1054,phase:1,pass,setvar:tx.user_id=%{TX.1}\"\n```",
        slug: "tx"
    },
    "UNIQUE_ID": {
        en: "**Description:** Unique request ID\n\n**Syntax:** `UNIQUE_ID`\n\nUNIQUE_ID contains a unique identifier generated by WGE for each request. This ID is used in logs to correlate multiple records from the same request, facilitating post-incident analysis and debugging. Can be referenced in the msg action via %{UNIQUE_ID} to track specific requests.\n\n**Example:**\n\n```apache\n# Log the request ID\nSecRule ARGS \"@detectSQLi\" \\\n    \"id:1067,phase:2,deny,msg:'[%{UNIQUE_ID}] SQL injection attack'\"\n```",
        zh: "**描述:** 唯一请求标识符\n\n**语法:** `UNIQUE_ID`\n\nUNIQUE_ID 包含 WGE 为每个请求生成的唯一标识符。此 ID 在日志中用于关联同一请求的多条记录，便于事后分析和调试。可在 msg 动作中引用以便追踪特定请求。\n\n**示例:**\n\n```apache\n# 在日志中记录请求 ID\nSecRule ARGS \"@detectSQLi\" \\\n    \"id:1067,phase:2,deny,msg:'[%{UNIQUE_ID}] SQL 注入攻击'\"\n```",
        slug: "unique_id"
    },
    "URLENCODED_ERROR": {
        en: "**Description:** URL encoding error\n\n**Syntax:** `URLENCODED_ERROR`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule URLENCODED_ERROR \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** URL 编码错误\n\n**语法:** `URLENCODED_ERROR`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule URLENCODED_ERROR \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "urlencoded_error"
    },
    "USER": {
        en: "**Description:** User variable collection\n\n**Syntax:** `USER:key`\n\nThe USER collection is used to store persistent data associated with authenticated users. You need to first set the user identifier via the setuid action and initialize it. Can be used to track specific user behavior patterns and implement user-level access control.\n\nThis variable is not recommended at the moment because its parsing and assignment behavior still has some issues.\n\n**Example:**\n\n```apache\n# Set user ID\nSecRule ARGS_POST:username \"@rx (.+)\" \\\n    \"id:1061,phase:2,pass,nolog,setuid:%{TX.1}\"\n```",
        zh: "**描述:** 用户变量集合\n\n**语法:** `USER:key`\n\nUSER 集合用于存储与认证用户关联的持久化数据。需要先通过 setuid 动作设置用户标识符并初始化。可用于跟踪特定用户的行为模式、实现用户级别的访问控制。\n\n此变量不建议使用，目前其解析和赋值等功能存在一些问题。\n\n**示例:**\n\n```apache\n# 设置用户 ID\nSecRule ARGS_POST:username \"@rx (.+)\" \\\n    \"id:1061,phase:2,pass,nolog,setuid:%{TX.1}\"\n```",
        slug: "user"
    },
    "USERID": {
        en: "**Description:** User ID\n\n**Syntax:** `USERID`\n\nThis variable contains the value set with `setuid`.\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule USERID \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** 用户 ID\n\n**语法:** `USERID`\n\n此变量包含使用setuid设置的值。\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule USERID \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "userid"
    },
    "WEBAPPID": {
        en: "**Description:** Web application ID\n\n**Syntax:** `WEBAPPID`\n\n**Implementation Status:** No\n\nWGE can parse this directive, but the functionality is not implemented yet.\n\n**Example:**\n\n```apache\nSecRule WEBAPPID \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        zh: "**描述:** Web 应用 ID\n\n**语法:** `WEBAPPID`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule WEBAPPID \"@rx value\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "webappid"
    },
    "XML": {
        en: "**Description:** XML request body data\n\n**Syntax:** `XML:/xpath/expression`\n\nThe XML variable is used to access specific nodes in XML request bodies via XPath expressions. The XML parser must first be enabled via ctl:requestBodyProcessor=XML. Supports full XPath syntax, including attribute access, text node extraction, etc.\n\n**Example:**\n\n```apache\n# Enable XML parsing\nSecRule REQUEST_HEADERS:Content-Type \"@contains xml\" \\\n    \"id:1048,phase:1,pass,nolog,ctl:requestBodyProcessor=XML\"\n\n# Check XML nodes using XPath\nSecRule XML:/root/user/name/text() \"@detectSQLi\" \\\n    \"id:1049,phase:2,deny,msg:'SQL injection detected in XML node'\"\n```",
        zh: "**描述:** XML 数据\n\n**语法:** `XML:/xpath/expression`\n\nXML 变量用于通过 XPath 表达式访问 XML 请求体中的特定节点。需要先通过 ctl:requestBodyProcessor=XML 启用 XML 解析器。支持完整的 XPath 语法，包括属性访问、文本节点提取等。\n\n**示例:**\n\n```apache\n# 启用 XML 解析\nSecRule REQUEST_HEADERS:Content-Type \"@contains xml\" \\\n    \"id:1048,phase:1,pass,nolog,ctl:requestBodyProcessor=XML\"\n\n# 使用 XPath 检查 XML 节点\nSecRule XML:/root/user/name/text() \"@detectSQLi\" \\\n    \"id:1049,phase:2,deny,msg:'XML 节点检测到 SQL 注入'\"\n```",
        slug: "xml"
    },
};

// 操作符 - 38 个条目
export const OPERATOR_DOCS: Record<string, DocEntry> = {
    "@beginsWith": {
        en: "**Description:** Begins with the specified string\n\n**Syntax:** `\"@beginsWith string\"`\n\n@beginsWith checks if the variable value begins with the specified string. Matching is case sensitive. Compared to using @rx \"^prefix\" regex, @beginsWith performs better for simple prefix checks as it avoids regex engine overhead. Commonly used for URL path checks, protocol validation, and similar scenarios.\n\n**Example:**\n\n```apache\n# Detect admin panel access\nSecRule REQUEST_URI \"@beginsWith /admin\" \\\n    \"id:1070,phase:1,deny,msg:'Unauthorized access to admin path'\"\n\n# Detect API path and tag\nSecRule REQUEST_URI \"@beginsWith /api/v\" \\\n    \"id:1071,phase:1,pass,nolog,setvar:tx.is_api_request=1\"\n\n# Detect dangerous protocols (e.g., javascript:)\nSecRule ARGS \"@beginsWith javascript:\" \\\n    \"id:1072,phase:2,deny,msg:'JavaScript protocol injection detected'\"\n\n# Detect Base64 encoded data\nSecRule REQUEST_BODY \"@beginsWith data:image\" \\\n    \"id:1073,phase:2,pass,nolog,setvar:tx.has_base64_image=1\"\n```\n\n**Parameter Type:** `string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 以指定字符串开头\n\n\n**语法:** `@beginsWith string`\n\n**输入数据类型:** `string`\n\n@beginsWith 检查变量值是否以指定的字符串开头。匹配区分大小写。相比使用 @rx \"^prefix\" 的正则表达式，@beginsWith 在进行简单前缀检查时性能更优，因为避免了正则引擎的开销。常用于 URL 路径检查、协议验证等场景。\n\n**示例:**\n\n```apache\n# 检测管理后台访问\nSecRule REQUEST_URI \"@beginsWith /admin\" \\\n    \"id:1070,phase:1,deny,msg:'未授权访问管理路径'\"\n\n# 检测 API 路径并标记\nSecRule REQUEST_URI \"@beginsWith /api/v\" \\\n    \"id:1071,phase:1,pass,nolog,setvar:tx.is_api_request=1\"\n\n# 检测危险协议 (如 javascript:)\nSecRule ARGS \"@beginsWith javascript:\" \\\n    \"id:1072,phase:2,deny,msg:'检测到 JavaScript 协议注入'\"\n\n# 检测 Base64 编码数据\nSecRule REQUEST_BODY \"@beginsWith data:image\" \\\n    \"id:1073,phase:2,pass,nolog,setvar:tx.has_base64_image=1\"\n```",
        slug: "beginswith"
    },
    "@contains": {
        en: "**Description:** Contains the specified string\n\n**Syntax:** `\"@contains string\"`\n\n@contains checks if the variable value contains the specified substring. Matching is case sensitive. Compared to @rx, @contains performs better for simple substring searches as it avoids regex engine overhead.\n\n**Example:**\n\n```apache\n# Detect if Content-Type contains multipart\nSecRule REQUEST_HEADERS:Content-Type \"@contains multipart\" \\\n    \"id:1068,phase:1,pass,nolog,ctl:requestBodyProcessor=MULTIPART\"\n\n# Detect if URL contains admin\nSecRule REQUEST_URI \"@contains admin\" \\\n    \"id:1069,phase:1,log,msg:'Accessing admin path'\"\n```\n\n**Parameter Type:** `string`",
        zh: "**描述:** 包含指定字符串\n\n**语法:** `@contains string`\n\n**输入数据类型:** `string`\n\n@contains 检查变量值是否包含指定的子字符串。匹配区分大小写。相比 @rx，@contains 在进行简单子字符串查找时性能更优，因为不涉及正则表达式引擎开销。\n\n**示例:**\n\n```apache\n# 检测 Content-Type 是否包含 multipart\nSecRule REQUEST_HEADERS:Content-Type \"@contains multipart\" \\\n    \"id:1068,phase:1,pass,nolog,ctl:requestBodyProcessor=MULTIPART\"\n\n# 检测 URL 中是否包含 admin\nSecRule REQUEST_URI \"@contains admin\" \\\n    \"id:1069,phase:1,log,msg:'访问管理路径'\"\n```",
        slug: "contains"
    },
    "@containsWord": {
        en: "**Description:** Contains the specified word\n\n**Syntax:** `\"@containsWord parameter\"`\n\n**Example:**\n\n```apache\nSecRule ARGS \"@containsWord parameter\" \"id:1001,deny,msg:'Test'\"\n```\n\n**Parameter Type:** `string`\n\n**Implementation Status:** Not yet implemented",
        zh: "**描述:** 判断输入是否包含指定字符串（同时判断单词边界）。\n\n\n**语法:** `@containsWord string`\n\n**是否实现:** 否\n\n**输入数据类型:** `string`\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@containsWord admin\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "containsword"
    },
    "@detectSQLi": {
        en: "**Description:** Detects SQL injection attacks using the libinjection library\n\n**Syntax:** `\"@detectSQLi\"`\n\n@detectSQLi uses libinjection's SQL injection detection engine to identify SQL injection patterns through lexical analysis and fingerprint matching. Compared to regex-based detection, libinjection provides lower false positive rates and higher detection accuracy. This operator requires no parameters.\n\n**Example:**\n\n```apache\n# Detect SQL injection in all parameters\nSecRule ARGS \"@detectSQLi\" \\\n    \"id:1001,phase:2,deny,msg:'SQL Injection Attack Detected'\"\n\n# Combined with variable detection\nSecRule ARGS|REQUEST_HEADERS \"@detectSQLi\" \\\n    \"id:1002,phase:2,deny,severity:CRITICAL,\\\n    msg:'SQL Injection detected in %{MATCHED_VAR_NAME}'\"\n```\n\n**Parameter Type:** `none`",
        zh: "**描述:** 使用 libinjection 库检测 SQL 注入攻击\n\n\n**语法:** `@detectSQLi`\n\n**输入数据类型:** `string`\n\n@detectSQLi 使用 libinjection 的 SQL 注入检测引擎，通过词法分析和指纹匹配来识别 SQL 注入模式。相比基于正则表达式的检测，libinjection 具有更低的误报率和更高的检测准确性。此操作符不需要参数。\n\n**示例:**\n\n```apache\n# 检测所有参数中的 SQL 注入\nSecRule ARGS \"@detectSQLi\" \\\n    \"id:1001,phase:2,deny,msg:'SQL Injection Attack Detected'\"\n```",
        slug: "detectsqli"
    },
    "@detectXSS": {
        en: "**Description:** Detects Cross-Site Scripting (XSS) attacks using the libinjection library\n\n**Syntax:** `\"@detectXSS\"`\n\n@detectXSS uses libinjection's XSS detection engine to detect XSS attacks by identifying HTML and JavaScript injection patterns. It can detect various types of XSS including reflected, stored, and DOM-based XSS. This operator requires no parameters.\n\n**Example:**\n\n```apache\n# Detect XSS attacks in parameters\nSecRule ARGS \"@detectXSS\" \\\n    \"id:1001,phase:2,deny,msg:'XSS Attack Detected'\"\n\n# Detect XSS in request body\nSecRule REQUEST_BODY \"@detectXSS\" \\\n    \"id:1002,phase:2,deny,severity:CRITICAL,\\\n    msg:'XSS Attack in request body'\"\n```\n\n**Parameter Type:** `none`",
        zh: "**描述:** 使用 libinjection 库检测跨站脚本 (XSS) 攻击\n\n\n**语法:** `@detectXSS`\n\n**输入数据类型:** `string`\n\n@detectXSS 使用 libinjection 的 XSS 检测引擎，通过识别 HTML 和 JavaScript 注入模式来检测 XSS 攻击。它能够检测各种类型的 XSS，包括反射型、存储型和 DOM 型 XSS。此操作符不需要参数。\n\n**示例:**\n\n```apache\n# 检测参数中的 XSS 攻击\nSecRule ARGS \"@detectXSS\" \\\n    \"id:1001,phase:2,deny,msg:'XSS Attack Detected'\"\n```",
        slug: "detectxss"
    },
    "@endsWith": {
        en: "**Description:** Ends with the specified string\n\n**Syntax:** `\"@endsWith string\"`\n\n@endsWith checks if the variable value ends with the specified string. Matching is case sensitive. Compared to using @rx \"suffix$\" regex, @endsWith performs better for simple suffix checks. Commonly used for file extension checks, path validation, and similar scenarios.\n\n**Example:**\n\n```apache\n# Detect dangerous file extension access\nSecRule REQUEST_FILENAME \"@endsWith .bak\" \\\n    \"id:1074,phase:1,deny,msg:'Access to backup files forbidden'\"\n\n# Detect config file access\nSecRule REQUEST_URI \"@endsWith .conf\" \\\n    \"id:1075,phase:1,deny,msg:'Access to config files forbidden'\"\n\n# Detect PHP file upload\nSecRule FILES_NAMES \"@endsWith .php\" \\\n    \"id:1076,phase:2,deny,msg:'PHP file upload forbidden'\"\n\n# Detect hidden files (Unix-style)\nSecRule REQUEST_FILENAME \"@endsWith /.htaccess\" \\\n    \"id:1077,phase:1,deny,msg:'Access to .htaccess file forbidden'\"\n```\n\n**Parameter Type:** `string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 以指定字符串结尾\n\n**语法:** `@endsWith string`\n\n**输入数据类型:** `string`\n\n@endsWith 检查变量值是否以指定的字符串结尾，匹配区分大小写。相比使用 @rx \"suffix$\" 的正则表达式，@endsWith 在进行简单后缀检查时性能更优。常用于文件扩展名检查、路径验证等场景。\n\n**示例:**\n\n```apache\n# 检测危险文件扩展名访问\nSecRule REQUEST_FILENAME \"@endsWith .bak\" \\\n    \"id:1074,phase:1,deny,msg:'禁止访问备份文件'\"\n\n# 检测配置文件访问\nSecRule REQUEST_URI \"@endsWith .conf\" \\\n    \"id:1075,phase:1,deny,msg:'禁止访问配置文件'\"\n\n# 检测 PHP 文件上传\nSecRule FILES_NAMES \"@endsWith .php\" \\\n    \"id:1076,phase:2,deny,msg:'禁止上传 PHP 文件'\"\n\n# 检测隐藏文件 (Unix 风格)\nSecRule REQUEST_FILENAME \"@endsWith /.htaccess\" \\\n    \"id:1077,phase:1,deny,msg:'禁止访问 .htaccess 文件'\"\n```",
        slug: "endswith"
    },
    "@eq": {
        en: "**Description:** Numeric equality\n\n**Syntax:** `\"@eq number\"`\n\n@eq performs numeric equality comparison on the variable value. Variable values are first converted to integers before comparison; non-numeric strings are converted to 0. Commonly used for status code checks, count values, and other exact numeric matching scenarios. Supports dynamic comparison values using macro expansion.\n\n**Example:**\n\n```apache\n# Detect 404 response status\nSecRule RESPONSE_STATUS \"@eq 404\" \\\n    \"id:1085,phase:3,pass,log,msg:'Page not found'\"\n\n# Detect empty request body\nSecRule REQUEST_HEADERS:Content-Length \"@eq 0\" \\\n    \"id:1086,phase:1,pass,nolog,setvar:tx.empty_body=1\"\n\n# Detect if anomaly score reaches threshold\nSecRule TX:anomaly_score \"@eq %{TX.threshold}\" \\\n    \"id:1087,phase:2,deny,msg:'Anomaly score reached threshold'\"\n```\n\n**Parameter Type:** `int`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 数值相等\n\n\n**语法:** `@eq string`\n\n**输入数据类型:** `int`\n\n@eq 对变量值进行数值相等比较。当传入参数没有宏扩展时其会尝试将其转化为数字，其采用的是**前缀解析**的方式（如12abc解析为12，nothing2解析为0）；当传入参数宏扩展时需要保证其值是整数（不能是整数字符串）。\n\n**示例:**\n\n\n```apache\n# 检测 404 响应状态\nSecRule RESPONSE_STATUS \"@eq 404\" \\\n    \"id:1085,phase:3,pass,log,msg:'页面未找到'\"\n\n# 检测空请求体\nSecRule REQUEST_HEADERS:Content-Length \"@eq 0\" \\\n    \"id:1086,phase:1,pass,nolog,setvar:tx.empty_body=1\"\n\n# 检测异常评分是否达到阈值\nSecRule TX:anomaly_score \"@eq %{TX.threshold}\" \\\n    \"id:1087,phase:2,deny,msg:'异常评分达到阈值'\"\n```",
        slug: "eq"
    },
    "@fuzzyHash": {
        en: "**Description:** Fuzzy hash matching\n\n**Syntax:** `\"@fuzzyHash parameter\"`\n\n**Example:**\n\n```apache\nSecRule ARGS \"@fuzzyHash parameter\" \"id:1001,deny,msg:'Test'\"\n```\n\n**Parameter Type:** `string`\n\n**Implementation Status:** Not yet implemented",
        zh: "**描述:** 模糊哈希匹配\n\n\n**语法:** `@fuzzyHash file_path num`\n\n**输入数据类型:** `string`\n\n**是否实现:** 否\n\n使用模糊哈希，比较输入数据和指定文件中的哈希值进行比较，如果大于等于指定的阈值（num），那么就算匹配成功。\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n```apache\nSecRule ARGS \"@fuzzyHash parameter\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "fuzzyhash"
    },
    "@ge": {
        en: "**Description:** Greater than or equal to\n\n**Syntax:** `\"@ge number\"`\n\n@ge checks if the variable value (converted to integer) is greater than or equal to the specified number. Commonly used for threshold detection, especially determining if cumulative anomaly scores have reached the blocking threshold. Can be combined with @le for closed-interval range detection.\n\n**Example:**\n\n```apache\n# Anomaly score reaches blocking threshold\nSecRule TX:anomaly_score \"@ge 5\" \\\n    \"id:1095,phase:2,deny,msg:'Anomaly score reached threshold: %{TX.anomaly_score}'\"\n\n# Detect large file upload\nSecRule FILES_COMBINED_SIZE \"@ge 5242880\" \\\n    \"id:1096,phase:2,deny,msg:'Total uploaded file size exceeds 5MB'\"\n\n# Detect brute force (failed attempts >= 5)\nSecRule IP:failed_login \"@ge 5\" \\\n    \"id:1097,phase:2,deny,msg:'Suspected brute force attack'\"\n```\n\n**Parameter Type:** `int`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 大于等于\n\n\n**语法:** `@ge string`\n\n**输入数据类型:** `int`\n\n@ ge 检查输入数据是否大于等于指定的数值。其内部实现与操作符eq差别不大，详细信息可见操作符 eq。\n\n**示例:**\n\n```apache\n# 异常评分达到阻断阈值\nSecRule TX:anomaly_score \"@ge 5\" \\\n    \"id:1095,phase:2,deny,msg:'异常评分达到阈值: %{TX.anomaly_score}'\"\n\n# 检测大文件上传\nSecRule FILES_COMBINED_SIZE \"@ge 5242880\" \\\n    \"id:1096,phase:2,deny,msg:'上传文件总大小超过 5MB'\"\n\n# 检测暴力破解 (失败次数 >= 5)\nSecRule IP:failed_login \"@ge 5\" \\\n    \"id:1097,phase:2,deny,msg:'疑似暴力破解攻击'\"\n```",
        slug: "ge"
    },
    "@geoLookup": {
        en: "**Description:** Geolocation lookup\n\n**Syntax:** `\"@geoLookup parameter\"`\n\n**Example:**\n\n```apache\nSecRule ARGS \"@geoLookup parameter\" \"id:1001,deny,msg:'Test'\"\n```\n\n**Parameter Type:** `none`\n\n**Implementation Status:** Not yet implemented",
        zh: "**描述:** 查询指定IP的对应的地理位置，结果会存入GEO集合中。\n\n\n**语法:** `@geoLookup`\n\n**输入数据类型:** `string`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\n#配置地理定位数据库\nSecGeoLookupDb /path/to/GeoLiteCity.dat\n\n#查找IP地址\nSecRule REMOTE_ADDR \"@geoLookup\" \"phase:1,id:155,nolog,pass\"\n\n#阻止地理位置失败的IP地址\nSecRule &GEO \"@eq 0\" \"phase:1,id:156,deny,msg:'Failed to lookup IP'\"\n```",
        slug: "geolookup"
    },
    "@gt": {
        en: "**Description:** Greater than\n\n**Syntax:** `\"@gt number\"`\n\n@gt checks if the variable value (converted to integer) is greater than the specified number. Commonly used for detecting threshold violations such as oversized requests, rate limiting, and anomaly score thresholds. One of the core operators for implementing rate limiting and threshold detection.\n\n**Example:**\n\n```apache\n# Detect oversized request body (exceeds 10MB)\nSecRule REQUEST_HEADERS:Content-Length \"@gt 10485760\" \\\n    \"id:1088,phase:1,deny,msg:'Request body exceeds size limit'\"\n\n# Detect anomaly score exceeded\nSecRule TX:anomaly_score \"@gt 10\" \\\n    \"id:1089,phase:2,deny,msg:'Anomaly score exceeded threshold: %{TX.anomaly_score}'\"\n\n# Detect IP request rate limit exceeded\nSecRule IP:request_count \"@gt 100\" \\\n    \"id:1090,phase:1,deny,msg:'IP request rate limit exceeded'\"\n\n# Detect abnormal parameter count\nSecRule &ARGS \"@gt 100\" \\\n    \"id:1091,phase:2,deny,msg:'Abnormal parameter count'\"\n```\n\n**Parameter Type:** `int`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 大于\n\n**语法:** `@gt string`\n\n**输入数据类型:** `int`\n\n@gt 检查变量值（转换为整数后）是否大于指定的数值。常用于检测超限情况，如请求大小超限、频率超限、评分超标等场景。\n\n**示例:**\n\n```apache\n# 检测请求体过大 (超过 10MB)\nSecRule REQUEST_HEADERS:Content-Length \"@gt 10485760\" \\\n    \"id:1088,phase:1,deny,msg:'请求体超过大小限制'\"\n\n# 检测异常评分超标\nSecRule TX:anomaly_score \"@gt 10\" \\\n    \"id:1089,phase:2,deny,msg:'异常评分超过阈值: %{TX.anomaly_score}'\"\n\n# 检测 IP 请求频率超限\nSecRule IP:request_count \"@gt 100\" \\\n    \"id:1090,phase:1,deny,msg:'IP 请求频率超限'\"\n\n# 检测参数数量异常\nSecRule &ARGS \"@gt 100\" \\\n    \"id:1091,phase:2,deny,msg:'参数数量异常'\"\n```",
        slug: "gt"
    },
    "@inspectFile": {
        en: "**Description:** Invoke external script to inspect file\n\n**Syntax:** `\"@inspectFile parameter\"`\n\n**Example:**\n\n```apache\nSecRule ARGS \"@inspectFile parameter\" \"id:1001,deny,msg:'Test'\"\n```\n\n**Parameter Type:** `string (file path)`\n\n**Implementation Status:** Not yet implemented",
        zh: "**描述:** 调用外部脚本（lua）执行自定义的算法和逻辑。\n\n\n**语法:** `@inspectFile string`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n```apache\nSecRule ARGS \"@inspectFile parameter\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "inspectfile"
    },
    "@ipMatch": {
        en: "**Description:** IP address/CIDR matching\n\n**Syntax:** `\"@ipMatch ip1,ip2,cidr1,cidr2...\"`\n\n@ipMatch checks if the variable value matches the specified IP address or CIDR range. Supports both IPv4 and IPv6 addresses. Multiple addresses/ranges are separated by commas. Commonly used for IP whitelisting, blacklisting, geo-restrictions, and other access control scenarios. More efficient than using @rx for IP matching.\n\n**Example:**\n\n```apache\n# IP whitelist - allow specific IPs to bypass detection\nSecRule REMOTE_ADDR \"@ipMatch 192.168.1.0/24,10.0.0.0/8\" \\\n    \"id:1103,phase:1,pass,nolog,ctl:ruleEngine=Off\"\n\n# IP blacklist - block known malicious IPs\nSecRule REMOTE_ADDR \"@ipMatch 1.2.3.4,5.6.7.8\" \\\n    \"id:1104,phase:1,deny,msg:'Blacklisted IP address'\"\n\n# Restrict admin panel access by source IP\nSecRule REQUEST_URI \"@beginsWith /admin\" \\\n    \"id:1105,phase:1,chain\"\n    SecRule REMOTE_ADDR \"!@ipMatch 192.168.1.0/24\" \\\n        \"deny,msg:'Admin panel access from external network forbidden'\"\n\n# Detect internal IP (possible SSRF attack)\nSecRule ARGS \"@ipMatch 127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16\" \\\n    \"id:1106,phase:2,deny,msg:'Internal IP access detected, possible SSRF'\"\n```\n\n**Parameter Type:** `string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** IP 地址/网段匹配\n\n**语法:** `@ipMatch ip|CIDR`\n\n**输入数据类型:** `string`\n\n@ipMatch 检查变量值是否匹配指定的 IP 地址或 CIDR 网段。支持 IPv4 和 IPv6 地址。常用于实现 IP 白名单、黑名单、地域限制等访问控制场景。\n\n**示例:**\n\n```apache\n# IP 黑名单 - 阻止已知恶意 IP\nSecRule REMOTE_ADDR \"@ipMatch  2001:db8:85a3:8d3:1319:8a2e:370:7348\" \\\n    \"id:1104,phase:1,deny,msg:'已列入黑名单的 IP 地址'\"\n\nSecRule REMOTE_ADDR \"@ipMatch 10.10.50.0/24\" \"id:162\"\n```",
        slug: "ipmatch"
    },
    "@ipMatchF": {
        en: "**Description:** Loads IP address list from file for matching (alias for @ipMatchFromFile)\n\n**Syntax:** `\"@ipMatchF /path/to/ip-list.txt\"`\n\n@ipMatchF is the short form of @ipMatchFromFile. Loads IP address/CIDR range lists from an external file for matching. One IP address or CIDR range per line in the file; lines starting with # are treated as comments and ignored. Suitable for managing large IP address lists such as dynamically updated blacklists and CDN node lists.\n\n**Example:**\n\n```apache\n# Load IP blacklist from file\nSecRule REMOTE_ADDR \"@ipMatchF /etc/wge/ip-blacklist.txt\" \\\n    \"id:1107,phase:1,deny,msg:'IP is in blacklist'\"\n\n# Load trusted proxy IP list from file\nSecRule REMOTE_ADDR \"@ipMatchF /etc/wge/trusted-proxies.txt\" \\\n    \"id:1108,phase:1,pass,nolog,setvar:tx.is_trusted_proxy=1\"\n```\n\n**File format example (/etc/wge/ip-blacklist.txt):**\n\n```\n# Malicious IP blacklist\n# Updated: 2024-01-01\n1.2.3.4\n5.6.7.8\n10.0.0.0/8\n192.168.100.0/24\n```\n\n**Parameter Type:** `string (file path)`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** ipMatchFromFile的简称\n\n\n**语法:** `@ipMatchF file_path`\n\n**输入数据类型:** `string`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n```apache\n# 从文件加载 IP 黑名单\nSecRule REMOTE_ADDR \"@ipMatchF /etc/wge/ip-blacklist.txt\" \\\n    \"id:1107,phase:1,deny,msg:'IP 在黑名单中'\"\n\n# 从文件加载可信代理 IP 列表\nSecRule REMOTE_ADDR \"@ipMatchF /etc/wge/trusted-proxies.txt\" \\\n    \"id:1108,phase:1,pass,nolog,setvar:tx.is_trusted_proxy=1\"\n```",
        slug: "ipmatchf"
    },
    "@ipMatchFromFile": {
        en: "**Description:** Load IP address list from file for matching\n\n**Syntax:** `\"@ipMatchFromFile parameter\"`\n\n**Example:**\n\n```apache\nSecRule ARGS \"@ipMatchFromFile 192.168.1.1\" \"id:1001,deny,msg:'Test'\"\n```\n\n**Parameter Type:** `string (file path)`\n\n**Implementation Status:** Not yet implemented",
        zh: "**描述:** 从文件加载 IP 地址列表匹配\n\n**语法:** `@ipMatchFromFile file_path`\n\n**输入数据类型:** `string`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@ipMatchFromFile 192.168.1.1\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "ipmatchfromfile"
    },
    "@le": {
        en: "**Description:** Less than or equal to\n\n**Syntax:** `\"@le number\"`\n\n@le checks if the variable value (converted to integer) is less than or equal to the specified number. Commonly used for upper limit detection such as response status code range checks and request count limits within time windows. Can be combined with @ge for closed-interval range detection.\n\n**Example:**\n\n```apache\n# Detect normal response (status code <= 399)\nSecRule RESPONSE_STATUS \"@le 399\" \\\n    \"id:1098,phase:3,pass,nolog,setvar:tx.normal_response=1\"\n\n# Detect requests within rate limit\nSecRule IP:request_count \"@le 100\" \\\n    \"id:1099,phase:1,pass,nolog\"\n```\n\n**Parameter Type:** `int`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 小于等于\n\n\n**语法:** `@le string`\n\n**输入数据类型:** `int`\n\n@le 检查输入数据是否小于等于指定的数值。常用于上限检测，与 @ge 配合可实现闭区间范围检测。\n\n**示例:**\n\n\n```apache\n# 规则触发总分数在指定范围内，仅记录日志\nSecRule TX:defend_level \"@le 20\" \"id:1001,phase:4,t:none,chain,logdata:'the %{REMOTE_ADDR}' defend_level is %{tx.defend_level}\"\n  SecRule TX:defend_level \"@ge 10\" \"t:none\"\n```",
        slug: "le"
    },
    "@lt": {
        en: "**Description:** Less than\n\n**Syntax:** `\"@lt number\"`\n\n@lt checks if the variable value (converted to integer) is less than the specified number. Commonly used for detecting insufficient values such as response status code range detection and minimum length validation scenarios. Can be combined with @gt for range detection.\n\n**Example:**\n\n```apache\n# Detect successful response (status code < 400)\nSecRule RESPONSE_STATUS \"@lt 400\" \\\n    \"id:1092,phase:3,pass,nolog,setvar:tx.success_response=1\"\n\n# Detect minimum content length\nSecRule REQUEST_HEADERS:Content-Length \"@lt 10\" \\\n    \"id:1093,phase:1,pass,nolog,setvar:tx.small_body=1\"\n```\n\n**Parameter Type:** `int`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 小于\n\n\n**语法:** `@lt string`\n\n**输入数据类型:** `int`\n\n@lt 检查输入数据是否小于指定的数值。\n\n**示例:**\n```apache\n# 判断后续规则是否继续执行\nSecRule TX:level \"@lt 4\" \"id:1001,phase:1,pass,nolog,skipAfter:END\"\n```",
        slug: "lt"
    },
    "@noMatch": {
        en: "**Description:** No match (always returns false)\n\n**Syntax:** `\"@noMatch\"`\n\n@noMatch unconditionally returns no match (false). The rule will never trigger its action. This operator is primarily used for debugging purposes to temporarily disable rules without commenting or deleting rule code. Can also be used for placeholder rules or temporarily disabling specific detection in test environments.\n\n**Example:**\n\n```apache\n# Temporarily disable rule (for debugging)\nSecRule ARGS \"@noMatch\" \\\n    \"id:1119,phase:2,deny,msg:'This rule is disabled'\"\n\n# Create placeholder rule, reserve rule ID\nSecRule REQUEST_URI \"@noMatch\" \\\n    \"id:1120,phase:1,deny,msg:'Reserved rule ID - to be implemented'\"\n\n# Disable certain detection in test environment\nSecRule TX:testing_mode \"@eq 1\" \\\n    \"id:1121,phase:1,chain,pass\"\n    SecRule ARGS \"@noMatch\" \\\n        \"deny,msg:'This detection is disabled in test mode'\"\n```\n\n**Parameter Type:** `none`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 不匹配\n\n**语法:** `@noMatch`\n\n**输入数据类型:** `int|string`\n\n**区分大小写:** 是\n\n@noMatch 无条件返回匹配失败，当取反存在的时候，就是无条件匹配成功（这样就和操作符 unconditionalMatch 一样）。",
        slug: "nomatch"
    },
    "@pm": {
        en: "**Description:** Performs efficient multi-pattern parallel matching using the Aho-Corasick algorithm\n\n**Syntax:** `\"@pm keyword1 keyword2 keyword3 ...\"`\n\n@pm operator can search for multiple keywords simultaneously, separated by spaces. Compared to multiple @rx rules, @pm performs better when matching a large number of keywords. Matching is case insensitive.\n\n**Example:**\n\n```apache\n# Detect common SQL injection keywords\nSecRule ARGS \"@pm select union insert update delete\" \\\n    \"id:1001,phase:2,deny,msg:'SQL keyword detected'\"\n\n# Detect sensitive file access\nSecRule REQUEST_URI \"@pm /etc/passwd /etc/shadow .htaccess\" \\\n    \"id:1002,phase:1,deny,msg:'Sensitive file access'\"\n```\n\n**Parameter Type:** `string (space-separated keyword list)`",
        zh: "**描述:** 进行大小写不区分的字符串匹配\n\n**语法:** `@pm string1 string2 string3 ...`\n\n**输入数据类型:** `string (空格分隔的关键字列表)`\n\n@pm 操作符可以同时搜索多个关键字，使用空格分隔。相比多个 @rx 规则，@pm 在匹配大量关键字时性能更优，匹配不区分大小写。\n\n相比于Modsecurity使用的 Aho-Corasick 匹配算法，WGE使用的是hyperscan的多模匹配。\n\n**示例:**\n```apache\n# 检测常见 SQL 注入关键字\nSecRule ARGS \"@pm select union insert update delete\" \\\n    \"id:1001,phase:2,deny,msg:'SQL keyword detected'\"\n\n# 检测敏感文件访问\nSecRule REQUEST_URI \"@pm /etc/passwd /etc/shadow .htaccess\" \\\n    \"id:1002,phase:1,deny,msg:'Sensitive file access'\"\n```",
        slug: "pm"
    },
    "@pmFromFile": {
        en: "**Description:** Loads keywords from file for parallel matching\n\n**Syntax:** `\"@pmFromFile /path/to/keywords.txt\"`\n\nFunctions identically to @pmf. One keyword per line in the file; lines starting with # are treated as comments and ignored. Supports both relative paths (relative to config directory) and absolute paths.\n\n**Example:**\n\n```apache\n# Load malicious User-Agent list from file\nSecRule REQUEST_HEADERS:User-Agent \"@pmFromFile /etc/wge/bad-ua.txt\" \\\n    \"id:1001,phase:1,deny,msg:'Malicious User-Agent'\"\n```\n\n**Parameter Type:** `string (file path)`",
        zh: "**描述:** 从文件加载关键字进行并行匹配\n\n**语法:** `@pmFromFile /path/to/keywords.txt`\n\n**输入数据类型:** `string (文件路径)`\n\n当 pm 中关键词太多会导致规则过长，可读性下降，这时候就可以使用操作符 pmFromFile 替代，其支持将所有需要匹配的关键词放在文件中，需要保证WGE对于该文件可读。\n\npmFromFile 与 pm 一样都是使用 hyperscan 实现的，为了增强 pmFromFile 的能力，我们增加了一些控制符以便使用者可以方便的控制多模匹配。\n\n**可选项：**\n- `##!+ i`：大小写不区分\n- `##!+ -i`：大小写区分\n- `##!+ l`：字符串匹配\n- `##!+ -l`：正则匹配\n- `##!^ prefix_string`：后续所有模式前加上前缀prefix_string\n- `##!$ suffix_string`：后续所有模式前加上后缀suffix_string\n- `##`：提前结束，后续模式不匹配\n- `#`：注释，需要注意前缀不要符合上述格式\n\n其中除了`##!+ l`和`##!+ -l`是全局仅生效一个，即对于一个 pmFromFile 中的所有模式正则匹配，和字符串匹配是二选一的，也即是最后一个。\n\n其它是可以部分生效的，如可以指定范围大小写不区分，执行部分大小写区分：\n```\n# 下面的匹配大小不区分\n##!+ i\nadmin\nuser\npasswd\n# 下面的匹配大小写区分\n##!+ -i\nroot\nbash\necho\n```\n前缀和后缀的设置也同理可以部分设置，同时可以直接使用`##!^ `和`##!$ `清空前缀和后缀。\n\n**默认：**大小写不区分，无前后缀，字符串匹配。\n\n**示例:**\n\n\n```apache\n# 从文件加载恶意 User-Agent 列表\nSecRule REQUEST_HEADERS:User-Agent \"@pmFromFile /etc/wge/bad-ua.txt\" \\\n    \"id:1001,phase:1,deny,msg:'Malicious User-Agent'\"\n```",
        slug: "pmfromfile"
    },
    "@pmf": {
        en: "**Description:** Loads keywords from file for parallel matching (alias for @pmFromFile)\n\n**Syntax:** `\"@pmf /path/to/keywords.txt\"`\n\nSame as @pm, but loads keyword list from external file. One keyword per line in the file; lines starting with # are treated as comments and ignored. Suitable for scenarios managing a large number of keywords.\n\n**Example:**\n\n```apache\n# Load SQL injection keywords from file\nSecRule ARGS \"@pmf /etc/wge/sql-keywords.txt\" \\\n    \"id:1001,phase:2,deny,msg:'SQL keyword detected'\"\n```\n\n**Parameter Type:** `string (file path)`",
        zh: "**描述:** pmFromFile的简称\n\n**语法:** `@pmf /path/to/keywords.txt`\n\n**输入数据类型:** `string (文件路径)`\n\n详细介绍见pmFromFile的描述。\n\n**示例:**\n\n```apache\n# 从文件加载 SQL 注入关键字\nSecRule ARGS \"@pmf /etc/wge/sql-keywords.txt\" \\\n    \"id:1001,phase:2,deny,msg:'SQL keyword detected'\"\n```",
        slug: "pmf"
    },
    "@rbl": {
        en: "**Description:** Real-time blacklist lookup\n\n**Syntax:** `\"@rbl parameter\"`\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rbl parameter\" \"id:1001,deny,msg:'Test'\"\n```\n\n**Parameter Type:** `string`\n\n**Implementation Status:** Not yet implemented",
        zh: "**描述:** 在作为参数给出的RBL（real-time block list）中查找输入值。该参数可以是IPv4地址或主机名。\n\n**语法:** `@rbl string`\n\n**输入数据类型:** `string`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rbl sbl-xbl.spamhaus.org\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "rbl"
    },
    "@rsub": {
        en: "**Description:** Regular expression substitution\n\n**Syntax:** `\"@rsub parameter\"`\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rsub parameter\" \"id:1001,deny,msg:'Test'\"\n```\n\n**Parameter Type:** `string`\n\n**Implementation Status:** Not yet implemented",
        zh: "**描述:** 对输入数据执行正则表达式替换\n\n**语法:** `@rsub string`\n\n**输入数据类型:** `string`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。",
        slug: "rsub"
    },
    "@rx": {
        en: "**Description:** Matches variable values using Perl Compatible Regular Expressions (PCRE)\n\n**Syntax:** `\"@rx pattern\"`\n\n@rx is the most powerful and commonly used operator in SecLang. It uses PCRE syntax and supports all standard regular expression features. If no operator is specified, @rx is used as the default operator.\n\n**Example:**\n\n```apache\n# Detect SQL injection keywords\nSecRule ARGS \"@rx (?i:select|union|insert|update|delete|drop)\" \\\n    \"id:1001,phase:2,deny,msg:'SQL Injection detected'\"\n\n# Detect XSS attack patterns\nSecRule ARGS \"@rx <script[^>]*>.*?</script>\" \\\n    \"id:1002,phase:2,deny,msg:'XSS Attack detected'\"\n```\n\n**Parameter Type:** `string (regular expression)`",
        zh: "**描述:** 使用 re2 库进行正则匹配。\n\n**语法:** `@rx pattern`\n\n**输入数据类型:** `string`\n\n@rx 是 SecLang 中最强大和最常用的操作符。在默认情况其使用 re2 进行正则匹配，但是当 re2 编译失败的情况下其会尝试使用 pcre2。\n\n当不存在operator关键字的时候会默认使用正则操作符。\n\n\n**示例:**\n```apache\n# 检测 SQL 注入关键字\nSecRule ARGS \"@rx (?i:select|union|insert|update|delete|drop)\" \\\n    \"id:1001,phase:2,deny,msg:'SQL Injection detected'\"\n\n# 检测 XSS 攻击模式\nSecRule ARGS \"@rx ]*>.*?\" \\\n    \"id:1002,phase:2,deny,msg:'XSS Attack detected'\"\n\n# 没有 operator 关键字的情况下使用正则\nSecRule ARGS \"admin\" \"id:1003,phase:2,deny,msg:'test'\"\n```",
        slug: "rx"
    },
    "@rxGlobal": {
        en: "**Description:** Global regular expression matching (matches all occurrences)\n\n**Syntax:** `\"@rxGlobal parameter\"`\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rxGlobal ^admin\" \"id:1001,deny,msg:'Test'\"\n```\n\n**Parameter Type:** `string (regex)`\n\n**Implementation Status:** Not yet implemented",
        zh: "**描述:** 全局正则表达式匹配\n\n**语法:** `@rxGlobal pattern`\n\n**输入数据类型:** `string`\n\n**是否实现:** 否\n\nrxGlobal 操作符与 rx 不同的是 rx 匹配成功一次就结束，而 rxGlobal 会从上次匹配成功结束的位置继续尝试匹配。\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rxGlobal ^admin\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "rxglobal"
    },
    "@streq": {
        en: "**Description:** String equality\n\n**Syntax:** `\"@streq string\"`\n\n@streq checks if the variable value exactly equals the specified string. Matching is case sensitive. Compared to @rx \"^exact$\" regex, @streq performs better for exact string comparisons. For case-insensitive comparison, apply the lowercase transformation function first. Commonly used for exact value validation, flag checks, and similar scenarios.\n\n**Example:**\n\n```apache\n# Exact match HTTP method\nSecRule REQUEST_METHOD \"@streq POST\" \\\n    \"id:1081,phase:1,pass,nolog,setvar:tx.is_post=1\"\n\n# Validate specific header value\nSecRule REQUEST_HEADERS:X-Requested-With \"@streq XMLHttpRequest\" \\\n    \"id:1082,phase:1,pass,nolog,setvar:tx.is_ajax=1\"\n\n# Case-insensitive comparison (using lowercase transform)\nSecRule REQUEST_HEADERS:Accept \"!@streq application/json\" \\\n    \"id:1083,phase:1,t:lowercase,deny,msg:'Only JSON requests accepted'\"\n\n# Detect specific user agent\nSecRule REQUEST_HEADERS:User-Agent \"@streq curl/7.68.0\" \\\n    \"id:1084,phase:1,log,pass,msg:'curl client detected'\"\n```\n\n**Parameter Type:** `string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 字符串相等\n\n\n**语法:** `@streq string`\n\n**输入数据类型:** `string`\n\n**区分大小写:** 是\n\n\n@streq 检查变量值是否与指定的字符串完全相等。匹配区分大小写。相比 @rx \"^exact$\" 的正则表达式，@streq 在进行精确字符串比较时性能更优。\n\n\n**示例:**\n```apache\n# 精确匹配 HTTP 方法\nSecRule REQUEST_METHOD \"@streq POST\" \\\n    \"id:1081,phase:1,pass,nolog,setvar:tx.is_post=1\"\n\n# 验证特定 Header 值\nSecRule REQUEST_HEADERS:X-Requested-With \"@streq XMLHttpRequest\" \\\n    \"id:1082,phase:1,pass,nolog,setvar:tx.is_ajax=1\"\n\n# 检测特定用户代理\nSecRule REQUEST_HEADERS:User-Agent \"@streq curl/7.68.0\" \\\n    \"id:1084,phase:1,log,pass,msg:'检测到 curl 客户端'\"\n```",
        slug: "streq"
    },
    "@strmatch": {
        en: "**Description:** Wildcard matching\n\n**Syntax:** `\"@strmatch parameter\"`\n\n**Example:**\n\n```apache\nSecRule ARGS \"@strmatch parameter\" \"id:1001,deny,msg:'Test'\"\n```\n\n**Parameter Type:** `string (wildcard)`\n\n**Implementation Status:** Not yet implemented",
        zh: "**描述:** 单个模式的字符串匹配，使用Boyer-Moore-Horspool算法。\n\n**语法:** `@strmatch string`\n\n**输入数据类型:** `string`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能\n\n**示例:**\n```apache\nSecRule ARGS \"@strmatch admin\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "strmatch"
    },
    "@unconditionalMatch": {
        en: "**Description:** Unconditional match (always returns true)\n\n**Syntax:** `\"@unconditionalMatch\"`\n\n@unconditionalMatch unconditionally returns a match (true). Does not check any variable value and always triggers the rule action. Commonly used for creating unconditional rules such as initializing variables, setting defaults, and logging all requests. Typically has the same effect as SecAction, but is useful in rule chains that require a variable.\n\n**Example:**\n\n```apache\n# Initialize transaction variables\nSecRule REQUEST_URI \"@unconditionalMatch\" \\\n    \"id:1116,phase:1,pass,nolog,setvar:tx.anomaly_score=0\"\n\n# Log all requests\nSecRule REMOTE_ADDR \"@unconditionalMatch\" \\\n    \"id:1117,phase:1,pass,log,msg:'Request from: %{REMOTE_ADDR}'\"\n\n# Use in rule chain\nSecRule REQUEST_METHOD \"@streq POST\" \\\n    \"id:1118,phase:1,chain,pass\"\n    SecRule REQUEST_URI \"@unconditionalMatch\" \\\n        \"setvar:tx.is_post_request=1\"\n```\n\n**Parameter Type:** `none`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 无条件匹配 (总是返回 true)\n\n**语法:** `@unconditionalMatch`\n\n**输入数据类型:** `int|string`\n\n@unconditionalMatch 无条件匹配成功，与 noMatch 相同，当存在取反即 !@unconditionalMatch 相当于 @noMatch。\n\n**示例:**\n```apache\n# 在规则链中使用\nSecRule ARGS \"@rx user\" \\\n    \"id:1118,phase:1,chain,pass\"\n    SecRule &MACTHED_VARS \"@unconditionalMatch\" \\\n        \"setvar:tx.is_post_request+=1\"\n```",
        slug: "unconditionalmatch"
    },
    "@validateByteRange": {
        en: "**Description:** Validate byte range\n\n**Syntax:** `\"@validateByteRange range1,range2-range3,...\"`\n\n@validateByteRange checks if each byte in the variable value is within the specified range. Supports combinations of single values (e.g., 10) and ranges (e.g., 32-126), separated by commas. Matches if bytes outside the specified range are found. This operator is most commonly used for detecting the presence of NUL bytes (0x00) — these bytes have no legitimate purpose but are often used as detection evasion techniques. Can also be used to detect non-printable characters and binary data.\n\n**Example:**\n\n```apache\n# Detect NUL bytes (common evasion technique)\nSecRule ARGS \"@validateByteRange 1-255\" \\\n    \"id:1109,phase:2,deny,msg:'NUL byte injection detected'\"\n\n# Only allow printable ASCII characters (32-126) and common control characters\nSecRule ARGS \"@validateByteRange 9,10,13,32-126\" \\\n    \"id:1110,phase:2,deny,msg:'Illegal characters detected'\"\n\n# Detect binary data in parameters\nSecRule ARGS:data \"!@validateByteRange 32-126\" \\\n    \"id:1111,phase:2,pass,log,msg:'Parameter contains non-printable characters'\"\n\n# Detect illegal characters in URL\nSecRule REQUEST_URI \"@validateByteRange 1-255\" \\\n    \"id:1112,phase:1,deny,msg:'NUL byte detected in URL'\"\n```\n\n**Parameter Type:** `string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 验证包含的字节\n\n**语法:** `@validateByteRange range1,range2-range3,...`\n\n**输入数据类型:** `string`\n\n**区分大小写:** 是\n\n@validateByteRange 检查变量值中的每个字节是否在指定的范围内。支持单个值（如 10）和范围（如 32-126）的组合，用逗号分隔。如果发现范围外的字节则匹配成功。此操作符最常用于检测 NUL 字节（0x00）的存在——这类字节虽无正当用途，却常被用作规避检测的技术。也可用于检测非打印字符和二进制数据。\n\n**注意：**\n- 参数要能够转化为正整数，默认**前缀解析**，如`10ab`会解析为10，非法的字符串如`-100`会解析为0；\n- 当传入整数超过256时会默认该范围直接丢弃；\n- 对于范围开始值大于结束值时（如100-20），会直接丢弃。\n\n**示例:**\n```apache\n# 检测 NUL 字节 (常见的规避技术)\nSecRule ARGS \"@validateByteRange 1-255\" \\\n    \"id:1109,phase:2,deny,msg:'检测到 NUL 字节注入'\"\n\n# 仅允许可打印 ASCII 字符 (32-126) 和常见控制字符\nSecRule ARGS \"@validateByteRange 9,10,13,32-126\" \\\n    \"id:1110,phase:2,deny,msg:'检测到非法字符'\"\n```",
        slug: "validatebyterange"
    },
    "@validateDtd": {
        en: "**Description:** Validate XML against DTD\n\n**Syntax:** `\"@validateDtd parameter\"`\n\n**Example:**\n\n```apache\nSecRule ARGS \"@validateDtd parameter\" \"id:1001,deny,msg:'Test'\"\n```\n\n**Parameter Type:** `string`\n\n**Implementation Status:** Not yet implemented",
        zh: "**描述:** 根据 DTD 验证 XML DOM节点树\n\n**语法:** `@validateDTD dts_path`\n\n**输入数据类型:** `string`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule XML \"@validateDTD /path/to/xml.dtd\" \"id:1001,phase:2,deny,msg:'Failed DTD validation'\"\n```",
        slug: "validatedtd"
    },
    "@validateSchema": {
        en: "**Description:** Validate XML against Schema\n\n**Syntax:** `\"@validateSchema parameter\"`\n\n**Example:**\n\n```apache\nSecRule ARGS \"@validateSchema parameter\" \"id:1001,deny,msg:'Test'\"\n```\n\n**Parameter Type:** `string`\n\n**Implementation Status:** Not yet implemented",
        zh: "**描述:** 根据提供的XML Schema验证XML DOM节点树\n\n**语法:** `@validateSchema xsd_path`\n\n**输入数据类型:** `string`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule XML \"@validateSchema /path/to/xml.xsd\" \"phase:2,id:191,deny,msg:'Failed DTD validation'\"\n```",
        slug: "validateschema"
    },
    "@validateUrlEncoding": {
        en: "**Description:** Validate URL encoding\n\n**Syntax:** `\"@validateUrlEncoding\"`\n\n@validateUrlEncoding checks if URL encoding (percent-encoding) in the variable value is valid. Matches if invalid URL encoding is found. This operator detects attacks using invalid URL encoding for detection evasion, such as malformed encoding like %ZZ or %1. Requires no parameters.\n\n**Example:**\n\n```apache\n# Detect invalid URL encoding\nSecRule ARGS \"@validateUrlEncoding\" \\\n    \"id:1113,phase:2,deny,msg:'Invalid URL encoding detected'\"\n\n# Detect invalid encoding in URI\nSecRule REQUEST_URI \"@validateUrlEncoding\" \\\n    \"id:1114,phase:1,deny,msg:'Invalid URL encoding in URI'\"\n\n# Detect encoding issues in query string\nSecRule QUERY_STRING \"@validateUrlEncoding\" \\\n    \"id:1115,phase:1,deny,msg:'Invalid encoding in query string'\"\n```\n\n**Parameter Type:** `none`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 验证输入是否为 URL 编码格式\n\n**语法:** `@validateUrlEncoding`\n\n**输入数据类型:** `string`\n\n@validateUrlEncoding 检查变量值中的 URL 编码（百分号编码）是否有效。如果发现例如 %ZZ 或 %1 无效的 URL 编码则匹配成功。\n\n**注意：**WGE中会对部分内容进行默认解码操作，如ARGS、REQUEST_URI等，除非确定其是多次编码的，否则对齐使用操作符 validateUrlEncoding 几乎没有意义。\n\n**示例:**\n```apache\n# 检测无效的 URL 编码\nSecRule ARGS \"@validateUrlEncoding\" \\\n    \"id:1113,phase:2,deny,msg:'检测到无效的 URL 编码'\"\n\n# 检测 URI 中的无效编码\nSecRule REQUEST_URI \"@validateUrlEncoding\" \\\n    \"id:1114,phase:1,deny,msg:'URI 中存在无效的 URL 编码'\"\n\n# 检测查询字符串中的编码问题\nSecRule QUERY_STRING \"@validateUrlEncoding\" \\\n    \"id:1115,phase:1,deny,msg:'查询字符串中存在无效编码'\"\n```",
        slug: "validateurlencoding"
    },
    "@validateUtf8Encoding": {
        en: "**Description:** Validate UTF-8 encoding\n\n**Syntax:** `\"@validateUtf8Encoding parameter\"`\n\n**Example:**\n\n```apache\nSecRule ARGS \"@validateUtf8Encoding parameter\" \"id:1001,deny,msg:'Test'\"\n```\n\n**Parameter Type:** `none`\n\n**Implementation Status:** Not yet implemented",
        zh: "**描述:** 验证输入数据是否为 UTF-8 编码格式\n\n**语法:** `@validateUtf8Encoding parameter`\n\n**输入数据类型:** `string`\n\n**是否实现:** 否\n\n检测输入数据中是否包含非 UTF-8 编码格式的内容，如果存在则匹配成功。\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n```apache\nSecRule ARGS \"@validateUtf8Encoding parameter\" \"id:1001,deny,msg:'Test'\"\n```",
        slug: "validateutf8encoding"
    },
    "@verifyCc": {
        en: "**Description:** Verify credit card number\n\n**Syntax:** `\"@verifyCc parameter\"`\n\n**Example:**\n\n```apache\nSecRule ARGS \"@verifyCc parameter\" \"id:1001,deny,msg:'Test'\"\n```\n\n**Parameter Type:** `string (regex)`\n\n**Implementation Status:** Not yet implemented",
        zh: "**描述:** 验证信用卡号\n\n**语法:** `@verifyCC string`\n\n**输入数据类型:** `string`\n\n**是否实现:** 否\n\n此指令WGE可以正常解析，但是暂未实现该功能。",
        slug: "verifycc"
    },
    "@verifyCpf": {
        en: "**Description:** Verify Brazilian CPF number\n\n**Syntax:** `\"@verifyCpf parameter\"`\n\n**Example:**\n\n```apache\nSecRule ARGS \"@verifyCpf parameter\" \"id:1001,deny,msg:'Test'\"\n```\n\n**Parameter Type:** `string (regex)`\n\n**Implementation Status:** Not yet implemented",
        zh: "**描述:** 验证巴西 CPF 号码\n\n**语法:** `@verifyCPF string`\n\n**输入数据类型:** `string`\n\n**是否实现:** 否\n\n在输入数据中检测CPF编号（巴西社交编号）。\n\n此指令WGE可以正常解析，但是暂未实现该功能。",
        slug: "verifycpf"
    },
    "@verifySsn": {
        en: "**Description:** Verify US Social Security Number\n\n**Syntax:** `\"@verifySsn parameter\"`\n\n**Example:**\n\n```apache\nSecRule ARGS \"@verifySsn parameter\" \"id:1001,deny,msg:'Test'\"\n```\n\n**Parameter Type:** `string (regex)`\n\n**Implementation Status:** Not yet implemented",
        zh: "**描述:** 验证美国社会安全号\n\n\n**语法:** `@verifySSN parameter`\n\n**输入数据类型:** `string`\n\n**是否实现:** 否\n\n在输入数据中检测美国社会安全号码（SSN）。\n\n此指令WGE可以正常解析，但是暂未实现该功能。",
        slug: "verifyssn"
    },
    "@within": {
        en: "**Description:** Value is within the specified string\n\n**Syntax:** `\"@within string\"`\n\n@within is the reverse of @contains: checks if the variable value exists as a substring within the specified parameter string. In other words, it checks if the parameter string contains the variable value. Matching is case sensitive. This is particularly useful for whitelist checks to verify if a value is in the allowed list.\n\n**Example:**\n\n```apache\n# Validate HTTP method is in allowed list\nSecRule REQUEST_METHOD \"!@within GET POST HEAD OPTIONS\" \\\n    \"id:1078,phase:1,deny,msg:'Disallowed HTTP method'\"\n\n# Validate file extension is in whitelist\nSecRule FILES_COMBINED_SIZE \"@gt 0\" \\\n    \"id:1079,phase:2,chain\"\n    SecRule FILES_NAMES \"!@within .jpg .png .gif .pdf\" \\\n        \"deny,msg:'Disallowed file type'\"\n\n# Validate Content-Type is legitimate\nSecRule REQUEST_HEADERS:Content-Type \"!@within application/json application/xml text/plain\" \\\n    \"id:1080,phase:1,deny,msg:'Unsupported Content-Type'\"\n```\n\n**Parameter Type:** `string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 检测输入字符串中是否存在子串与传入参数中任一字符串相同\n\n**语法:** `@within string`\n\n**输入数据类型:** `string`\n\nwithin的实际实现与 pm 相同，所以详细信息可以见 pm 的说明。\n\n**示例:**\n```apache\n# 验证 HTTP 方法是否在允许列表中\nSecRule REQUEST_METHOD \"!@within GET POST HEAD OPTIONS\" \\\n    \"id:1078,phase:1,deny,msg:'不允许的 HTTP 方法'\"\n\n# 验证文件扩展名是否在白名单中\nSecRule FILES_COMBINED_SIZE \"@gt 0\" \\\n    \"id:1079,phase:2,chain\"\n    SecRule FILES_NAMES \"!@within .jpg .png .gif .pdf\" \\\n        \"deny,msg:'不允许的文件类型'\"\n\n# 验证 Content-Type 是否合法\nSecRule REQUEST_HEADERS:Content-Type \"!@within application/json application/xml text/plain\" \\\n    \"id:1080,phase:1,deny,msg:'不支持的 Content-Type'\"\n```",
        slug: "within"
    },
    "@xor": {
        en: "",
        zh: "**描述:** 数值相等\n\n\n**语法:** `@xor string`\n\n**输入数据类型:** `int`\n\n@xor 对变量值进行异或操作，当异或结果非0时匹配成功。传入参数没有宏扩展时会和 eq 一样进行**前缀解析**。\n\n**示例:**\n```apache\n# Content-Lenth和Transfer-Encoding不能同时存在\nSecRule &REQUEST_HEADERS:Content-Lenth \"!@xor %{&REQUEST_HEADERS:Transfer-Encoding}\" \\\n    \"id:1085,phase:3,pass,log,msg:'同时存在Content-Lenth头和Transfer-Encoding头'\"\n```",
        slug: "xor"
    },
};

// 动作 - 39 个条目
export const ACTION_DOCS: Record<string, DocEntry> = {
    "accuracy": {
        en: "**Description:** Accuracy level (1-9)\n\n**Syntax:** `accuracy:level`\n\nThe accuracy action specifies the accuracy level of a rule on a scale of 1 to 9. Higher values indicate rules with fewer false positives. This metadata helps operators understand the reliability of different rules and make informed decisions about which rules to enable in production.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,deny,accuracy:8\"\n```\n\n**Parameter Type:** `int`\n\n**Case Sensitive:** Yes",
        zh: "**描述：** 准确度级别 (1-9)\n\n**语法：** `accuracy:[1-9]`\n\n\n**区分大小写：** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,deny,accuracy:8\"\n```",
        slug: "accuracy"
    },
    "allow": {
        en: "**Description:** Allow request to pass\n\n**Syntax:** `allow | allow:value`\n\nThe allow action permits the current request to pass without blocking. When used alone, it stops rule processing for the current phase and allows the transaction to continue. This is typically used for whitelisting trusted requests or implementing exceptions.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,allow,status:403\"\n```\n\n**Parameter Type:** `none or string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 允许请求通过\n\n**语法:** `allow | allow:phase | allow:request`\n\n**区分大小写:** 是\n\n`allow`：跳过后续所有规则的执行。\n\n`allow:phase`：跳过当前阶段后续所有规则的执行。\n\n`allow:request`：跳过请求阶段所有规则的执行。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,allow,status:403\"\n```",
        slug: "allow"
    },
    "allow:phase": {
        en: "**Description:** Allow request to pass current phase\n\n**Syntax:** `allow:phase`\n\nThe allow:phase action permits the request to bypass remaining rules in the current processing phase only. Rules in subsequent phases will still be evaluated. This provides finer-grained control compared to allow:request. To allow a response, add a rule in the RESPONSE_HEADERS phase and use allow.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,allow:phase\"\n```\n\n**Parameter Type:** `string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 允许请求通过当前阶段\n\n**语法:** `allow:phase`\n\n**区分大小写:** 是\n\nallow:phase 动作允许请求跳过当前处理阶段中的剩余规则，但后续阶段的规则仍会继续执行。相比 allow:request 提供了更细粒度的控制。若要允许响应通过，可在 RESPONSE_HEADERS 阶段添加规则并使用 allow。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,allow:phase\"\n```",
        slug: "allowphase"
    },
    "allow:request": {
        en: "**Description:** Allow the entire request to pass\n\n**Syntax:** `allow:request`\n\nThe allow:request action permits the entire request to bypass all remaining rules. This is useful for whitelisting known-good requests or trusted sources. Once triggered, no further rules in any phase will be evaluated for this request.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,allow:request\"\n```\n\n**Parameter Type:** `string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 允许整个请求通过\n\n**语法:** `allow:request`\n\n**区分大小写:** 是\n\nallow:request 动作允许整个请求跳过所有剩余规则。适用于白名单已知安全的请求或受信来源。一旦触发，该请求在任何阶段都不再执行后续规则。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,allow:request\"\n```",
        slug: "allowrequest"
    },
    "auditlog": {
        en: "**Description:** Log to audit log\n\n**Syntax:** `auditlog | auditlog:value`\n\nThe auditlog action forces the transaction to be recorded in the audit log. The audit log contains detailed information about the request and response, which is useful for forensic analysis and compliance purposes.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,auditlog,status:403\"\n```\n\n**Parameter Type:** `none`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 记录到审计日志\n\n**语法:** `auditlog`\n\n**区分大小写:** 是\n\n此action虽然能够正常解析和设置相关标志，但是其并没有实际上的作用。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,auditlog,status:403\"\n```",
        slug: "auditlog"
    },
    "block": {
        en: "**Description:** Use default disruptive action\n\n**Syntax:** `block | block:value`\n\nThe block action executes the default disruptive action configured by SecDefaultAction. This allows rules to be written without hardcoding a specific action, making it easier to switch between different blocking behaviors (like deny or redirect) across the entire configuration.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,block,status:403\"\n```\n\n**Parameter Type:** `none`\n\n**Case Sensitive:** Yes",
        zh: "**描述：** 使用默认规则结束时动作\n\n**语法：** `block`\n\n**区分大小写：** 是\n\n执行 SecDefaultAction 设置的默认结束时动作，如当设置默认的动作为 deny 时，block 相当于 deny，若没有 SecDefaultAction，则其值为`pass`。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,block,status:403\"\n```",
        slug: "block"
    },
    "capture": {
        en: "**Description:** Capture regex match content\n\n**Syntax:** `capture | capture:value`\n\nThe capture action captures the content matched by a regular expression operator. The captured groups are stored in TX:0 through TX:9 variables, where TX:0 contains the full match and TX:1 through TX:9 contain the captured subgroups. This is useful for extracting and reusing matched data in subsequent rules or log messages.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,capture,status:403\"\n```\n\n**Parameter Type:** `none`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 设置捕获标识。\n\n**语法:** `capture`\n\n**区分大小写:** 是\n\n设置当前规则（不包括父子规则）是否捕获，当规则存在 capture 时匹配完成后会将捕获的内容写入 TX 变量中，常见支持捕获的运算符有rx、within等，detectSQLi 和 detectXSS 也支持，但是其存储的是生成的指纹在`TX:0`中。\n\n正则匹配会根据其捕获组的数量依次存储在`TX:0`、`TX:1`……中（最多100个）。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,capture,status:403\"\n```",
        slug: "capture"
    },
    "chain": {
        en: "**Description:** Chain rules together\n\n**Syntax:** `chain`\n\nThe chain action links rules together so they act as a single compound rule. When rules are chained, subsequent rules only execute if all preceding rules in the chain match. This allows complex multi-condition checks without duplicating code.\n\nKey behaviors:\n- Only the last rule in a chain can contain disruptive actions (deny, block, drop, etc.)\n- Metadata actions (id, msg, tag, etc.) should be on the first rule of the chain\n- If any rule in the chain fails to match, the entire chain stops processing\n- Phase must be consistent across all chained rules\n\n**Example:**\n\n```apache\n# Block requests to /admin from non-local IPs\nSecRule REQUEST_URI \"^/admin\" \\\n    \"id:100,phase:1,chain,deny,status:403,msg:'Admin access from non-local IP'\"\n    SecRule REMOTE_ADDR \"!@ipMatch 127.0.0.1,10.0.0.0/8,192.168.0.0/16\" \"\"\n\n# Multi-condition check: POST to login with empty body\nSecRule REQUEST_METHOD \"@streq POST\" \\\n    \"id:101,phase:2,chain,deny,status:400,msg:'Empty POST to login'\"\n    SecRule REQUEST_URI \"@beginsWith /login\" \"chain\"\n        SecRule REQUEST_BODY \"@eq ''\" \"\"\n```\n\n**Parameter Type:** None\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 链接规则\n\n**语法:** `[!*]?chain`\n\n**区分大小写:** 是\n\nchain 动作将规则链接在一起，使它们作为单个复合规则运行。当规则被链接时，后续规则仅在链中所有前置规则都匹配时才会执行。这允许进行复杂的多条件检查而无需重复代码。\n\n关键行为：\n- 只有链中的最后一条规则可以包含破坏性动作（deny、block、drop 等）\n- 元数据动作（id、msg、tag 等）应放在链的第一条规则上\n- 如果链中任何规则未能匹配，整个链停止处理\n- Phase 必须在所有链接的规则中保持一致\n\n此动作支持不匹配时执行和无论是否匹配都执行:\n- **!chain：** 当前规则匹配失败的情况下才执行子规则。\n- ***chain：** 当前规则无论匹配成功失败都执行子规则。\n\n**示例:**\n\n```apache\n# 阻止从非本地 IP 访问 /admin\nSecRule REQUEST_URI \"^/admin\" \\\n    \"id:100,phase:1,chain,deny,status:403,msg:'非本地 IP 访问管理页面'\"\n    SecRule REMOTE_ADDR \"!@ipMatch 127.0.0.1,10.0.0.0/8,192.168.0.0/16\" \"\"\n\n# 多条件检查：POST 到 login 且请求体为空\nSecRule REQUEST_METHOD \"@streq POST\" \\\n    \"id:101,phase:2,chain,deny,status:400,msg:'空 POST 请求到登录页面'\"\n    SecRule REQUEST_URI \"@beginsWith /login\" \"chain\"\n        SecRule REQUEST_BODY \"@eq ''\" \"\"\n```",
        slug: "chain"
    },
    "ctl": {
        en: "**Description:** Modify runtime configuration\n\n**Syntax:** `ctl:directive=value`\n\nThe ctl (control) action allows runtime modification of processing directives for the current transaction. This enables dynamic rule behavior changes based on request characteristics.\n\nAvailable options:\n- **ctl:auditEngine=On|Off|RelevantOnly** - Change audit logging mode\n- **ctl:auditLogParts=+/-PARTS** - Add or remove audit log parts\n- **ctl:forceRequestBodyVariable=On|Off** - Force REQUEST_BODY variable population\n- **ctl:requestBodyAccess=On|Off** - Enable/disable request body inspection\n- **ctl:requestBodyProcessor=URLENCODED|MULTIPART|XML|JSON** - Set body processor\n- **ctl:ruleEngine=On|Off|DetectionOnly** - Change rule engine mode\n- **ctl:ruleRemoveById=ID** - Remove rule by ID for current transaction\n- **ctl:ruleRemoveByTag=TAG** - Remove rules by tag for current transaction\n- **ctl:ruleRemoveTargetById=ID;VARIABLE** - Remove target from rule\n- **ctl:ruleRemoveTargetByTag=TAG;VARIABLE** - Remove target from rules by tag\n\n**Example:**\n\n```apache\n# Disable rule engine for static files\nSecRule REQUEST_URI \"\\.(css|js|png|jpg|gif)$\" \\\n    \"id:100,phase:1,pass,nolog,ctl:ruleEngine=Off\"\n\n# Enable JSON body processing for API endpoints\nSecRule REQUEST_URI \"^/api/\" \\\n    \"id:101,phase:1,pass,nolog,ctl:requestBodyProcessor=JSON\"\n\n# Remove specific rule for trusted paths\nSecRule REQUEST_URI \"^/trusted/\" \\\n    \"id:102,phase:1,pass,nolog,ctl:ruleRemoveById=942100\"\n\n# Add audit log parts for suspicious requests\nSecRule TX:suspicious \"@eq 1\" \\\n    \"id:103,phase:5,pass,nolog,ctl:auditLogParts=+EKZ\"\n```\n\n**Parameter Type:** `string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 修改运行时配置\n\n**语法:** `ctl:directive=value`\n\n**区分大小写:** 是\n\nctl（控制）动作允许在运行时修改当前事务的处理指令。这使得规则行为能够根据请求特征动态变化。\n\n可用选项：\n- **ctl:parseXmlIntoArgs=On|Off** - 将XML节点值添加到ARGS中\n- **ctl:requestBodyProcessor=URLENCODED|MULTIPART|XML|JSON** - 设置请求体处理器\n- **ctl:ruleRemoveById=ID** - 按 ID 移除当前事务的规则\n- **ctl:ruleRemoveByTag=TAG** - 按标签移除当前事务的规则\n- **ctl:ruleRemoveTargetById=ID;VARIABLE** - 移除指定 ID 规则的对指定参数的检测。\n- **ctl:ruleRemoveTargetByTag=TAG;VARIABLE** - 移除指定 tag 规则对指定参数的检测。\n \n暂未实现：\n- **ctl:auditEngine=On|Off|RelevantOnly** - 更改审计日志模式\n- **ctl:auditLogParts=+/-PARTS** - 添加或移除审计日志部分\n- **ctl:forceRequestBodyVariable=On|Off** - 强制填充 REQUEST_BODY 变量\n- **ctl:requestBodyAccess=On|Off** - 启用/禁用请求体检查\n- **ctl:ruleEngine=On|Off|DetectionOnly** - 更改规则引擎模式\n\n**注意：** \n- parseXmlIntoArgs和 requestBodyProcessor 仅在阶段一（请求头阶段）有效，后续阶段运行这两个命令并不会产生任何效果（除非重新再进行一次阶段二的规则匹配）。\n- ruleRemoveById 等操作规则的只能影响其之后的所有规则，无法影响其之前已经执行的规则。\n\n**示例:**\n\n```apache\n# 对静态文件禁用规则引擎\nSecRule REQUEST_URI \"\\.(css|js|png|jpg|gif)$\" \\\n    \"id:100,phase:1,pass,nolog,ctl:ruleEngine=Off\"\n\n# 为 API 端点启用 JSON 请求体处理\nSecRule REQUEST_URI \"^/api/\" \\\n    \"id:101,phase:1,pass,nolog,ctl:requestBodyProcessor=JSON\"\n\n# 为可信路径移除特定规则\nSecRule REQUEST_URI \"^/trusted/\" \\\n    \"id:102,phase:1,pass,nolog,ctl:ruleRemoveById=942100\"\n\n# 为可疑请求添加审计日志部分\nSecRule TX:suspicious \"@eq 1\" \\\n    \"id:103,phase:5,pass,nolog,ctl:auditLogParts=+EKZ\"\n```",
        slug: "ctl"
    },
    "deny": {
        en: "**Description:** Deny request\n\n**Syntax:** `deny`\n\nThe deny action is the most commonly used disruptive action, used to immediately terminate processing of the current request and return an error response. When a rule matches, WGE stops processing subsequent rules and returns the specified HTTP status code to the client (default 403 Forbidden).\n\nThe deny action is typically used with the status action to specify a custom response status code. In anomaly scoring mode, deny is usually only used for the final scoring threshold check rule.\n\n**Example:**\n\n```apache\n# Basic deny - returns default 403 status code\nSecRule ARGS \"@detectSQLi\" \"id:1,phase:2,deny,msg:'SQL Injection Detected'\"\n\n# Specify custom status code\nSecRule REQUEST_URI \"@contains ../../../\" \\\n    \"id:2,phase:1,deny,status:400,msg:'Path Traversal Attack'\"\n\n# Threshold check in anomaly scoring mode\nSecRule TX:anomaly_score \"@ge 5\" \\\n    \"id:3,phase:2,deny,status:403,msg:'Anomaly Score Exceeded: %{TX.anomaly_score}'\"\n\n# Return 503 for service temporarily unavailable\nSecRule IP:request_count \"@gt 1000\" \\\n    \"id:4,phase:1,deny,status:503,msg:'Request Rate Limit'\"\n```\n\n**Parameter Type:** `none`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 匹配成功停止处理规则，然后直接拒绝。\n\n\n**语法:** `deny`\n\n**区分大小写:** 是\n\ndeny 是最常用的规则结束时动作，用于立即终止当前请求的处理并返回错误响应。当规则匹配时，WGE 将停止处理后续规则，并向客户端返回指定的 HTTP 状态码（默认 403 Forbidden，这实际取决于服务器或者连接器的处理方式）。\n\ndeny 动作通常与 status 动作配合使用，以指定自定义的响应状态码。在异常评分模式中，deny 通常只用于最终的评分阈值检查规则。\n\n\n**示例:**\n\n\n```apache\n# 基本拒绝 - 返回默认 403 状态码\nSecRule ARGS \"@detectSQLi\" \"id:1,phase:2,deny,msg:'SQL 注入检测'\"\n\n# 指定自定义状态码\nSecRule REQUEST_URI \"@contains ../../../\" \\\n    \"id:2,phase:1,deny,status:400,msg:'路径遍历攻击'\"\n\n# 异常评分模式中的阈值检查\nSecRule TX:anomaly_score \"@ge 5\" \\\n    \"id:3,phase:2,deny,status:403,msg:'异常评分超标: %{TX.anomaly_score}'\"\n\n# 返回 503 表示服务暂时不可用\nSecRule IP:request_count \"@gt 1000\" \\\n    \"id:4,phase:1,deny,status:503,msg:'请求频率限制'\"\n```",
        slug: "deny"
    },
    "drop": {
        en: "**Description:** Drop connection\n\n**Syntax:** `drop | drop:value`\n\nThe drop action immediately terminates the TCP connection without sending a response. This is more aggressive than deny and is typically used for severe attacks where you want to minimize resource usage and avoid any response to the attacker.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,drop,status:403\"\n```\n\n**Parameter Type:** `none`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 丢弃连接\n\n**语法:** `drop`\n\n**区分大小写:** 是\n\n在WGE内部关于 drop 和 deny 的处理逻辑是一致的，Modsecurity中是直接发送FIN包关闭TCP连接，这个功能需要使用WGE的连接器或者服务器判断WGE是否drop状态并做相应的操作。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,drop,status:403\"\n```",
        slug: "drop"
    },
    "exec": {
        en: "**Description:** Execute external script or command\n\n**Syntax:** `exec:/path/to/script`\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\nThe exec action executes an external script or command when the rule matches. This can be used for custom logging, alerting, or integration with external systems. The script is executed asynchronously to avoid blocking request processing.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@detectSQLi\" \"id:1001,deny,exec:/usr/local/bin/alert_admin.sh\"\n```\n\n**Parameter Type:** `string (file path)`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 执行外部脚本或命令\n\n**语法:** `exec:path`\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\nModsecurity中此 action 用来执行外部脚本/二进制文件。\n\n此指令并未在WGE中实现，无法使用。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,exec::/usr/local/apache/bin/test.lua,status:403\"\n```",
        slug: "exec"
    },
    "expirevar": {
        en: "**Description:** Set variable expiration time\n\n**Syntax:** `expirevar:collection.variable=seconds`\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\nThe expirevar action sets a time-to-live (TTL) for a collection variable. After the specified number of seconds, the variable is automatically removed. This is commonly used for implementing temporary bans, rate limiting windows, and session-based tracking.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx attack\" \"id:1001,pass,setvar:ip.blocked=1,expirevar:ip.blocked=600\"\n```\n\n**Parameter Type:** `string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 设置变量在指定时间（秒为单位）后过期。\n\n**语法:** `expirevar:variable=INT`\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n此指令并未在WGE中实现，无法使用。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,expirevar:session.suspicious=3600,status:403\"\n```",
        slug: "expirevar"
    },
    "id": {
        en: "**Description:** Unique rule identifier (required)\n\n**Syntax:** `id:number`\n\nThe id action assigns a unique numeric identifier to a rule. This is a mandatory action for every rule. Rule IDs are used for logging, debugging, and rule management. Each rule must have a unique ID within the configuration.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,deny\"\n```\n\n**Parameter Type:** `int`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 规则唯一标识符 (必需)\n\n**语法:** `id: [']? INT [']?`\n\n**区分大小写:** 是\n\n对于一个SecRule规则，其必须存在一个 id 动作，且这个必须在最上层父规则的动作中，用于作为其唯一标识符，id 必须是正整数。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,deny\"\n```",
        slug: "id"
    },
    "initcol": {
        en: "**Description:** Initialize persistent collection\n\n**Syntax:** `initcol:collection=key`\n\nThe initcol action initializes persistent collections (IP, SESSION, USER, RESOURCE, GLOBAL). Persistent collections allow saving and sharing data across multiple requests, forming the foundation for implementing IP rate limiting, session tracking, user behavior analysis, and similar features.\n\n**Available Collections:**\n\n- **IP** - Persistent storage based on client IP address\n- **SESSION** - Persistent storage based on session ID\n- **USER** - Persistent storage based on user ID\n- **RESOURCE** - Persistent storage based on resource identifier\n- **GLOBAL** - Global persistent storage\n\nCollection data is automatically loaded from storage during rule execution and automatically persisted after modification.\n\n**Example:**\n\n```apache\n# Initialize IP collection for rate limiting\nSecAction \"id:1,phase:1,pass,nolog,initcol:IP=%{REMOTE_ADDR}\"\n\n# IP rate limiting implementation\nSecRule IP:request_count \"@gt 100\" \\\n    \"id:2,phase:1,deny,msg:'IP request rate exceeded'\"\nSecRule REQUEST_URI \"@unconditionalMatch\" \\\n    \"id:3,phase:1,pass,nolog,setvar:IP.request_count=+1,\\\n    expirevar:IP.request_count=60\"\n\n# Initialize session collection\nSecRule REQUEST_COOKIES:session_id \"@rx ^[a-f0-9]{32}$\" \\\n    \"id:4,phase:1,pass,nolog,initcol:SESSION=%{REQUEST_COOKIES.session_id}\"\n\n# Initialize global collection\nSecAction \"id:5,phase:1,pass,nolog,initcol:GLOBAL=global\"\n```\n\n**Parameter Type:** `string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 初始化持久化集合\n\n\n**语法:** `initcol:collection.string=key`\n\n\ninitcol 动作用于初始化持久化集合（IP、SESSION、USER、RESOURCE、GLOBAL）。持久化集合允许在多个请求之间保存和共享数据，是实现 IP 频率限制、会话跟踪、用户行为分析等功能的基础。\n\n\n**这里的collection可选:**\n\n- **IP** - 基于客户端 IP 地址的持久化存储\n- **SESSION** - 基于会话 ID 的持久化存储\n- **USER** - 基于用户 ID 的持久化存储\n- **RESOURCE** - 基于资源标识的持久化存储\n- **GLOBAL** - 全局持久化存储\n\n但是目前WGE并未实现持久化，也就是说其和 setvar 动作设置的变量没有什么区别。\n\n**区分大小写:** 是\n\n**注意：** 此动作允许控制规则匹配失败后匹配（而不是匹配成功后）。\n\n**示例:**\n\n```apache\n# 初始化 IP 集合用于频率限制\nSecAction \"id:1,phase:1,pass,nolog,initcol:IP=%{REMOTE_ADDR}\"\n\n# 规则匹配失败后执行initcol\nSecRule ARGS \"@rx admin\" \"id:1,phase:1.pass,nolog,!initcol:IP=%{REMOTE_ADDR}\"\n\n# 规则无论是否匹配都执行initcol\nSecRule ARGS \"@rx admin\" \"id:1,phase:1.pass,nolog,*initcol:IP=%{REMOTE_ADDR}\"\n```",
        slug: "initcol"
    },
    "log": {
        en: "**Description:** Log to error log\n\n**Syntax:** `log | log:value`\n\nThe log action records the rule match to the error log. This is the default behavior for most rules, but can be explicitly specified when combined with other actions. The logged message includes rule ID, matched variable, and the configured msg value.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,log,status:403\"\n```\n\n**Parameter Type:** `none`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 规则匹配成功后返回日志。\n\n**语法:** `log`\n\n**区分大小写:** 是\n\n拥有这个 action 的规则在匹配成功后会调用日志回调接口返回日志，由服务器或者连接器写入日志。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,log,status:403\"\n```",
        slug: "log"
    },
    "logdata": {
        en: "**Description:** Log additional data\n\n**Syntax:** `logdata:'data'`\n\nThe logdata action records additional information to the log when a rule matches. This is useful for including context such as the matched value, user information, or other relevant data that helps with incident investigation. The data can include variable expansion using the %{VARNAME} syntax.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx attack\" \"id:1001,deny,logdata:'User: %{REMOTE_ADDR}, Matched: %{MATCHED_VAR}'\"\n```\n\n**Parameter Type:** `string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 记录指定数据到日志。\n\n**语法:** `logdata:'value'`\n\n**区分大小写:** 是\n\n设置规则匹配成功后的上报的日志，其中可以使用宏扩展功能。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,logdata:'the deny ip is %{REMOTE_ADDR}',status:403\"\n```",
        slug: "logdata"
    },
    "maturity": {
        en: "**Description:** Maturity level (1-9)\n\n**Syntax:** `maturity:level`\n\nThe maturity action specifies the maturity level of a rule on a scale of 1 to 9. Higher values indicate rules that have been more thoroughly tested and are considered production-ready. This metadata helps operators understand the stability and reliability of different rules.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,deny,maturity:9\"\n```\n\n**Parameter Type:** `int`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 成熟度级别 (1-9)\n\n**语法:** `maturity:[1-9]`\n\n**区分大小写:** 是\n\n记录该规则的成熟级别，其中9是经过广泛测试，1是全新的实验性质的规则。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,deny,maturity:9\"\n```",
        slug: "maturity"
    },
    "msg": {
        en: "**Description:** Log message\n\n**Syntax:** `msg:'message'`\n\nThe msg action specifies a custom message that will be recorded in the log when the rule matches. This message helps identify the nature of the detected threat and is useful for debugging and security monitoring.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,deny,msg:'SQL Injection Detected'\"\n```\n\n**Parameter Type:** `string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 日志消息\n\n**语法:** `msg:'value'`\n\n**区分大小写:** 是\n\n与 logdata 类似，其同样也支持宏扩展功能。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,deny,msg:'SQL Injection Detected'\"\n\n# 使用宏扩招的msg\nSecRule ARGS \"@rx test2\" \"id:1002,deny,msg:'Deny the ip %{REMOTE_ADDR}'\"\n\n```",
        slug: "msg"
    },
    "multiMatch": {
        en: "**Description:** Execute action for all matches\n\n**Syntax:** `multiMatch | multiMatch:value`\n\nThe multiMatch action causes the rule to be evaluated against each element of a collection variable individually. Without multiMatch, a rule checking ARGS would stop after the first matching argument. With multiMatch, all matching arguments are processed, which is useful when you want to capture or log all offending values.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,multiMatch,status:403\"\n```\n\n**Parameter Type:** `none`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 对每次转换函数生成的结果都执行匹配。\n\n**语法:** `multiMatch`\n\n**参数类型:** `无`\n\n**区分大小写:** 是\n\n每条规则几乎都存在多个转换函数，当不存在动作 multiMatch 时，输入字符串会经过所有转换函数再进行匹配，而加上动作 multiMatch 后，每次转换函数执行后生成的字符串都会尝试匹配。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:none,t:removeNulls,t:lowercase,multiMatch,status:403\"\n```",
        slug: "multimatch"
    },
    "noauditlog": {
        en: "**Description:** Do not log to audit log\n\n**Syntax:** `noauditlog | noauditlog:value`\n\nThe noauditlog action prevents the transaction from being recorded in the audit log even when a rule matches. This is useful for rules that match frequently on known-benign traffic and would otherwise fill up the audit log with noise.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,noauditlog,status:403\"\n```\n\n**Parameter Type:** `none`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 不记录到审计日志\n\n**语法:** `noauditlog`\n\n**区分大小写:** 是\n\n与 auditlog 一样，其在WGE中并不存在实际的意义。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,noauditlog,status:403\"\n```",
        slug: "noauditlog"
    },
    "nolog": {
        en: "**Description:** Do not log to error log\n\n**Syntax:** `nolog | nolog:value`\n\nThe nolog action prevents the rule match from being recorded in the error log. This is typically used for rules that perform internal bookkeeping (such as setting variables) where logging each match would be unnecessary and noisy.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,nolog,status:403\"\n```\n\n**Parameter Type:** `none`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 不记录日志。\n\n**语法:** `nolog`\n\n**区分大小写:** 是\n\n与动作 log 相反，动作 nolog 标明该规则不需要日志，所以即使匹配成功也不会调用日志回调函数。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,nolog,status:403\"\n```",
        slug: "nolog"
    },
    "pass": {
        en: "**Description:** Continue processing subsequent rules\n\n**Syntax:** `pass | pass:value`\n\nThe pass action allows the transaction to continue to the next rule even when the current rule matches. This is a non-disruptive action commonly used in conjunction with setvar to record matches without blocking, enabling anomaly scoring and data collection patterns.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx suspicious\" \"id:1001,pass,setvar:tx.anomaly_score=+3\"\n```\n\n**Parameter Type:** `none`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 匹配成功后仍旧进行后续规则的处理。\n\n**语法:** `pass`\n\n**区分大小写:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,pass,status:403\"\n```",
        slug: "pass"
    },
    "phase": {
        en: "**Description:** Processing phase (1-5)\n\n**Syntax:** `phase:1|2|3|4|5|request|response|logging`\n\nThe phase action specifies which processing phase a rule executes in. WGE processes HTTP transactions through five sequential phases, each triggered when specific data becomes available. Selecting the correct phase is crucial for rule effectiveness.\n\n- **phase:1 (request)** - Request headers phase: Executes immediately after receiving complete request headers, before the request body is read. Used for early decisions such as IP blacklisting and URL detection.\n- **phase:2 (request)** - Request body phase: Executes after the request body is fully received and parsed. Most application-layer rules run in this phase, with access to ARGS, REQUEST_BODY and other variables.\n- **phase:3 (response)** - Response headers phase: Executes after receiving backend response headers, before the response body is read. Used for checking response status codes and headers.\n- **phase:4 (response)** - Response body phase: Executes after the response body is fully received. Used for detecting sensitive data leakage in response content.\n- **phase:5 (logging)** - Logging phase: Executes after the response is sent, cannot block requests. Used only for logging and statistics.\n\n**Example:**\n\n```apache\n# Detect IP blacklist in request headers phase\nSecRule REMOTE_ADDR \"@ipMatch 1.2.3.4\" \"id:1001,phase:1,deny,msg:'IP Blacklisted'\"\n\n# Detect SQL injection in request body phase\nSecRule ARGS \"@detectSQLi\" \"id:1002,phase:2,deny,msg:'SQL Injection Detected'\"\n\n# Detect sensitive data leakage in response body phase\nSecRule RESPONSE_BODY \"@rx \\d{16}\" \"id:1003,phase:4,deny,msg:'Credit Card Number Leaked'\"\n```\n\n**Parameter Type:** `int or string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 处理阶段 (1-5)\n\n\n**语法:** `phase:[1-5]`\n\n**区分大小写:** 是\n\nphase 动作指定规则在哪个处理阶段执行。WGE 在处理 HTTP 事务时会按顺序执行五个阶段，每个阶段在特定数据可用时触发。选择正确的阶段对规则的有效性至关重要。\n\n\n- **phase:1 (request)** - 请求头阶段：在接收完整请求头后立即执行，此时请求体尚未读取。用于早期决策，如 IP 黑名单、URL 检测。\n- **phase:2 (request)** - 请求体阶段：在请求体完全接收并解析后执行。大多数应用层规则在此阶段运行，可访问 ARGS、REQUEST_BODY 等变量。\n- **phase:3 (response)** - 响应头阶段：在接收后端响应头后执行，此时响应体尚未读取。用于检查响应状态码和响应头。\n- **phase:4 (response)** - 响应体阶段：在响应体完全接收后执行。用于检测响应内容中的敏感数据泄露。\n- **phase:5 (logging)** - 日志阶段：在响应发送完成后执行，无法阻止请求。仅用于日志记录和统计。\n\n**注意：** WGE中允许规则的阶段为5，但是其并不会实际执行。\n\n**示例:**\n```apache\n# 在请求头阶段检测 IP 黑名单\nSecRule REMOTE_ADDR \"@ipMatch 1.2.3.4\" \"id:1001,phase:1,deny,msg:'IP 黑名单'\"\n\n# 在请求体阶段检测 SQL 注入\nSecRule ARGS \"@detectSQLi\" \"id:1002,phase:2,deny,msg:'SQL 注入检测'\"\n\n# 在响应体阶段检测敏感数据泄露\nSecRule RESPONSE_BODY \"@rx \\d{16}\" \"id:1003,phase:4,deny,msg:'信用卡号泄露'\"\n```",
        slug: "phase"
    },
    "redirect": {
        en: "**Description:** Redirect to specified URL\n\n**Syntax:** `redirect:url`\n\n**Case Sensitive:** Yes\n\n**Implemented:** No\n\nThe redirect action sends an HTTP redirect response to the client, directing them to a specified URL. This is useful for sending detected attackers to honeypots, warning pages, or blocked pages while providing a better user experience than a simple deny.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@detectSQLi\" \"id:1001,redirect:https://example.com/blocked.html\"\n```\n\n**Parameter Type:** `string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 重定向到指定 URL\n\n**语法:** `redirect:url`\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n此指令并未在WGE中实现，无法使用。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,redirect,status:403\"\n```",
        slug: "redirect"
    },
    "rev": {
        en: "**Description:** Rule revision\n\n**Syntax:** `rev:'revision'`\n\nThe rev action specifies the revision number of a rule. This metadata tracks how many times a rule has been modified, helping with rule lifecycle management and auditing.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,deny,rev:'2'\"\n```\n\n**Parameter Type:** `string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 规则修订版本\n\n**语法:** `rev:'string'`\n\n**参数类型:** `string`\n\n**区分大小写:** 是\n\n设置该规则的目前修订的版本。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,deny,rev:'version 2.1.0'\"\n```",
        slug: "rev"
    },
    "setenv": {
        en: "**Description:** Set environment variable\n\n**Syntax:** `setenv:name=value`\n\nThe setenv action sets an environment variable that can be accessed by backend applications or used in response headers. This is useful for passing security-related information from the WAF to downstream components.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx attack\" \"id:1001,pass,setenv:attack_detected=1\"\n```\n\n**Parameter Type:** `string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 设置Linux/Unix环境变量，如果该变量存在则覆盖。\n\n**信息:** Original Example: `setenv:attack_detected=1`\n\n**语法:** `setenv:'string=(value|%{variable})'`\n\n**区分大小写:** 是\n\n此动作支持不匹配时执行和无论是否匹配都执行。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,setenv:http_proxy=%{REMOTE_ADDR},status:403\"\n\n# 匹配失败后执行\nSecRule ARGS \"@rx test\" \"id:1002,!setenv:http_proxy=%{REMOTE_ADDR},status:403\"\n\n# 无论是否匹配成功都执行\nSecRule ARGS \"@rx test\" \"id:1003,*setenv:http_proxy=%{REMOTE_ADDR},status:403\"\n```",
        slug: "setenv"
    },
    "setrsc": {
        en: "**Description:** Set resource ID\n\n**Syntax:** `setrsc:identifier`\n\nThe setrsc action sets a resource identifier for the current transaction. This identifier is used to initialize and track RESOURCE collection variables, enabling per-resource tracking such as rate limiting specific endpoints or files.\n\n**Example:**\n\n```apache\nSecRule REQUEST_FILENAME \"@rx ^/api/\" \"id:1001,pass,setrsc:%{REQUEST_FILENAME}\"\n```\n\n**Parameter Type:** `string`\n\n**Implementation Status:** Not yet implemented\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 使用作为传入参数提供的密钥初始化RESOURCE集合的特殊用途操作。\n\n**语法:** `setrsc:('string' | %{variable})`\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n此动作支持不匹配时执行和无论是否匹配都执行。\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,setrsc:'abcd1234',status:403\"\n\n# 匹配失败后执行\nSecRule ARGS \"@rx test\" \"id:1002,!setrsc:'abcd1234',status:403\"\n\n# 无论是否匹配成功都执行\nSecRule ARGS \"@rx test\" \"id:1003,*setrsc:'abcd1234',status:403\"\n```",
        slug: "setrsc"
    },
    "setsid": {
        en: "**Description:** Set session ID\n\n**Syntax:** `setsid:identifier`\n\nThe setsid action sets a session identifier for the current transaction. This identifier is used to initialize and track SESSION collection variables, enabling session-based tracking and per-session rate limiting.\n\n**Example:**\n\n```apache\nSecRule REQUEST_COOKIES:session_id \"@rx ^[a-f0-9]{32}$\" \"id:1001,pass,setsid:%{REQUEST_COOKIES.session_id}\"\n```\n\n**Parameter Type:** `string`\n\n**Implementation Status:** Not yet implemented\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 使用传入参数始化SESSION集合。\n\n**语法:** `setsid:('string' | %{variable})`\n\n**区分大小写:** 是\n\n**是否实现:** 暂无\n\n此动作支持不匹配时执行和无论是否匹配都执行。\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,phase:2,setsid:%{REQUEST_COOKIES.PHPSESSID},status:403\"\n\n# 匹配失败后执行\nSecRule ARGS \"@rx test\" \"id:1001,phase:2,!setsid:%{REQUEST_COOKIES.PHPSESSID},status:403\"\n\n# 无论是否匹配成功都执行\nSecRule ARGS \"@rx test\" \"id:1001,phase:2,*setsid:%{REQUEST_COOKIES.PHPSESSID},status:403\"\n```",
        slug: "setsid"
    },
    "setuid": {
        en: "**Description:** Set user ID\n\n**Syntax:** `setuid:identifier`\n\nThe setuid action sets a user identifier for the current transaction. This identifier is used to initialize and track USER collection variables, enabling per-user rate limiting, behavior analysis, and session tracking.\n\n**Example:**\n\n```apache\nSecRule REQUEST_COOKIES:user_id \"@rx ^[a-z0-9]+$\" \"id:1001,pass,setuid:%{REQUEST_COOKIES.user_id}\"\n```\n\n**Parameter Type:** `string`\n\n**Implementation Status:** Not yet implemented\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 使用传入参数初始化USER集合。\n\n**语法:** `setuid:('string' | %{variable})`\n\n**区分大小写:** 是\n\n**是否实现:** 否\n\n此动作支持不匹配时执行和无论是否匹配都执行。\n\n此指令WGE可以正常解析，但是暂未实现该功能。\n\n**示例:**\n\n```apache\nSecRule ARGS:username \".*\" \"phase:2,id:137,t:none,pass,capture,setuid:%{TX.0}\"\n\n# 匹配失败后执行\nSecRule ARGS:username \".*\" \"phase:2,id:137,t:none,pass,capture,!setuid:%{TX.0}\"\n\n# 无论是否匹配成功都执行\nSecRule ARGS:username \".*\" \"phase:2,id:137,t:none,pass,capture,*setuid:%{TX.0}\"\n```",
        slug: "setuid"
    },
    "setvar": {
        en: "**Description:** Set variable\n\n**Syntax:** `setvar:collection.key=value`\n\nThe setvar action creates, modifies, or deletes collection variables. This is a core action for implementing anomaly scoring, state tracking, and passing data between rules. It supports multiple operations:\n\n- **setvar:tx.key=value** - Set variable to specified value\n- **setvar:tx.key=+value** - Increment variable by specified value (numeric addition)\n- **setvar:tx.key=-value** - Decrement variable by specified value\n- **setvar:!tx.key** - Delete variable\n\nMultiple setvar actions can be used in a single rule. Supports macro expansion using %{VARIABLE} to reference other variable values.\n\n**Example:**\n\n```apache\n# Initialize anomaly score\nSecAction \"id:1,phase:1,pass,nolog,setvar:tx.anomaly_score=0\"\n\n# Increment score when attack detected\nSecRule ARGS \"@detectSQLi\" \\\n    \"id:2,phase:2,pass,setvar:tx.anomaly_score=+5,msg:'SQL Injection +5'\"\n\n# Set flag variable\nSecRule REQUEST_URI \"@beginsWith /api\" \\\n    \"id:3,phase:1,pass,nolog,setvar:tx.is_api=1\"\n\n# Set variable using macro expansion\nSecRule REQUEST_HEADERS:User-Agent \"@rx (bot|spider)\" \\\n    \"id:4,phase:1,pass,setvar:tx.client_type=%{MATCHED_VAR}\"\n\n# Delete variable\nSecRule TX:temporary \"@eq 1\" \\\n    \"id:5,phase:5,pass,nolog,setvar:!tx.temporary\"\n```\n\n**Parameter Type:** `string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 设置变量\n\n**区分大小写:** 是\n\nsetvar 动作用于创建、修改或删除集合变量。这是实现异常评分、状态跟踪和规则间数据传递的核心动作。支持多种操作：\n\n- **setvar: [']? [Tt][Xx].key=value [']?** - 设置变量为指定值\n- **setvar: [']? [Tt][Xx].key=+value [']?** - 将变量增加指定值（数值累加）\n- **setvar: [']? [Tt][Xx].key=-value [']?** - 将变量减少指定值\n- **setvar: [']? ![Tt][Xx].key [']?** - 删除变量\n\n可在单条规则中使用多个 setvar 动作。支持宏扩展，可使用 %{VARIABLE} 引用其他变量的值。\n\n此动作支持不匹配时执行和无论是否匹配都执行。\n\n**示例:**\n\n```apache\n# 初始化异常评分\nSecAction \"id:1,phase:1,pass,nolog,setvar:tx.anomaly_score=0\"\n\n# 检测到攻击时增加评分\nSecRule ARGS \"@detectSQLi\" \\\n    \"id:2,phase:2,pass,setvar:tx.anomaly_score=+5,msg:'SQL 注入 +5'\"\n\n# 设置标志变量\nSecRule REQUEST_URI \"@beginsWith /api\" \\\n    \"id:3,phase:1,pass,nolog,setvar:tx.is_api=1\"\n\n# 使用宏扩展设置变量\nSecRule REQUEST_HEADERS:User-Agent \"@rx (bot|spider)\" \\\n    \"id:4,phase:1,pass,setvar:tx.client_type=%{MATCHED_VAR}\"\n\n# 删除变量\nSecRule TX:temporary \"@eq 1\" \\\n    \"id:5,phase:5,pass,nolog,setvar:!tx.temporary\"\n```",
        slug: "setvar"
    },
    "severity": {
        en: "**Description:** Severity level (0-7)\n\n**Syntax:** `severity:CRITICAL|ERROR|WARNING|NOTICE|INFO|DEBUG`\n\nThe severity action assigns a severity level to a rule. This is used for categorizing threats and prioritizing alerts. Common values include CRITICAL for severe attacks, WARNING for suspicious activity, and NOTICE for informational events.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,deny,severity:CRITICAL\"\n```\n\n**Parameter Type:** `int or string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 标志严重级别。\n\n**语法:** `severity:('EMERGENCY|ALERT|CRITICAL|ERROR|WARNING|NOTICE|INFO|DEBUG'|[0-7])`\n\n**区分大小写:** 是\n\n既可使用英文关键词，也可以是使用对应的数字，其对应关系为：\n- **0** - **EMERGENCY**\n- **1** - **ALERT**\n- **2** - **CRITICAL**\n- **3** - **ERROR**\n- **4** - **WARNING**\n- **5** - **NOTICE**\n- **6** - **INFO**\n- **7** - **DEBUG**\n\n**注意：**若使用英文，则需要注意大小写，关键字全为大写。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,deny,severity:CRITICAL\"\n```",
        slug: "severity"
    },
    "skip": {
        en: "**Description:** Skip a specified number of rules\n\n**Syntax:** `skip:N`\n\nThe skip action skips the next N rules in the configuration when the current rule matches. This provides a simple way to conditionally bypass rules without using chains or markers.\n\nImportant notes:\n- N must be a positive integer\n- Skip only works within the same phase\n- Skip counts rules, not chains (each chained rule counts as one rule)\n- For complex conditional logic, consider using `skipAfter` with `SecMarker` instead\n\n**Example:**\n\n```apache\n# Skip next 2 rules if request is from trusted IP\nSecRule REMOTE_ADDR \"@ipMatch 10.0.0.0/8\" \\\n    \"id:100,phase:1,pass,nolog,skip:2\"\nSecRule ARGS \"@detectSQLi\" \"id:101,phase:1,deny,status:403,msg:'SQL Injection'\"\nSecRule ARGS \"@detectXSS\" \"id:102,phase:1,deny,status:403,msg:'XSS Attack'\"\n\n# Skip authentication check for static resources\nSecRule REQUEST_URI \"\\.(css|js|png|jpg)$\" \\\n    \"id:200,phase:1,pass,nolog,skip:1\"\nSecRule REQUEST_HEADERS:Authorization \"!@rx ^Bearer \" \\\n    \"id:201,phase:1,deny,status:401,msg:'Missing auth token'\"\n```\n\n**Parameter Type:** `integer`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 跳过指定数量的规则\n\n**语法:** `skip:INT`\n\n**区分大小写:** 是\n\nskip 动作在当前规则匹配时跳过配置中接下来的多条规则。这提供了一种简单的方式来有条件地绕过规则，而无需使用链或标记。\n\n**注意：**\n- skip 仅在同一阶段内有效，若当前阶段剩余未执行规则小于 skip 的数量时仅会跳过当前阶段剩余所有规则\n- skip 对于父子规则当作一条而不是分别计数\n- 对于复杂的条件逻辑，建议使用 `skipAfter` 配合 `SecMarker`\n\n**示例:**\n\n```apache\n# 如果请求来自可信 IP，跳过接下来的 2 条规则\nSecRule REMOTE_ADDR \"@ipMatch 10.0.0.0/8\" \\\n    \"id:100,phase:1,pass,nolog,skip:2\"\nSecRule ARGS \"@detectSQLi\" \"id:101,phase:1,deny,status:403,msg:'SQL 注入'\"\nSecRule ARGS \"@detectXSS\" \"id:102,phase:1,deny,status:403,msg:'XSS 攻击'\"\n\n# 对静态资源跳过认证检查\nSecRule REQUEST_URI \"\\.(css|js|png|jpg)$\" \\\n    \"id:200,phase:1,pass,nolog,skip:1\"\nSecRule REQUEST_HEADERS:Authorization \"!@rx ^Bearer \" \\\n    \"id:201,phase:1,deny,status:401,msg:'缺少认证令牌'\"\n```",
        slug: "skip"
    },
    "skipAfter": {
        en: "**Description:** Skip to a named marker\n\n**Syntax:** `skipAfter:MARKER_NAME`\n\nThe skipAfter action jumps to a named marker (created with `SecMarker`) when the current rule matches. This provides flexible flow control for conditional rule execution, especially useful for complex rule sets.\n\nAdvantages over `skip`:\n- More readable and maintainable\n- Independent of rule count (can add/remove rules without breaking skip logic)\n- Better for conditional bypassing of rule groups\n- Clearer intent in configuration\n\n**Example:**\n\n```apache\n# Skip all SQL injection checks for trusted paths\nSecRule REQUEST_URI \"^/api/internal/\" \\\n    \"id:100,phase:2,pass,nolog,skipAfter:END_SQLI_CHECKS\"\nSecRule ARGS \"@detectSQLi\" \"id:101,phase:2,deny,status:403,msg:'SQL Injection'\"\nSecRule ARGS \"@rx union.*select\" \"id:102,phase:2,deny,status:403,msg:'SQL Union'\"\nSecRule ARGS \"@rx (\\%27)|(\\')\" \"id:103,phase:2,deny,status:403,msg:'SQL Quote'\"\nSecMarker END_SQLI_CHECKS\n\n# Conditional authentication bypass\nSecRule REQUEST_URI \"^/public/\" \\\n    \"id:200,phase:1,pass,nolog,skipAfter:AFTER_AUTH\"\nSecRule REQUEST_HEADERS:X-API-Key \"!@streq secret123\" \\\n    \"id:201,phase:1,deny,status:403,msg:'Invalid API Key'\"\nSecMarker AFTER_AUTH\n```\n\n**Parameter Type:** `string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 跳转到指定标记\n\n**语法:** `skipAfter:MARKER_NAME`\n\n**区分大小写:** 是\n\nskipAfter 动作在当前规则匹配时跳转到指定的命名标记（使用 `SecMarker` 创建）。这为条件性规则执行提供了灵活的流程控制，特别适用于复杂的规则集。\n\n相比 `skip` 的优势：\n- 更易读和维护\n- 与规则数量无关（可以添加/删除规则而不破坏跳转逻辑）\n- 更适合条件性绕过规则组\n- 配置中意图更清晰\n\n**示例:**\n\n```apache\n# 对可信路径跳过所有 SQL 注入检查\nSecRule REQUEST_URI \"^/api/internal/\" \\\n    \"id:100,phase:2,pass,nolog,skipAfter:END_SQLI_CHECKS\"\nSecRule ARGS \"@detectSQLi\" \"id:101,phase:2,deny,status:403,msg:'SQL 注入'\"\nSecRule ARGS \"@rx union.*select\" \"id:102,phase:2,deny,status:403,msg:'SQL Union'\"\nSecRule ARGS \"@rx (\\%27)|(\\')\" \"id:103,phase:2,deny,status:403,msg:'SQL 引号'\"\nSecMarker END_SQLI_CHECKS\n\n# 条件性认证绕过\nSecRule REQUEST_URI \"^/public/\" \\\n    \"id:200,phase:1,pass,nolog,skipAfter:AFTER_AUTH\"\nSecRule REQUEST_HEADERS:X-API-Key \"!@streq secret123\" \\\n    \"id:201,phase:1,deny,status:403,msg:'无效的 API 密钥'\"\nSecMarker AFTER_AUTH\n```",
        slug: "skipafter"
    },
    "status": {
        en: "**Description:** Set HTTP response status code\n\n**Syntax:** `status:CODE`\n\nThe status action sets the HTTP response status code to be returned when a disruptive action (deny, block, drop) is triggered. This allows fine-grained control over error responses.\n\nCommon status codes:\n- **400** - Bad Request (malformed input)\n- **401** - Unauthorized (authentication required)\n- **403** - Forbidden (access denied)\n- **404** - Not Found (hide resource existence)\n- **405** - Method Not Allowed\n- **429** - Too Many Requests (rate limiting)\n- **500** - Internal Server Error\n- **503** - Service Unavailable\n\n**Example:**\n\n```apache\n# Return 403 Forbidden for SQL injection attempts\nSecRule ARGS \"@detectSQLi\" \\\n    \"id:100,phase:2,deny,status:403,msg:'SQL Injection Blocked'\"\n\n# Return 401 for missing authentication\nSecRule REQUEST_HEADERS:Authorization \"@eq ''\" \\\n    \"id:101,phase:1,deny,status:401,msg:'Authentication Required'\"\n\n# Return 429 for rate limit exceeded\nSecRule IP:request_count \"@gt 100\" \\\n    \"id:102,phase:1,deny,status:429,msg:'Rate Limit Exceeded'\"\n\n# Return 404 to hide admin paths\nSecRule REQUEST_URI \"^/admin\" \"chain,id:103,phase:1,deny,status:404\"\n    SecRule REMOTE_ADDR \"!@ipMatch 10.0.0.0/8\" \"\"\n```\n\n**Parameter Type:** `integer`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 设置 HTTP 响应状态码\n\n**语法:** `status:INT`\n\n**区分大小写:** 是\n\nstatus 动作设置当破坏性动作（deny、block、drop）被触发时返回的 HTTP 响应状态码。这允许对错误响应进行精细控制。\n\n常用状态码：\n- **400** - Bad Request（格式错误的输入）\n- **401** - Unauthorized（需要认证）\n- **403** - Forbidden（访问被拒绝）\n- **404** - Not Found（隐藏资源存在）\n- **405** - Method Not Allowed（方法不允许）\n- **429** - Too Many Requests（请求频率限制）\n- **500** - Internal Server Error（内部服务器错误）\n- **503** - Service Unavailable（服务不可用）\n\n**注意：** WGE本身无法控制服务器响应的状态码，其只能设置内部的状态，如果想要实现拦截且返回指定状态码需要服务器或者连接器实现该功能。\n\n**示例:**\n\n```apache\n# 对 SQL 注入尝试返回 403 Forbidden\nSecRule ARGS \"@detectSQLi\" \\\n    \"id:100,phase:2,deny,status:403,msg:'SQL 注入已阻止'\"\n\n# 对缺少认证返回 401\nSecRule REQUEST_HEADERS:Authorization \"@eq ''\" \\\n    \"id:101,phase:1,deny,status:401,msg:'需要认证'\"\n\n# 对超出速率限制返回 429\nSecRule IP:request_count \"@gt 100\" \\\n    \"id:102,phase:1,deny,status:429,msg:'超出速率限制'\"\n\n# 返回 404 以隐藏管理路径\nSecRule REQUEST_URI \"^/admin\" \"chain,id:103,phase:1,deny,status:404\"\n    SecRule REMOTE_ADDR \"!@ipMatch 10.0.0.0/8\" \"\"\n```",
        slug: "status"
    },
    "t": {
        en: "**Description:** Apply transformation function\n\n**Syntax:** `t:transformationName`\n\nThe t (transformation) action applies a transformation function to the input data before matching against the operator. Transformations normalize or decode data to improve detection accuracy. Multiple transformations can be chained and are applied in order.\n\nCommon transformations:\n- **t:none** - Disable all default transformations\n- **t:lowercase** - Convert to lowercase\n- **t:urlDecode** - URL decode\n- **t:htmlEntityDecode** - Decode HTML entities\n- **t:base64Decode** - Base64 decode\n- **t:removeWhitespace** - Remove all whitespace\n- **t:compressWhitespace** - Normalize whitespace\n- **t:normalizePath** - Normalize path separators\n- **t:cmdLine** - Normalize command line\n- **t:hexDecode** - Decode hex-encoded data\n\nImportant: When using t:none, it should be the first transformation specified to clear inherited transformations from SecDefaultAction.\n\n**Example:**\n\n```apache\n# Detect SQL injection with URL decoding and lowercase\nSecRule ARGS \"@detectSQLi\" \\\n    \"id:100,phase:2,deny,t:urlDecode,t:lowercase,msg:'SQL Injection'\"\n\n# Clear default transformations before applying custom ones\nSecRule ARGS \"@rx <script\" \\\n    \"id:101,phase:2,deny,t:none,t:htmlEntityDecode,t:lowercase,msg:'XSS'\"\n\n# Normalize paths for path traversal detection\nSecRule REQUEST_URI \"@contains ../\" \\\n    \"id:102,phase:1,deny,t:normalizePath,msg:'Path Traversal'\"\n\n# Chain multiple decodings for evasion detection\nSecRule ARGS \"@rx eval\\s*\\(\" \\\n    \"id:103,phase:2,deny,t:urlDecode,t:base64Decode,t:lowercase,msg:'Code Injection'\"\n```\n\n**Parameter Type:** `string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 应用转换函数\n\n**语法:** `t:transformationName`\n\n**区分大小写:** 是\n\nt（转换）动作在与操作符匹配之前对输入数据应用转换函数。转换用于规范化或解码数据以提高检测准确性。可以链式使用多个转换函数，按顺序依次应用。\n\n常用转换函数：\n- **t:none** - 清除所有默认转换\n- **t:lowercase** - 转换为小写\n- **t:urlDecode** - URL 解码\n- **t:htmlEntityDecode** - HTML 实体解码\n- **t:base64Decode** - Base64 解码\n- **t:removeWhitespace** - 移除所有空白字符\n- **t:compressWhitespace** - 规范化空白字符\n- **t:normalizePath** - 规范化路径分隔符\n- **t:cmdLine** - 规范化命令行\n- **t:hexDecode** - 十六进制解码\n\n注意：使用 t:none 时，应将其作为第一个转换函数，以清除从 SecDefaultAction 继承的默认转换。\n\n**示例:**\n\n```apache\n# 使用 URL 解码和小写转换检测 SQL 注入\nSecRule ARGS \"@detectSQLi\" \\\n    \"id:100,phase:2,deny,t:urlDecode,t:lowercase,msg:'SQL Injection'\"\n\n# 清除默认转换后应用自定义转换\nSecRule ARGS \"@rx <script\" \\\n    \"id:101,phase:2,deny,t:none,t:htmlEntityDecode,t:lowercase,msg:'XSS'\"\n\n# 规范化路径以检测路径遍历\nSecRule REQUEST_URI \"@contains ../\" \\\n    \"id:102,phase:1,deny,t:normalizePath,msg:'Path Traversal'\"\n\n# 链式多重解码以检测编码绕过\nSecRule ARGS \"@rx eval\\s*\\(\" \\\n    \"id:103,phase:2,deny,t:urlDecode,t:base64Decode,t:lowercase,msg:'Code Injection'\"\n```",
        slug: "t"
    },
    "tag": {
        en: "**Description:** Rule tag\n\n**Syntax:** `tag:'tagname'`\n\nThe tag action assigns a tag to a rule for categorization and filtering purposes. Multiple tags can be assigned to a single rule. Tags are useful for organizing rules by attack type, compliance standard, or any other classification scheme.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,deny,tag:'attack-sqli'\"\n```\n\n**Parameter Type:** `string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 为规则指定标签。\n\n**语法:** `tag:'string'`\n\n**区分大小写:** 是\n\n这个标签可以被 SecRuleRemoveByTag 等使用，如果需要大批量一次操作多个规则，可以用动作 tag 表示它们。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,deny,tag:'attack-sqli'\"\n```",
        slug: "tag"
    },
    "ver": {
        en: "**Description:** Rule version\n\n**Syntax:** `ver:'version'`\n\nThe ver action specifies the version of a rule or rule set. This metadata is useful for tracking rule updates and managing different versions of rule sets across environments.\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,deny,ver:'1.0.0'\"\n```\n\n**Parameter Type:** `string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 指定规则集版本。\n\n**语法:** `ver:'version'`\n\n**区分大小写:** 是\n\n设置规则集的版本，与 rev 不同的时 rev 标注的是单条规则的版本，而 ver 标明的是规则所在规则集的版本。\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,deny,ver:'1.0.0'\"\n```",
        slug: "ver"
    },
    "xmlns": {
        en: "**Description:** Define XML namespace for XPath expressions\n\n**Syntax:** `xmlns:prefix=namespaceURI`\n\nThe xmlns action registers an XML namespace prefix for use in XPath expressions when inspecting XML request bodies. This is required when the XML document uses namespaces and you need to query elements within those namespaces using the XML variable.\n\nNote: This action is used in conjunction with the XML variable and XPath-based operators.\n\n**Example:**\n\n```apache\n# Register SOAP namespace and detect specific SOAP actions\nSecRule REQUEST_HEADERS:Content-Type \"@contains text/xml\" \\\n    \"id:100,phase:1,pass,nolog,xmlns:soap=http://schemas.xmlsoap.org/soap/envelope/\"\n\nSecRule XML:/soap:Envelope/soap:Body/* \"@rx malicious\" \\\n    \"id:101,phase:2,deny,status:403,msg:'Malicious SOAP content'\"\n\n# Multiple namespace registration\nSecAction \"id:200,phase:1,pass,nolog,\\\n    xmlns:wsse=http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd,\\\n    xmlns:wsu=http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd\"\n\n# Check for WS-Security headers\nSecRule XML:/soap:Envelope/soap:Header/wsse:Security \"!@rx .\" \\\n    \"id:201,phase:2,deny,status:401,msg:'Missing WS-Security header'\"\n```\n\n**Parameter Type:** `string`\n\n**Case Sensitive:** Yes",
        zh: "**描述:** 为 XPath 表达式定义 XML 命名空间\n\n**语法:** `xmlns:string`\n\n**区分大小写:** 是\n\n此指令WGE可以正常解析，但是暂未实现该功能。",
        slug: "xmlns"
    },
};

// 转换函数 - 38 个条目
export const TRANSFORMATION_DOCS: Record<string, DocEntry> = {
    "t:base64Decode": {
        en: "**Description:** Decodes a ``Base64``-encoded string.\n\n**Syntax:** `t:base64Decode`\n\n**Implemented:** Yes\n\n**Example:**\n```apache\n# Detect Base64-encoded attack payloads\nSecRule ARGS:data \"@rx (eval|exec|system)\" \\\n    \"id:1,phase:2,t:base64Decode,deny,msg:'Base64-encoded code execution detected'\"\n\n# Original input: ZXZhbChiYXNlNjRfZGVjb2RlKCR4KSk=\n# After decoding: eval(base64_decode($x))\n```",
        zh: "**描述:** 对字符串进行 ``Base64`` 解码。\n\n**语法:** `t:base64Decode`\n\n**是否实现:** 是\n\n**示例:**\n```apache\n# 检测 Base64 编码的攻击载荷\nSecRule ARGS:data \"@rx (eval|exec|system)\" \\\n    \"id:1,phase:2,t:base64Decode,deny,msg:'Base64 编码的代码执行检测'\"\n\n# 原始输入: ZXZhbChiYXNlNjRfZGVjb2RlKCR4KSk=\n# 解码后: eval(base64_decode($x))\n```",
        slug: "tbase64decode"
    },
    "t:base64DecodeExt": {
        en: "**Description:** Decodes a ``Base64``-encoded string.\n\nSimilar to ``t:base64Decode``, but this transformation function uses a lenient implementation that ignores invalid characters.\n\n**Syntax:** `t:base64DecodeExt`\n\n**Implemented:** No\n\nWGE can parse this transformation function, but the functionality is not yet implemented.",
        zh: "**描述:** 对字符串进行 ``Base64`` 解码。\n\n与 ``t:base64Decode`` 类似，但此转换函数使用宽松的实现，会忽略无效字符。\n\n**语法:** `t:base64DecodeExt`\n\n**是否实现:** 否\n\n此转换函数 WGE 支持解析，但暂未支持功能实现。",
        slug: "tbase64decodeext"
    },
    "t:base64Encode": {
        en: "**Description:** Encodes a string using ``Base64``.\n\n**Syntax:** `t:base64Encode`\n\n**Implemented:** No\n\nWGE can parse this transformation function, but the functionality is not yet implemented.",
        zh: "**描述:** 对字符串进行 ``Base64`` 编码。\n\n**语法:** `t:base64Encode`\n\n**是否实现:** 否\n\n此转换函数 WGE 支持解析，但暂未支持功能实现。",
        slug: "tbase64encode"
    },
    "t:cmdline": {
        en: "**Description:** Normalizes a string as command line arguments.\n\nThis transformation function processes the input string in the following ways:\n\n- Remove all backslashes ``\\``\n- Remove all double quotes ``\"``\n- Remove all single quotes ``'``\n- Remove all carets ``^``\n- Remove spaces before slashes ``/``\n- Remove spaces before left parentheses ``(``\n- Replace commas ``,`` and semicolons ``;`` with spaces\n- Compress consecutive whitespace (including tabs, newlines) into a single space\n- Convert characters to lowercase\n\n**Syntax:** `t:cmdline`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\n# Detect command injection\nSecRule ARGS \"@rx (cat|ls|wget|curl|nc|bash)\" \\\n    \"id:1,phase:2,t:cmdline,t:lowercase,deny,msg:'Command injection detected'\"\n\n# Original input: c^a\"t /e't'c/p\\asswd\n# After processing: cat /etc/passwd\n```",
        zh: "**描述:** 对字符串进行命令行规范化。\n\n此转换函数通过以下方式处理输入字符串：\n\n- 删除所有斜杠 ``\\``\n- 删除所有双引号 ``\"``\n- 删除所有单引号 ``'``\n- 删除所有脱字符 ``^``\n- 删除斜杠 ``/`` 之前的空格\n- 删除左括号 ``(`` 之前的空格\n- 替换逗号 ``,`` 和 分号 ``;`` 为空格\n- 压缩连续空格(包括制表符、换行符)为一个空格\n- 字符转小写\n\n**语法:** `t:cmdline`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\n# 检测命令注入\nSecRule ARGS \"@rx (cat|ls|wget|curl|nc|bash)\" \\\n    \"id:1,phase:2,t:cmdline,t:lowercase,deny,msg:'命令注入检测'\"\n\n# 原始输入: c^a\"t /e't'c/p\\asswd\n# 处理后: cat /etc/passwd\n```",
        slug: "tcmdline"
    },
    "t:compressWhitespace": {
        en: "**Description:** Compresses whitespace in a string, reducing consecutive spaces to a single space.\n\nThis transformation function processes the input string in the following ways:\n - Converts all whitespace characters (including ``0x20, \\f, \\t, \\n, \\r, \\v, 0xa0``) to spaces\n - Compresses consecutive spaces into a single space\n\n**Syntax:** `t:compressWhitespace`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:compressWhitespace\"\n```",
        zh: "**描述:** 对字符串进行空格压缩，连续空格压缩为一个空格。\n\n此转换函数通过以下方式处理输入字符串：\n - 将所有空白符(包括``0x20, \\f, \\t, \\n, \\r, \\v, 0xa0``) 转换为空格\n - 将连续空格压缩为一个空格\n\n**语法:** `t:compressWhitespace`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:compressWhitespace\"\n```",
        slug: "tcompresswhitespace"
    },
    "t:cssDecode": {
        en: "**Description:** Decodes ``CSS`` escape sequences in a string.\n\n**Syntax:** `t:cssDecode`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\n# Detect CSS injection attacks\nSecRule ARGS \"@rx expression|javascript\" \\\n    \"id:1,phase:2,t:cssDecode,t:lowercase,deny,msg:'CSS injection detected'\"\n\n# Original input: \\65\\78\\70\\72\\65\\73\\73\\69\\6f\\6e (CSS-encoded \"expression\")\n# After decoding: expression\n```",
        zh: "**描述:** 对字符串进行 ``CSS`` 转义序列还原。\n\n**语法:** `t:cssDecode`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\n# 检测 CSS 注入攻击\nSecRule ARGS \"@rx expression|javascript\" \\\n    \"id:1,phase:2,t:cssDecode,t:lowercase,deny,msg:'CSS 注入检测'\"\n\n# 原始输入: \\65\\78\\70\\72\\65\\73\\73\\69\\6f\\6e (CSS 编码的 \"expression\")\n# 解码后: expression\n```",
        slug: "tcssdecode"
    },
    "t:escapeSeqDecode": {
        en: "**Description:** Decodes ``ANSI C`` escape sequences in a string back to their actual characters.\n\nThis transformation function decodes ``ANSI C`` escape sequences: \\a, \\b, \\f, \\n, \\r, \\t, \\v, \\\\, \\?, \\', \\\", \\xHH (hexadecimal), and \\0OOO (octal). Invalid encodings are preserved in the output unchanged.\n\n**Syntax:** `t:escapeSeqDecode`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:escapeSeqDecode\"\n```",
        zh: "**描述:** 对字符串中的 ``ANSI C`` 风格转义序列还原成真实字符。\n\n此转换函数会还原 ``ANSI C`` 转义序列：\\a、\\b、\\f、\\n、\\r、\\t、\\v、\\\\、\\?、\\'、\\\"、\\xHH（十六进制）、\\0OOO（八进制）。无效编码将保留在转换结果中。\n\n**语法:** `t:escapeSeqDecode`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:escapeSeqDecode\"\n```",
        slug: "tescapeseqdecode"
    },
    "t:hexDecode": {
        en: "**Description:** Decodes a hexadecimal-encoded string.\n\n**Syntax:** `t:hexDecode`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:hexDecode\"\n```",
        zh: "**描述:** 对字符串进行十六进制解码。\n\n**语法:** `t:hexDecode`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:hexDecode\"\n```",
        slug: "thexdecode"
    },
    "t:hexEncode": {
        en: "**Description:** Encodes a string using hexadecimal encoding.\n\n**Syntax:** `t:hexEncode`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx 74657374\" \"id:1001,t:hexEncode\"\n# test encoded with hexEncode becomes 74657374\n```",
        zh: "**描述:** 对字符串进行十六进制编码。\n\n**语法:** `t:hexEncode`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx 74657374\" \"id:1001,t:hexEncode\"\n# test 经 hexEncode 后为 74657374\n```",
        slug: "thexencode"
    },
    "t:htmlEntityDecode": {
        en: "**Description:** Decodes ``HTML entity`` escape sequences in a string.\n\n**Syntax:** `t:htmlEntityDecode`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:htmlEntityDecode\"\n```",
        zh: "**描述:** 对字符串进行 ``HTML实体`` 转义序列还原。\n\n**语法:** `t:htmlEntityDecode`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:htmlEntityDecode\"\n```",
        slug: "thtmlentitydecode"
    },
    "t:jsDecode": {
        en: "**Description:** Decodes ``JavaScript`` escape sequences in a string.\n\nIf the ``\\uHHHH`` code point is in the ``FF01-FF5E`` range (fullwidth ASCII), the high byte is used to detect and adjust the low byte. Otherwise, only the low byte is used and the high byte is zeroed (which may result in information loss).\n\n**Syntax:** `t:jsDecode`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:jsDecode\"\n```",
        zh: "**描述:** 对字符串进行 ``JavaScript`` 转义序列还原。\n\n如果 ``\\uHHHH`` 码点在 ``FF01-FF5E`` 范围内（全角 ASCII），则使用高字节来检测和调整低字节。否则，仅使用低字节，并将高字节置零（可能导致信息丢失）。\n\n**语法:** `t:jsDecode`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:jsDecode\"\n```",
        slug: "tjsdecode"
    },
    "t:length": {
        en: "**Description:** Calculates the length of a string.\n\n**Syntax:** `t:length`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx 128\" \"id:1001,t:length\"\n```",
        zh: "**描述:** 对字符串计算长度。\n\n**语法:** `t:length`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx 128\" \"id:1001,t:length\"\n```",
        slug: "tlength"
    },
    "t:lowercase": {
        en: "**Description:** Converts uppercase characters to lowercase in a string.\n\n**Syntax:** `t:lowercase`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:lowercase\"\n```",
        zh: "**描述:** 对字符串进行大写转小写。\n\n**语法:** `t:lowercase`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:lowercase\"\n```",
        slug: "tlowercase"
    },
    "t:md5": {
        en: "**Description:** Calculates the ``MD5`` hash of a string.\n\n**Syntax:** `t:md5`\n\n**Implemented:** No\n\nWGE can parse this transformation function, but the functionality is not yet implemented.",
        zh: "**描述:** 对字符串计算 ``MD5`` 哈希。\n\n**语法:** `t:md5`\n\n**是否实现:** 否\n\n此转换函数 WGE 支持解析，但暂未支持功能实现。",
        slug: "tmd5"
    },
    "t:none": {
        en: "**Description:** Clears the transformation chain.\n\n``t:none`` clears all transformation functions that appear before ``t:none`` in the transformation chain. After using ``t:none``, only transformation functions explicitly specified after it will be applied.\n\n**Syntax:** `t:none`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\n# Assume default action includes t:lowercase,t:urlDecode\nSecDefaultAction \"phase:2,log,pass,t:lowercase,t:urlDecode\"\n\n# This rule inherits default transformations\nSecRule ARGS \"@rx admin\" \"id:1,deny,msg:'admin detected'\"\n\n# Use t:none to clear default transformations, apply only t:base64Decode\nSecRule ARGS:encoded \"@rx admin\" \\\n    \"id:2,t:none,t:base64Decode,deny,msg:'admin detected in Base64'\"\n\n# Apply no transformations at all\nSecRule REQUEST_BODY \"@rx ^\\{\" \\\n    \"id:3,t:none,pass,setvar:tx.is_json=1\"\n```",
        zh: "**描述:** 用于清除转换链。\n\n``t:none`` 用于清除转换链里位于 ``t:none`` 之前的所有转换函数。当使用 ``t:none`` 后，只有在其之后显式指定的转换函数才会被应用。\n\n**语法:** `t:none`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\n# 假设默认动作包含 t:lowercase,t:urlDecode\nSecDefaultAction \"phase:2,log,pass,t:lowercase,t:urlDecode\"\n\n# 此规则会继承默认转换\nSecRule ARGS \"@rx admin\" \"id:1,deny,msg:'检测到 admin'\"\n\n# 使用 t:none 清除默认转换，仅使用 t:base64Decode\nSecRule ARGS:encoded \"@rx admin\" \\\n    \"id:2,t:none,t:base64Decode,deny,msg:'Base64 中检测到 admin'\"\n\n# 完全不进行任何转换\nSecRule REQUEST_BODY \"@rx ^\\{\" \\\n    \"id:3,t:none,pass,setvar:tx.is_json=1\"\n```",
        slug: "tnone"
    },
    "t:normalisePath": {
        en: "**Description:** Normalizes ``Linux`` path in a string.\n\nThis transformation function normalizes the input string by removing consecutive slashes, current directory references (``.``), and parent directory references (``..``), except when located at the beginning of the string.\n\n**Syntax:** `t:normalisePath`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:normalisePath\"\n```",
        zh: "**描述:** 对字符串进行 ``Linux`` 路径规范化。\n\n此转换函数会对输入字符串进行规范化，去除连续的斜杠、当前目录引用（``.``）以及上级目录引用（``..``），但位于字符串开头的除外。\n\n**语法:** `t:normalisePath`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:normalisePath\"\n```",
        slug: "tnormalisepath"
    },
    "t:normalisePathWin": {
        en: "**Description:** Normalizes ``Windows`` path in a string.\n\nThis transformation function is similar to `t:normalisePath`, but first converts all backslashes ``\\`` to forward slashes ``/``.\n\n**Syntax:** `t:normalisePathWin`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:normalisePathWin\"\n```",
        zh: "**描述:** 对字符串进行 ``Windows`` 路径规范化。\n\n此转换函数与 `t:normalisePath` 相似，但会先把所有反斜杠 ``\\`` 转换为正斜杠 ``/``。\n\n**语法:** `t:normalisePathWin`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:normalisePathWin\"",
        slug: "tnormalisepathwin"
    },
    "t:normalizePath": {
        en: "**Description:** Normalizes ``Linux`` path in a string.\n\nSame as `t:normalisePath`.\n\n**Syntax:** `t:normalizePath`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:normalizePath\"\n```",
        zh: "**描述:** 对字符串进行 ``Linux`` 路径规范化。\n\n同 `t:normalisePath`。\n\n**语法:** `t:normalizePath`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:normalizePath\"\n```",
        slug: "tnormalizepath"
    },
    "t:normalizePathWin": {
        en: "**Description:** Normalizes ``Linux`` path in a string.\n\nSame as `t:normalisePathWin`.\n\n**Syntax:** `t:normalizePathWin`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:normalizePathWin\"\n```",
        zh: "**描述:** 对字符串进行 ``Linux`` 路径规范化。\n\n同 `t:normalisePathWin`。\n\n**语法:** `t:normalizePathWin`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:normalizePathWin\"",
        slug: "tnormalizepathwin"
    },
    "t:parityEven7bit": {
        en: "**Description:** Calculates even parity bit based on ``7``-bit data and overwrites the ``8th`` bit of each target byte with the calculated parity bit.\n\n**Syntax:** `t:parityEven7bit`\n\n**Implemented:** No\n\nWGE can parse this transformation function, but the functionality is not yet implemented.",
        zh: "**描述:** 基于 ``7`` 位有效数据计算偶校验位，并用计算出的校验位覆盖每个目标字节的第 ``8`` 位。\n\n**语法:** `t:parityEven7bit`\n\n**是否实现:** 否\n\n此转换函数 WGE 支持解析，但暂未支持功能实现。",
        slug: "tparityeven7bit"
    },
    "t:parityOdd7bit": {
        en: "**Description:** Calculates odd parity bit based on ``7``-bit data and overwrites the ``8th`` bit of each target byte with the calculated parity bit.\n\n**Syntax:** `t:parityOdd7bit`\n\n**Implemented:** No\n\nWGE can parse this transformation function, but the functionality is not yet implemented.",
        zh: "**描述:** 基于 ``7`` 位有效数据计算奇校验位，并用计算出的校验位覆盖每个目标字节的第 ``8`` 位。\n\n**语法:** `t:parityOdd7bit`\n\n**是否实现:** 否\n\n此转换函数 WGE 支持解析，但暂未支持功能实现。",
        slug: "tparityodd7bit"
    },
    "t:parityZero7bit": {
        en: "**Description:** Forces the ``8th`` bit of each target byte to zero (zero parity bit) based on ``7``-bit data, allowing ``7``-bit data containing odd/even parity bits to be inspected as ``ASCII7`` data.\n\n**Syntax:** `t:parityZero7bit`\n\n**Implemented:** No\n\nWGE can parse this transformation function, but the functionality is not yet implemented.",
        zh: "**描述:** 基于 ``7`` 位有效数据将每个目标字节的第 ``8`` 位强制置零（零校验位），从而使包含奇/偶校验位的 ``7`` 位数据能够按 ``ASCII7`` 数据进行检测。\n\n**语法:** `t:parityZero7bit`\n\n**是否实现:** 否\n\n此转换函数 WGE 支持解析，但暂未支持功能实现。",
        slug: "tparityzero7bit"
    },
    "t:removeComments": {
        en: "**Description:** Removes comment blocks from a string.\n\nThis transformation function removes the following comment blocks from the input string:\n- ``/**/``\n- ``<!---->``\n- ``--``\n- ``#``\n\n**Syntax:** `t:removeComments`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:removeComments\"\n```",
        zh: "**描述:** 对字符串移除注释块。\n\n此转换函数会对输入字符串移除下列注释块：\n- ``/**/``\n- ``<!---->``\n- ``--``\n- ``#``\n\n**语法:** `t:removeComments`  \n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:removeComments\"\n```",
        slug: "tremovecomments"
    },
    "t:removeCommentsChar": {
        en: "**Description:** Removes comment characters from a string.\n\nThis transformation function removes the following comment characters from the input string:\n- ``--``\n- ``#``\n- ``/*``\n- ``*/``\n- ``<!--``\n\n**Syntax:** `t:removeCommentsChar`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:removeCommentsChar\"\n```",
        zh: "**描述:** 对字符串移除注释字符。\n\n此转换函数会对输入字符串移除下列注释字符：\n- ``--``\n- ``#``\n- ``/*``\n- ``*/``\n- ``<!--``\n\n**语法:** `t:removeCommentsChar`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:removeCommentsChar\"\n```",
        slug: "tremovecommentschar"
    },
    "t:removeNulls": {
        en: "**Description:** Removes ``NULL`` characters from a string.\n\nThis transformation function removes all ``NULL (0x00)`` characters from the input string.\n\n**Syntax:** `t:removeNulls`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:removeNulls\"\n```",
        zh: "**描述:** 对字符串移除 ``NULL`` 字符\n\n此转换函数会对输入字符串移除所有 ``NULL（0x00）`` 字符。\n\n**语法:** `t:removeNulls`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:removeNulls\"\n```",
        slug: "tremovenulls"
    },
    "t:removeWhitespace": {
        en: "**Description:** Removes whitespace characters from a string.\n\nThis transformation function removes all ``\\x20\\f\\t\\n\\r\\v\\xA0`` characters from the input string.\n\n**Syntax:** `t:removeWhitespace`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:removeWhitespace\"\n```",
        zh: "**描述:** 对字符串移除空白字符。\n\n此转换函数会对输入字符串移除所有 ``\\x20\\f\\t\\n\\r\\v\\xA0`` 字符。\n\n**语法:** `t:removeWhitespace`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:removeWhitespace\"\n```",
        slug: "tremovewhitespace"
    },
    "t:replaceComments": {
        en: "**Description:** Replaces comment blocks in a string with spaces.\n\nThis transformation function replaces comment blocks enclosed by ``/**/`` in the input string with spaces. Incomplete comments are also replaced with a single space. However, standalone comment terminators (``*/``) are not affected.\n\n**Syntax:** `t:replaceComments`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:replaceComments\"\n```",
        zh: "**描述:** 将字符串里的注释块替换为空格。\n\n此转换函数会将输入字符串里由 ``/**/`` 包裹的注释块替换为空格。不完整的注释也会被替换为一个空格。但是，独立的注释终止符(``*/``) 将不会受到影响。\n\n**语法:** `t:replaceComments`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:replaceComments\"\n```",
        slug: "treplacecomments"
    },
    "t:replaceNulls": {
        en: "**Description:** Replaces ``NULL (0x00)`` characters in a string with spaces.\n\nThis transformation function replaces all ``NULL`` characters in the input string with space characters (``ASCII 0x20``).\n\n**Syntax:** `t:replaceNulls`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:replaceNulls\"\n```",
        zh: "**描述:** 将字符串里的 ``NULL(0x00)`` 字符替换为空格。\n\n此转换函数会将输入字符串里的所有 ``NULL`` 字符替换为空格字符（``ASCII 0x20``）。\n\n**语法:** `t:replaceNulls`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:replaceNulls\"\n```",
        slug: "treplacenulls"
    },
    "t:sha1": {
        en: "**Description:** Calculates ``SHA1`` hash of a string.\n\n**Syntax:** `t:sha1`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:sha1\"\n```",
        zh: "**描述:** 对字符串计算 ``SHA1`` 哈希。\n\n**语法:** `t:sha1`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:sha1\"\n```",
        slug: "tsha1"
    },
    "t:sqlHexDecode": {
        en: "**Description:** Decodes ``SQL`` hexadecimal data in a string.\n\n**Syntax:** `t:sqlHexDecode`\n\n**Implemented:** No\n\nWGE can parse this transformation function, but the functionality is not yet implemented.",
        zh: "**描述:** 对字符串里的 ``SQL`` 十六进制数据进行解码。\n\n**语法:** `t:sqlHexDecode`\n\n**是否实现:** 否\n\n此转换函数 WGE 支持解析，但暂未支持功能实现。",
        slug: "tsqlhexdecode"
    },
    "t:trim": {
        en: "**Description:** Removes leading and trailing whitespace from a string.\n\nThis transformation function removes ``\\x20\\t\\n\\r\\f\\v`` characters from the beginning and end of the input string.\n\n**Syntax:** `t:trim`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:trim\"\n```",
        zh: "**描述:** 对字符串去除首尾空白。\n\n此转换函数会将输入字符串首尾部的 ``\\x20\\t\\n\\r\\f\\v`` 字符去除。\n\n**语法:** `t:trim`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:trim\"\n```",
        slug: "ttrim"
    },
    "t:trimLeft": {
        en: "**Description:** Removes leading whitespace from a string.\n\nThis transformation function removes ``\\x20\\t\\n\\r\\f\\v`` characters from the beginning of the input string.\n\n**Syntax:** `t:trimLeft`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\n# Detect after trimming leading whitespace from parameter\nSecRule ARGS:username \"@rx ^admin\" \\\n    \"id:1,phase:2,t:trimLeft,deny,msg:'admin username detected'\"\n\n# Original input: \"   admin\"\n# After processing: \"admin\"\n```",
        zh: "**描述:** 对字符串去除开头空白。\n\n此转换函数会将输入字符串首部的 ``\\x20\\t\\n\\r\\f\\v`` 字符去除。\n\n**语法:** `t:trimLeft`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\n# 去除参数开头的空白后检测\nSecRule ARGS:username \"@rx ^admin\" \\\n    \"id:1,phase:2,t:trimLeft,deny,msg:'检测到 admin 用户名'\"\n\n# 原始输入: \"   admin\"\n# 处理后: \"admin\"\n```",
        slug: "ttrimleft"
    },
    "t:trimRight": {
        en: "**Description:** Removes trailing whitespace from a string.\n\nThis transformation function removes ``\\x20\\t\\n\\r\\f\\v`` characters from the end of the input string.\n\n**Syntax:** `t:trimRight`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\n# Detect after trimming trailing whitespace from parameter\nSecRule ARGS:cmd \"@rx ;$\" \\\n    \"id:1,phase:2,t:trimRight,deny,msg:'Command separator detected'\"\n\n# Original input: \"ls -la;   \"\n# After processing: \"ls -la;\"\n```",
        zh: "**描述:** 对字符串去除结尾空白。\n\n此转换函数会将输入字符串尾部的 ``\\x20\\t\\n\\r\\f\\v`` 字符去除。\n\n**语法:** `t:trimRight`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\n# 去除参数结尾的空白后检测\nSecRule ARGS:cmd \"@rx ;$\" \\\n    \"id:1,phase:2,t:trimRight,deny,msg:'检测到命令分隔符'\"\n\n# 原始输入: \"ls -la;   \"\n# 处理后: \"ls -la;\"\n```",
        slug: "ttrimright"
    },
    "t:uppercase": {
        en: "**Description:** Converts lowercase characters to uppercase in a string.\n\n**Syntax:** `t:uppercase`\n\n**Implemented:** No\n\nWGE can parse this transformation function, but the functionality is not yet implemented.",
        zh: "**描述:** 对字符串进行小写转大写。\n\n**语法:** `t:uppercase`\n\n**是否实现:** 否\n\n此转换函数 WGE 支持解析，但暂未支持功能实现。",
        slug: "tuppercase"
    },
    "t:urlDecode": {
        en: "**Description:** Performs ``URL`` decoding on a string.\n\nThis transformation function performs ``URL`` decoding on the input string. Invalid encodings will be skipped without affecting the decoding of the remaining valid encodings.\n\n**Syntax:** `t:urlDecode`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:urlDecode\"\n```",
        zh: "**描述:** 对字符串进行 ``URL`` 解码。\n\n此转换函数会对输入字符串进行 ``URL`` 解码，非法编码将会跳过但不会影响其余合法编码的解码。\n\n**语法:** `t:urlDecode`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:urlDecode\"\n```",
        slug: "turldecode"
    },
    "t:urlDecodeUni": {
        en: "**Description:** Performs ``URL`` decoding on a string.\n\nThis transformation function is similar to ``t:urlDecode``, but adds support for ``Microsoft``-specific ``%u`` encoding. If the code point is in the ``FF01-FF5E`` range (fullwidth ``ASCII``), the high byte is used to detect and adjust the low byte. Otherwise, only the low byte is used and the high byte is zeroed.\n\n**Syntax:** `t:urlDecodeUni`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:urlDecodeUni\"\n```",
        zh: "**描述:** 对字符串进行 ``URL`` 解码。\n\n此转换函数与 ``t:urlDecode`` 类似，但支持 ``Microsoft`` 特定的 ``%u`` 编码。如果码点在 ``FF01-FF5E`` 范围内（全角 ``ASCII`` 码），则使用高字节来检测和调整低字节。否则，仅使用低字节，并将高字节置零。\n\n**语法:** `t:urlDecodeUni`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:urlDecodeUni\"\n```",
        slug: "turldecodeuni"
    },
    "t:urlEncode": {
        en: "**Description:** Performs ``URL`` encoding on a string.\n\n**Syntax:** `t:urlEncode`\n\n**Implemented:** No\n\nWGE can parse this transformation function, but the functionality is not yet implemented.",
        zh: "**描述:** 对字符串进行 ``URL`` 编码。\n\n**语法:** `t:urlEncode`\n\n**是否实现:** 否\n\n此转换函数 WGE 支持解析，但暂未支持功能实现。",
        slug: "turlencode"
    },
    "t:utf8ToUnicode": {
        en: "**Description:** Performs ``Unicode`` encoding on ``UTF-8`` character sequences in a string.\n\nThis transformation function converts all ``UTF-8`` character sequences in the input string to ``Unicode`` (using ``%uHHHH`` format).\n\n**Syntax:** `t:utf8ToUnicode`\n\n**Implemented:** Yes\n\n**Example:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:utf8ToUnicode\"\n```",
        zh: "**描述:** 对字符串的 ``UTF-8`` 字符序列进行 ``Unicode`` 编码。\n\n此转换函数会对输入字符串所有 ``UTF-8`` 字符序列转换为 ``Unicode``（采用 ``%uHHHH`` 格式）。\n\n**语法:** `t:utf8ToUnicode`\n\n**是否实现:** 是\n\n**示例:**\n\n```apache\nSecRule ARGS \"@rx test\" \"id:1001,t:utf8ToUnicode\"\n```",
        slug: "tutf8tounicode"
    },
};

