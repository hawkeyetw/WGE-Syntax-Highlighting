#!/bin/bash
# SecLang 规则测试环境搭建脚本

echo "=== SecLang 规则测试环境 ==="

# 1. 安装 ModSecurity v3 (libmodsecurity)
echo "1. 安装 ModSecurity..."
# Ubuntu/Debian
apt-get update
apt-get install -y libmodsecurity3 libmodsecurity-dev

# 2. 安装 Nginx with ModSecurity
echo "2. 安装 Nginx + ModSecurity connector..."
apt-get install -y nginx nginx-module-njs libnginx-mod-http-modsecurity

# 3. 配置 ModSecurity
echo "3. 配置 ModSecurity..."
cat > /etc/nginx/modsecurity.conf << 'EOF'
# 启用规则引擎
SecRuleEngine On

# 启用请求体访问
SecRequestBodyAccess On
SecRequestBodyLimit 13107200

# 启用响应体访问
SecResponseBodyAccess On
SecResponseBodyMimeType text/plain text/html text/xml

# 审计日志
SecAuditEngine RelevantOnly
SecAuditLog /var/log/modsec_audit.log
SecAuditLogParts ABIJDEFHZ

# 调试日志（重要！用于测试规则）
SecDebugLog /var/log/modsec_debug.log
SecDebugLogLevel 9  # 最详细的日志

# 测试规则：检测 SQL 注入
SecRule ARGS "@rx union.*select" \
    "id:1001,\
    phase:2,\
    deny,\
    status:403,\
    log,\
    msg:'SQL Injection Test - UNION SELECT detected'"

# 测试规则：检测 XSS
SecRule ARGS "@rx <script>" \
    "id:1002,\
    phase:2,\
    deny,\
    status:403,\
    log,\
    msg:'XSS Test - script tag detected'"
EOF

# 4. 在 Nginx 中启用 ModSecurity
cat > /etc/nginx/sites-available/default << 'EOF'
server {
    listen 80;
    server_name localhost;

    modsecurity on;
    modsecurity_rules_file /etc/nginx/modsecurity.conf;

    location / {
        root /var/www/html;
        index index.html;
    }
}
EOF

# 5. 测试配置
nginx -t

# 6. 重启 Nginx
systemctl restart nginx

echo "=== 环境搭建完成 ==="
echo ""
echo "测试方法："
echo "1. 正常请求：curl http://localhost/"
echo "2. SQL 注入测试：curl 'http://localhost/?id=1 union select * from users'"
echo "3. XSS 测试：curl 'http://localhost/?search=<script>alert(1)</script>'"
echo ""
echo "查看日志："
echo "- 调试日志：tail -f /var/log/modsec_debug.log"
echo "- 审计日志：tail -f /var/log/modsec_audit.log"
echo "- Nginx 错误日志：tail -f /var/log/nginx/error.log"
