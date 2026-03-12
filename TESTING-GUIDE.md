# SecLang 规则测试与调试指南

## 重要概念区分

### ❌ SecLang 没有传统意义的"调试"
SecLang 是**声明式配置语言**，不是可执行程序语言（如 Python、JavaScript），因此：
- ❌ 不能设置断点
- ❌ 不能单步执行
- ❌ 不能查看变量值（运行时除外）

### ✅ SecLang 规则的"测试"方法
SecLang 规则需要在**实际 WAF 环境**中通过**发送 HTTP 请求**来测试。

---

## 🔧 测试方法

### 方法 1: 本地 ModSecurity 测试环境

#### 步骤 1: 搭建环境

```bash
# 运行自动化脚本
cd /root/Vscode/seclang-vscode
bash test-environment-setup.sh
```

#### 步骤 2: 编写测试规则

在 VS Code 中编辑 `/etc/nginx/modsecurity.conf`：

```seclang
# 启用调试日志（关键！）
SecDebugLog /var/log/modsec_debug.log
SecDebugLogLevel 9  # 0-9，9 是最详细

# 测试规则 1: SQL 注入检测
SecRule ARGS "@rx union.*select" \
    "id:1001,\
    phase:2,\
    deny,\
    status:403,\
    log,\
    msg:'SQL Injection detected: %{MATCHED_VAR}'"

# 测试规则 2: XSS 检测
SecRule ARGS "@detectXSS" \
    "id:1002,\
    phase:2,\
    deny,\
    status:403,\
    log,\
    msg:'XSS Attack detected'"
```

#### 步骤 3: 测试规则

**终端 1 - 实时查看日志**：
```bash
# 查看调试日志（最详细）
tail -f /var/log/modsec_debug.log

# 或查看审计日志
tail -f /var/log/modsec_audit.log
```

**终端 2 - 发送测试请求**：
```bash
# 正常请求（应该通过）
curl http://localhost/

# SQL 注入攻击（应该被拦截，触发规则 1001）
curl 'http://localhost/?id=1%20union%20select%20*%20from%20users'

# XSS 攻击（应该被拦截，触发规则 1002）
curl 'http://localhost/?q=<script>alert(1)</script>'

# 带详细输出
curl -v 'http://localhost/?id=1%20union%20select'
```

#### 步骤 4: 分析日志

**调试日志示例** (`/var/log/modsec_debug.log`)：
```
[2025-01-20 10:30:45.123] [1] Rule 1001: Matched
[2025-01-20 10:30:45.124] [1] Variable: ARGS:id
[2025-01-20 10:30:45.124] [1] Value: 1 union select * from users
[2025-01-20 10:30:45.125] [1] Action: deny
[2025-01-20 10:30:45.125] [1] Status: 403
```

---

### 方法 2: 使用 Docker 快速测试

```bash
# 1. 创建测试目录
mkdir -p /tmp/modsec-test
cd /tmp/modsec-test

# 2. 创建规则文件
cat > modsecurity.conf << 'EOF'
SecRuleEngine On
SecRequestBodyAccess On
SecDebugLog /var/log/modsec_debug.log
SecDebugLogLevel 9

# 你的测试规则
SecRule ARGS "@rx attack" \
    "id:1001,phase:2,deny,status:403,log,msg:'Attack detected'"
EOF

# 3. 运行 ModSecurity 容器
docker run -d \
  --name modsec-test \
  -p 8080:80 \
  -v $(pwd)/modsecurity.conf:/etc/nginx/modsecurity.conf \
  owasp/modsecurity-crs:nginx-alpine

# 4. 测试规则
curl 'http://localhost:8080/?test=attack'  # 应该被拦截
curl 'http://localhost:8080/?test=normal'  # 应该通过

# 5. 查看日志
docker logs modsec-test

# 6. 清理
docker stop modsec-test
docker rm modsec-test
```

---

### 方法 3: 在线 ModSecurity 测试工具

如果你有一个运行 ModSecurity 的远程服务器：

```bash
# 使用 Python 脚本批量测试
cat > test_rules.py << 'EOF'
#!/usr/bin/env python3
import requests

# 测试用例
tests = [
    {
        "name": "SQL Injection - UNION",
        "url": "http://your-waf.com/",
        "params": {"id": "1 union select * from users"},
        "should_block": True
    },
    {
        "name": "XSS - Script Tag",
        "url": "http://your-waf.com/",
        "params": {"q": "<script>alert(1)</script>"},
        "should_block": True
    },
    {
        "name": "Normal Request",
        "url": "http://your-waf.com/",
        "params": {"q": "normal search"},
        "should_block": False
    }
]

# 运行测试
for test in tests:
    try:
        response = requests.get(test["url"], params=test["params"], timeout=5)
        blocked = response.status_code == 403

        status = "✅ PASS" if blocked == test["should_block"] else "❌ FAIL"
        print(f"{status} - {test['name']}")
        print(f"  Status: {response.status_code}")
        print()
    except Exception as e:
        print(f"❌ ERROR - {test['name']}: {e}")
EOF

chmod +x test_rules.py
python3 test_rules.py
```

---

## 📊 SecLang 规则调试技巧

### 1. 使用 SecDebugLogLevel

```seclang
# 不同的日志级别
SecDebugLogLevel 0  # 不记录
SecDebugLogLevel 1  # 只记录错误
SecDebugLogLevel 3  # 记录警告
SecDebugLogLevel 5  # 记录重要信息
SecDebugLogLevel 9  # 记录所有细节（推荐测试时使用）
```

### 2. 使用 logdata 输出调试信息

```seclang
SecRule ARGS "@rx attack" \
    "id:1001,\
    phase:2,\
    pass,\  # 先不拦截，只记录
    log,\
    msg:'Debug: Checking parameter',\
    logdata:'Param: %{MATCHED_VAR_NAME} = %{MATCHED_VAR}'"
```

### 3. 使用 SecAction 输出变量值

```seclang
# 输出所有 ARGS 变量
SecAction \
    "id:9001,\
    phase:2,\
    pass,\
    nolog,\
    setvar:tx.test_args=%{ARGS}"

# 在后续规则中使用
SecRule TX:test_args ".*" \
    "id:9002,\
    phase:2,\
    pass,\
    log,\
    msg:'All ARGS: %{TX.test_args}'"
```

### 4. 使用 chain 规则逐步调试

```seclang
# 分解复杂规则为链式规则
SecRule ARGS "@rx attack" \
    "id:1001,\
    phase:2,\
    pass,\
    chain,\
    log,\
    msg:'Step 1: Pattern matched'"
    SecRule MATCHED_VAR "@contains sql" \
        "log,\
        msg:'Step 2: SQL keyword found'"
```

### 5. 使用 ctl:ruleEngine 临时禁用规则

```seclang
# 在特定路径禁用规则引擎
SecRule REQUEST_URI "@beginsWith /debug/" \
    "id:1001,\
    phase:1,\
    pass,\
    nolog,\
    ctl:ruleEngine=Off"
```

---

## 🔍 常见问题排查

### 问题 1: 规则没有触发

**检查清单**：
```bash
# 1. 检查规则引擎是否启用
grep "SecRuleEngine" /etc/nginx/modsecurity.conf

# 2. 检查规则阶段是否正确
# phase:1 - 请求头阶段
# phase:2 - 请求体阶段（最常用）
# phase:3 - 响应头阶段
# phase:4 - 响应体阶段
# phase:5 - 日志阶段

# 3. 检查变量是否有值
# 例如：检查 ARGS 是否为空
SecRule &ARGS "@eq 0" "id:9001,phase:2,pass,log,msg:'No ARGS found'"

# 4. 查看调试日志
tail -100 /var/log/modsec_debug.log | grep "Rule 1001"
```

### 问题 2: 误报（正常请求被拦截）

**调试步骤**：
```seclang
# 1. 先改为 pass，只记录不拦截
SecRule ARGS "@rx attack" \
    "id:1001,\
    phase:2,\
    pass,\  # 改为 pass
    log,\
    msg:'Testing rule'"

# 2. 查看实际匹配的内容
# logdata 会显示具体匹配了什么
logdata:'Matched: %{MATCHED_VAR}'

# 3. 调整正则表达式或添加排除条件
SecRule ARGS "@rx attack" \
    "id:1001,\
    phase:2,\
    deny,\
    chain"
    SecRule MATCHED_VAR "!@rx ^legitimate_"  # 排除合法情况
```

### 问题 3: 漏报（攻击未被拦截）

**检查步骤**：
```bash
# 1. 确认转换函数是否正确
# 攻击可能经过编码，需要解码

SecRule ARGS "@rx attack" \
    "id:1001,\
    t:lowercase,\      # 转小写
    t:urlDecode,\      # URL 解码
    t:htmlEntityDecode,\  # HTML 实体解码
    phase:2,\
    deny"

# 2. 测试不同的编码形式
curl 'http://localhost/?q=attack'           # 原始
curl 'http://localhost/?q=%61%74%74%61%63%6B'  # URL 编码
curl 'http://localhost/?q=&#97;ttack'      # HTML 实体编码
```

---

## 📝 测试最佳实践

### 1. 建立测试用例库

```bash
# 创建测试用例文件
cat > test_cases.txt << 'EOF'
# SQL Injection
/?id=1' OR '1'='1
/?id=1 UNION SELECT * FROM users
/?id=1; DROP TABLE users--

# XSS
/?q=<script>alert(1)</script>
/?q=<img src=x onerror=alert(1)>
/?q=javascript:alert(1)

# Path Traversal
/?file=../../../etc/passwd
/?file=....//....//etc/passwd

# Command Injection
/?cmd=; cat /etc/passwd
/?cmd=| ls -la
EOF
```

### 2. 自动化测试脚本

参考 `/root/Vscode/seclang-vscode/examples/` 中的测试脚本。

### 3. 持续集成测试

将规则测试集成到 CI/CD 流程中。

---

## 🎯 总结

| 操作 | VS Code 插件能做 | 需要 WAF 环境 |
|------|-----------------|--------------|
| 语法高亮 | ✅ | ❌ |
| 代码补全 | ✅ | ❌ |
| 语法检查 | ✅（基本） | ❌ |
| **规则测试** | ❌ | ✅ |
| **攻击检测验证** | ❌ | ✅ |
| **性能测试** | ❌ | ✅ |

**关键要点**：
1. **VS Code 插件**：帮助你**编写**正确的 SecLang 规则
2. **WAF 环境**：用于**测试**规则是否按预期工作
3. SecLang 规则的"调试"实际上是在真实 WAF 环境中进行**功能测试**

---

需要我创建更多测试脚本或示例吗？
