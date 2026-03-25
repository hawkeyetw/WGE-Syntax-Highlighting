import * as vscode from 'vscode';
import {
    DIRECTIVE_DOCS,
    VARIABLE_DOCS,
    OPERATOR_DOCS,
    ACTION_DOCS,
    TRANSFORMATION_DOCS,
    DocEntry
} from './docs-data';

// 文档基础 URL
const DOC_BASE_URL = 'https://hawkeyetw.github.io/wge/seclang-plus';

// 分类标签（中英文）
const CATEGORY_LABELS: Record<string, { en: string; zh: string }> = {
    directives: { en: 'Directive', zh: '指令' },
    variables: { en: 'Variable', zh: '变量' },
    operators: { en: 'Operator', zh: '操作符' },
    actions: { en: 'Action', zh: '动作' },
    transformation: { en: 'Transformation', zh: '转换函数' },
};

// =============================================================================
// 辅助函数
// =============================================================================

/** 获取用户语言偏好 */
function getLanguage(): 'en' | 'zh' {
    return vscode.env.language.startsWith('zh') ? 'zh' : 'en';
}

/** 根据语言获取分类标签 */
function getCategoryLabel(category: string): string {
    const labels = CATEGORY_LABELS[category];
    if (!labels) { return category; }
    const lang = getLanguage();
    return `${labels[lang]} / ${labels[lang === 'en' ? 'zh' : 'en']}`;
}

/** 生成文档链接 */
function getDocLink(category: string, slug: string): string {
    return `[📖 Documentation / 在线文档](${DOC_BASE_URL}/${category}/${slug}/)`;
}

/** 获取首行描述（从 Markdown 中提取 **Description:** 或 **描述:** 后面的内容） */
function getFirstLineDesc(doc: DocEntry): string {
    const content = getDocContent(doc);
    // 匹配 **Description:** xxx 或 **描述:** xxx
    const match = content.match(/\*\*(?:Description|描述):\*\*\s*(.+)/);
    return match ? match[1].trim() : '';
}

/** 构建 Markdown 文档 */
function buildMarkdown(parts: string[]): vscode.MarkdownString {
    const md = new vscode.MarkdownString(parts.join('\n'));
    md.isTrusted = true;
    return md;
}

/** 获取文档正文（根据 VS Code 语言设置显示对应语言） */
function getDocContent(doc: DocEntry): string {
    const lang = getLanguage();
    return lang === 'zh' ? (doc.zh || doc.en) : (doc.en || doc.zh);
}

/** 构建悬浮提示文档 */
function buildHoverDoc(title: string, category: string, doc: DocEntry): vscode.MarkdownString {
    const content = getDocContent(doc);
    const parts: string[] = [];
    parts.push(`## ${title}`);
    parts.push(`**${getCategoryLabel(category)}**\n`);

    if (content) {
        parts.push(content);
    }

    // 文档链接
    parts.push('\n---\n');
    parts.push(getDocLink(category, doc.slug));

    return buildMarkdown(parts);
}

/** 构建补全文档 */
function buildCompletionDoc(category: string, doc: DocEntry): vscode.MarkdownString {
    const content = getDocContent(doc);
    const parts: string[] = [];

    if (content) {
        parts.push(content);
    }

    parts.push('\n---\n');
    parts.push(getDocLink(category, doc.slug));

    return buildMarkdown(parts);
}

// =============================================================================
// 关键字查找表（启动时构建，用于悬浮提示快速查找）
// =============================================================================

interface KeywordEntry {
    title: string;
    category: string;
    doc: DocEntry;
}

/** 构建所有关键字的查找映射 */
function buildKeywordMap(): Map<string, KeywordEntry> {
    const map = new Map<string, KeywordEntry>();

    const sources: Array<{ docs: Record<string, DocEntry>; category: string }> = [
        { docs: DIRECTIVE_DOCS, category: 'directives' },
        { docs: VARIABLE_DOCS, category: 'variables' },
        { docs: OPERATOR_DOCS, category: 'operators' },
        { docs: ACTION_DOCS, category: 'actions' },
        { docs: TRANSFORMATION_DOCS, category: 'transformation' },
    ];

    for (const { docs, category } of sources) {
        for (const [title, doc] of Object.entries(docs)) {
            map.set(title, { title, category, doc });

            // 操作符: 同时注册不带 @ 的版本（如 rx → @rx）
            if (category === 'operators' && title.startsWith('@')) {
                map.set(title.substring(1), { title, category, doc });
            }

            // 转换函数: 同时注册不带 t: 的版本（如 lowercase → t:lowercase）
            if (category === 'transformation' && title.startsWith('t:')) {
                map.set(title.substring(2), { title, category, doc });
            }
        }
    }

    return map;
}

// =============================================================================
// 插件激活
// =============================================================================
export function activate(context: vscode.ExtensionContext) {
    console.log('SecLang extension is now active!');

    // 构建关键字查找表
    const keywordMap = buildKeywordMap();

    // 读取配置
    const config = vscode.workspace.getConfiguration('seclang');
    const enableCompletions = config.get<boolean>('enableCompletions', true);
    const enableHover = config.get<boolean>('enableHover', true);

    // 注册代码补全提供器
    if (enableCompletions) {
        const completionProvider = vscode.languages.registerCompletionItemProvider(
            'seclang',
            {
                provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
                    const linePrefix = document.lineAt(position).text.slice(0, position.character);
                    const completionItems: vscode.CompletionItem[] = [];

                    // 指令补全
                    for (const [name, doc] of Object.entries(DIRECTIVE_DOCS)) {
                        const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Keyword);
                        item.detail = `[Directive] ${getFirstLineDesc(doc) || name}`;
                        item.documentation = buildCompletionDoc('directives', doc);
                        item.insertText = name;
                        item.sortText = '0' + name;
                        completionItems.push(item);
                    }

                    // 变量补全
                    for (const [name, doc] of Object.entries(VARIABLE_DOCS)) {
                        const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Variable);
                        item.detail = `[Variable] ${getFirstLineDesc(doc) || name}`;
                        item.documentation = buildCompletionDoc('variables', doc);
                        item.sortText = '1' + name;
                        completionItems.push(item);
                    }

                    // 操作符补全（输入 @ 时触发）
                    if (linePrefix.endsWith('@') || linePrefix.includes('"@') || linePrefix.includes(' @')) {
                        for (const [name, doc] of Object.entries(OPERATOR_DOCS)) {
                            const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Operator);
                            item.detail = `[Operator] ${getFirstLineDesc(doc) || name}`;
                            item.documentation = buildCompletionDoc('operators', doc);
                            item.insertText = name.startsWith('@') ? name.substring(1) : name;
                            item.sortText = '2' + name;
                            completionItems.push(item);
                        }
                    }

                    // 动作补全
                    for (const [name, doc] of Object.entries(ACTION_DOCS)) {
                        const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Function);
                        item.detail = `[Action] ${getFirstLineDesc(doc) || name}`;
                        item.documentation = buildCompletionDoc('actions', doc);
                        item.sortText = '3' + name;
                        completionItems.push(item);
                    }

                    // 转换函数补全（输入 t: 时触发）
                    if (linePrefix.endsWith('t:') || linePrefix.includes(',t:')) {
                        for (const [name, doc] of Object.entries(TRANSFORMATION_DOCS)) {
                            const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Method);
                            item.detail = `[Transformation] ${getFirstLineDesc(doc) || name}`;
                            item.documentation = buildCompletionDoc('transformation', doc);
                            item.insertText = name.startsWith('t:') ? name.substring(2) : name;
                            item.sortText = '4' + name;
                            completionItems.push(item);
                        }
                    }

                    return completionItems;
                }
            },
            '@', ':', ',', ' ', '"'
        );
        context.subscriptions.push(completionProvider);
    }

    // 注册悬浮提示提供器
    if (enableHover) {
        const hoverProvider = vscode.languages.registerHoverProvider('seclang', {
            provideHover(document: vscode.TextDocument, position: vscode.Position) {
                const range = document.getWordRangeAtPosition(position, /[@]?[A-Za-z_][A-Za-z0-9_:]*/);
                if (!range) {
                    return undefined;
                }

                const word = document.getText(range);
                const entry = keywordMap.get(word);

                if (entry) {
                    return new vscode.Hover(
                        buildHoverDoc(entry.title, entry.category, entry.doc),
                        range
                    );
                }

                return undefined;
            }
        });
        context.subscriptions.push(hoverProvider);
    }

    // 监听配置变更
    context.subscriptions.push(
        vscode.workspace.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration('seclang')) {
                vscode.window.showInformationMessage(
                    'SecLang 配置已更改，请重新加载窗口以使更改生效。',
                    'Reload'
                ).then(selection => {
                    if (selection === 'Reload') {
                        vscode.commands.executeCommand('workbench.action.reloadWindow');
                    }
                });
            }
        })
    );
}

export function deactivate() {}
