/**
 * 文档数据生成脚本
 *
 * 从 WGE 文档目录读取所有 Markdown 文件，生成 TypeScript 数据文件供插件使用。
 *
 * 用法:
 *   node scripts/generate-docs.js [文档目录路径]
 *
 * 示例:
 *   node scripts/generate-docs.js /root/WGE-FILE/docs/content
 *   pnpm run gen-docs
 *
 * 文档更新后只需重新运行此脚本即可同步到插件。
 */

const fs = require('fs');
const path = require('path');

// ============================
// 配置 - 修改这里的默认路径
// ============================
const DEFAULT_DOCS_PATH = '/root/WGE-FILE/docs/content';

// 文档分类及对应的导出变量名
const CATEGORIES = [
    { dir: 'directives', varName: 'DIRECTIVE_DOCS', label: '指令' },
    { dir: 'variables', varName: 'VARIABLE_DOCS', label: '变量' },
    { dir: 'operators', varName: 'OPERATOR_DOCS', label: '操作符' },
    { dir: 'actions', varName: 'ACTION_DOCS', label: '动作' },
    { dir: 'transformation', varName: 'TRANSFORMATION_DOCS', label: '转换函数' },
];

const OUTPUT_FILE = path.resolve(__dirname, '../src/docs-data.ts');

// ============================
// 工具函数
// ============================

/**
 * 从 Hugo Markdown 文件中提取 frontmatter 和正文
 * frontmatter 格式: +++\ntitle = "xxx"\nweight = n\n+++
 */
function parseMd(content) {
    const match = content.match(/^\+\+\+\s*\n([\s\S]*?)\n\+\+\+\s*\n?([\s\S]*)$/);
    if (!match) {
        return { title: '', body: content.trim() };
    }

    const frontmatter = match[1];
    const body = match[2].trim();

    // 提取 title
    const titleMatch = frontmatter.match(/title\s*=\s*"([^"]*)"/);
    const title = titleMatch ? titleMatch[1] : '';

    return { title, body };
}

/**
 * 处理单个分类目录，读取所有 en/zh 文档
 */
function processCategory(docsPath, categoryDir) {
    const enDir = path.join(docsPath, 'en', 'seclang-plus', categoryDir);
    const zhDir = path.join(docsPath, 'zh', 'seclang-plus', categoryDir);
    const entries = {};

    // 收集所有 .md 文件（跳过 _index.md）
    const allFiles = new Set();

    if (fs.existsSync(enDir)) {
        for (const f of fs.readdirSync(enDir)) {
            if (f.endsWith('.md') && f !== '_index.md') {
                allFiles.add(f);
            }
        }
    }

    if (fs.existsSync(zhDir)) {
        for (const f of fs.readdirSync(zhDir)) {
            if (f.endsWith('.md') && f !== '_index.md') {
                allFiles.add(f);
            }
        }
    }

    for (const file of allFiles) {
        const slug = file.replace('.md', '');
        const enPath = path.join(enDir, file);
        const zhPath = path.join(zhDir, file);

        let title = '';
        let enBody = '';
        let zhBody = '';

        // 读取英文文档
        if (fs.existsSync(enPath)) {
            const result = parseMd(fs.readFileSync(enPath, 'utf8'));
            title = result.title;
            enBody = result.body;
        }

        // 读取中文文档
        if (fs.existsSync(zhPath)) {
            const result = parseMd(fs.readFileSync(zhPath, 'utf8'));
            if (!title) {
                title = result.title;
            }
            zhBody = result.body;
        }

        if (title) {
            entries[title] = { en: enBody, zh: zhBody, slug };
        }
    }

    return entries;
}

// ============================
// 主流程
// ============================

function main() {
    const docsPath = process.argv[2] || DEFAULT_DOCS_PATH;

    // 检查文档目录是否存在
    if (!fs.existsSync(docsPath)) {
        console.error(`错误: 文档目录不存在: ${docsPath}`);
        console.error(`用法: node scripts/generate-docs.js [文档目录路径]`);
        process.exit(1);
    }

    console.log(`文档目录: ${docsPath}`);
    console.log(`输出文件: ${OUTPUT_FILE}`);
    console.log('');

    // 处理每个分类
    const allData = {};
    let totalCount = 0;

    for (const cat of CATEGORIES) {
        const entries = processCategory(docsPath, cat.dir);
        allData[cat.varName] = entries;
        const count = Object.keys(entries).length;
        totalCount += count;
        console.log(`  ${cat.label} (${cat.varName}): ${count} 个条目`);
    }

    console.log(`\n  总计: ${totalCount} 个条目`);

    // 生成 TypeScript 文件
    let output = '';
    output += '// ============================================================================\n';
    output += '// 此文件由 scripts/generate-docs.js 自动生成，请勿手动编辑\n';
    output += '// 更新方法: 修改文档后运行 pnpm run gen-docs\n';
    output += `// 生成时间: ${new Date().toISOString()}\n`;
    output += `// 文档来源: ${docsPath}\n`;
    output += '// ============================================================================\n\n';

    output += 'export interface DocEntry {\n';
    output += '    /** 英文文档内容 (Markdown) */\n';
    output += '    en: string;\n';
    output += '    /** 中文文档内容 (Markdown) */\n';
    output += '    zh: string;\n';
    output += '    /** URL slug，用于生成文档链接 */\n';
    output += '    slug: string;\n';
    output += '}\n\n';

    for (const cat of CATEGORIES) {
        const entries = allData[cat.varName];
        output += `// ${cat.label} - ${Object.keys(entries).length} 个条目\n`;
        output += `export const ${cat.varName}: Record<string, DocEntry> = {\n`;

        // 按 title 排序，保持输出稳定
        const sortedKeys = Object.keys(entries).sort();
        for (const title of sortedKeys) {
            const data = entries[title];
            output += `    ${JSON.stringify(title)}: {\n`;
            output += `        en: ${JSON.stringify(data.en)},\n`;
            output += `        zh: ${JSON.stringify(data.zh)},\n`;
            output += `        slug: ${JSON.stringify(data.slug)}\n`;
            output += '    },\n';
        }

        output += '};\n\n';
    }

    // 写入文件
    fs.writeFileSync(OUTPUT_FILE, output, 'utf8');
    console.log(`\n已生成: ${OUTPUT_FILE}`);
}

main();
