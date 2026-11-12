/* GENERATED FILE — do not edit. Source: src/main.tsx; rebuild: node scripts/build.mjs */
const __PACKAGE_NAME__ = "dsh-custom-workbench";
window.__ModuleLoader__.load({
    id: __PACKAGE_NAME__,
    factory(require) {
        const React = require('react');
        /** Dictionary namespace owned by this module; mirrors `locale/*.json`. */
        const NS = 'sidebarPanel';
        /** The one id shared by the sidebar entry and the main panel it opens. */
        const PANEL_ID = 'sidebar-panel';
        /** Id of the sheet this module inserts so a reload never double-injects it. */
        const CSS_ID = 'dsw-sidebar-panel-styles';
        /** Order of the row among the other global panel entries. */
        const ORDER = 20;
        /** Appearance preferences the page offers; `ctx.theme.setTheme` accepts these. */
        const PREFERENCES = ['light', 'dark', 'system'];
        /** Card kinds the workbench stores. */
        const KINDS = ['note', 'command', 'skill'];
        /** Title and body limits, mirrored by the Host schema. */
        const TITLE_MAX = 80;
        const BODY_MAX = 2000;
        /** Key the page keeps its cards under while the Host store is unavailable. */
        const LOCAL_KEY = 'dsh-sidebar-panel:workbench';
        /** Visible copy per locale; the registration label and the page share it. */
        const TEXT = {
            en: {
                title: 'Custom workbench',
                subtitle: 'Pin your own notes, commands, and skills beside the conversation.',
                back: 'Back to conversation',
                add: 'New card',
                cards: 'Your cards',
                empty: 'No cards yet. Add a note, a command, or a skill to start building this workbench.',
                emptySearch: 'No card matches that search.',
                search: 'Search cards',
                local: 'Saved in this browser on this machine.',
                persisted: 'Saved in this browser.',
                saveError: 'Could not save the card.',
                move: 'Move to',
                pinnedOnly: 'Pinned only',
                filterAll: 'All',
                filterNote: 'Notes',
                filterCommand: 'Commands',
                filterSkill: 'Skills',
                'kind.note': 'Note',
                'kind.command': 'Command',
                'kind.skill': 'Skill',
                'form.kind': 'Kind',
                'form.title': 'Title',
                'form.bodyNote': 'Card text',
                'form.bodyCommand': 'Shell command',
                'form.bodySkill': 'Skill name',
                'form.pinned': 'Show on the board',
                'form.save': 'Save',
                'form.cancel': 'Cancel',
                'form.edit': 'Edit',
                'form.remove': 'Remove',
                'form.duplicate': 'Duplicate',
                'form.choose': 'Choose a skill',
                'form.skillsEmpty': 'No skills are available in this workspace.',
                'placeholder.title': 'What is this card for?',
                'placeholder.note': 'Anything you want within reach…',
                'placeholder.command': 'git status',
                'placeholder.skill': 'design-review',
                'error.title': 'Enter a title first',
                appearance: 'Appearance',
                light: 'Light',
                dark: 'Dark',
                system: 'System',
                'a11y.board': 'Workbench cards',
                'a11y.card': 'card',
            },
            zh: {
                title: '定制工作台',
                subtitle: '把常用的备忘、命令和技能钉在会话旁边。',
                back: '返回会话',
                add: '新建卡片',
                cards: '你的卡片',
                empty: '还没有卡片。添加备忘、命令或技能，开始搭建这个工作台。',
                emptySearch: '没有匹配的卡片。',
                search: '搜索卡片',
                local: '保存在这台电脑的浏览器里。',
                persisted: '已保存在浏览器里。',
                saveError: '保存失败。',
                move: '移到',
                pinnedOnly: '只看置顶',
                filterAll: '全部',
                filterNote: '备忘',
                filterCommand: '命令',
                filterSkill: '技能',
                'kind.note': '备忘',
                'kind.command': '命令',
                'kind.skill': '技能',
                'form.kind': '类型',
                'form.title': '标题',
                'form.bodyNote': '卡片内容',
                'form.bodyCommand': '终端命令',
                'form.bodySkill': '技能名',
                'form.pinned': '显示在工作台上',
                'form.save': '保存',
                'form.cancel': '取消',
                'form.edit': '编辑',
                'form.remove': '删除',
                'form.duplicate': '复制',
                'form.choose': '选择技能',
                'form.skillsEmpty': '这个工作区里没有可用的技能。',
                'placeholder.title': '这张卡片是做什么的？',
                'placeholder.note': '想随手看到的任何内容…',
                'placeholder.command': 'git status',
                'placeholder.skill': 'design-review',
                'error.title': '请先填写标题',
                appearance: '外观',
                light: '浅色',
                dark: '深色',
                system: '跟随系统',
                'a11y.board': '工作台卡片',
                'a11y.card': '卡片',
            },
        };
        /** Page sheet: host tokens only, the Plugins page's column and type steps. */
        const CSS = `
.dsw-sp-page {
  /* The main column is a flex column that only lays out its children, so this
     root takes the remaining height and owns the scrolling itself. */
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  min-height: 0;
  overflow: auto;
  color: var(--dsw-alias-label-primary);
  background: var(--dsw-alias-bg-base);
  font-size: 14px;
  line-height: 1.5;
}
.dsw-sp-inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 clamp(24px, 4vw, 48px) 48px;
}
.dsw-sp-head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  padding-top: calc(28px + var(--dsh-frame-top-clearance, 0px));
  margin-bottom: 20px;
}
.dsw-sp-heading { min-width: 0; }
.dsw-sp-title {
  margin: 0;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
}
.dsw-sp-title:focus { outline: none; }
.dsw-sp-subtitle {
  margin: 4px 0 0;
  color: var(--dsw-alias-label-secondary);
  font-size: 13px;
  line-height: 20px;
  overflow-wrap: anywhere;
}
.dsw-sp-head-actions {
  display: flex;
  flex: none;
  align-items: center;
  gap: 8px;
}
.dsw-sp-primary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  border: 1px solid transparent;
  border-radius: var(--dsw-radius-lg, 16px);
  background: var(--dsw-alias-brand-primary);
  color: var(--dsw-alias-bg-base);
  font: inherit;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
}
.dsw-sp-primary:hover { opacity: 0.9; }
.dsw-sp-secondary {
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  border: 0.5px solid var(--dsw-alias-border-l2);
  border-radius: var(--dsw-radius-lg, 16px);
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 13px;
  line-height: 20px;
  cursor: pointer;
}
.dsw-sp-secondary:hover { background: var(--dsw-alias-bg-layer-2); }
.dsw-sp-primary:focus-visible,
.dsw-sp-secondary:focus-visible,
.dsw-sp-chip:focus-visible,
.dsw-sp-card-action:focus-visible,
.dsw-sp-input:focus-visible,
.dsw-sp-copy:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary);
  outline-offset: 2px;
}
.dsw-sp-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}
.dsw-sp-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.dsw-sp-chip {
  height: 28px;
  padding: 0 12px;
  border: 0.5px solid var(--dsw-alias-border-l1);
  border-radius: 14px;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
}
.dsw-sp-chip:hover { color: var(--dsw-alias-label-primary); }
.dsw-sp-chip[aria-pressed='true'] {
  border-color: var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-primary);
}
.dsw-sp-search {
  box-sizing: border-box;
  width: min(240px, 100%);
  height: 30px;
  padding: 0 10px;
  border: 0.5px solid var(--dsw-alias-border-l2);
  border-radius: var(--dsw-radius-sm, 8px);
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 13px;
}
.dsw-sp-search::placeholder { color: var(--dsw-alias-label-secondary); }
.dsw-sp-notice {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 12px;
  padding: 8px 12px;
  border-radius: var(--dsw-radius-sm, 8px);
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-secondary);
  font-size: 12px;
  line-height: 18px;
}
.dsw-sp-notice[data-tone='error'] { color: var(--dsw-alias-state-error-primary); }
.dsw-sp-grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  align-items: start;
}
.dsw-sp-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
  padding: 14px 16px;
  border: 0.5px solid var(--dsw-alias-border-l1);
  border-radius: var(--dsw-radius-md, 12px);
  background: var(--dsw-alias-bg-layer-1);
}
.dsw-sp-card[data-pinned='true'] { border-color: var(--dsw-alias-border-l2); }
.dsw-sp-card-head {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}
.dsw-sp-kind {
  flex: none;
  padding: 1px 8px;
  border-radius: 10px;
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-secondary);
  font-size: 11px;
  line-height: 16px;
}
.dsw-sp-pin {
  flex: none;
  color: var(--dsw-alias-brand-primary);
  font-size: 11px;
  line-height: 16px;
}
.dsw-sp-card-title {
  flex: 1;
  min-width: 0;
  margin: 0;
  overflow: hidden;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dsw-sp-body {
  margin: 0;
  color: var(--dsw-alias-label-secondary);
  font-size: 13px;
  line-height: 20px;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
  display: -webkit-box;
  max-height: 120px;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
}
.dsw-sp-code {
  display: block;
  max-height: 120px;
  margin: 0;
  padding: 8px 10px;
  overflow: auto;
  border-radius: var(--dsw-radius-sm, 8px);
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
  line-height: 18px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.dsw-sp-card-foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  margin-top: 2px;
}
.dsw-sp-card-action {
  height: 26px;
  padding: 0 8px;
  border: 0;
  border-radius: var(--dsw-radius-sm, 8px);
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
}
.dsw-sp-card-action:hover {
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-primary);
}
.dsw-sp-card-action[data-danger='true']:hover { color: var(--dsw-alias-state-error-primary); }
.dsw-sp-moved {
  margin-left: auto;
  color: var(--dsw-alias-label-secondary);
  font-size: 12px;
}
.dsw-sp-empty {
  padding: 32px 16px;
  border: 1px dashed var(--dsw-alias-border-l2);
  border-radius: var(--dsw-radius-md, 12px);
  color: var(--dsw-alias-label-secondary);
  font-size: 13px;
  line-height: 20px;
  text-align: center;
}
.dsw-sp-editor {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
  padding: 16px;
  border: 0.5px solid var(--dsw-alias-border-l2);
  border-radius: var(--dsw-radius-md, 12px);
  background: var(--dsw-alias-bg-layer-1);
}
.dsw-sp-editor-head {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
}
.dsw-sp-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13px;
  line-height: 20px;
}
.dsw-sp-field-label { color: var(--dsw-alias-label-secondary); font-size: 12px; line-height: 18px; }
.dsw-sp-input {
  box-sizing: border-box;
  width: 100%;
  min-height: 32px;
  padding: 6px 10px;
  border: 0.5px solid var(--dsw-alias-border-l2);
  border-radius: var(--dsw-radius-sm, 8px);
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 13px;
  line-height: 20px;
}
.dsw-sp-input::placeholder { color: var(--dsw-alias-label-secondary); }
textarea.dsw-sp-input { min-height: 96px; resize: vertical; }
.dsw-sp-editor-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.dsw-sp-check {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--dsw-alias-label-primary);
  font-size: 13px;
}
.dsw-sp-skill-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-height: 160px;
  overflow: auto;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 0.5px solid var(--dsw-alias-border-l1);
  border-radius: var(--dsw-radius-sm, 8px);
}
.dsw-sp-skill {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  padding: 6px 10px;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 13px;
  line-height: 20px;
  text-align: left;
  cursor: pointer;
}
.dsw-sp-skill:hover { background: var(--dsw-alias-bg-layer-2); }
.dsw-sp-skill-name { color: var(--dsw-alias-label-primary); }
.dsw-sp-skill-desc { color: var(--dsw-alias-label-secondary); font-size: 12px; line-height: 18px; }
.dsw-sp-error {
  margin: 0;
  color: var(--dsw-alias-state-error-primary);
  font-size: 12px;
  line-height: 18px;
}
.dsw-sp-foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
}
.dsw-sp-foot-label {
  margin-right: 4px;
  color: var(--dsw-alias-label-secondary);
  font-size: 12px;
  line-height: 18px;
}
.dsw-sp-appearance {
  height: 28px;
  padding: 0 12px;
  border: 0.5px solid var(--dsw-alias-border-l2);
  border-radius: 14px;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
}
.dsw-sp-appearance:hover { background: var(--dsw-alias-bg-layer-2); }
.dsw-sp-appearance[aria-pressed='true'] { background: var(--dsw-alias-bg-layer-2); }
@media (max-width: 767px) {
  .dsw-sp-inner { padding-inline: 20px; }
  .dsw-sp-search { width: 100%; }
}
`;
        /**
         * Translate one card kind through the page copy.
         * @param text - the localized copy.
         * @param kind - the card kind.
         * @returns the kind label.
         */
        function kindLabel(text, kind) {
            if (kind === 'note')
                return text.kindNote;
            if (kind === 'command')
                return text.kindCommand;
            return text.kindSkill;
        }
        /**
         * Build one card record.
         * @param partial - the fields the caller decides.
         * @returns a complete record with an id and a creation time.
         */
        function makeCard(partial) {
            const now = Date.now();
            return {
                id: `card-${now.toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
                kind: 'note',
                title: '',
                body: '',
                pinned: true,
                createdAt: now,
                ...partial,
            };
        }
        /* ------------------------------------------------------------------ */
        /* Components                                                          */
        /* ------------------------------------------------------------------ */
        /**
         * The sidebar glyph: a panel frame with a navigation column and one
         * selected row, drawn so it inherits the row's text color.
         * @param props - the sidebar icon share.
         * @returns the decorative icon.
         */
        function SidebarEntryIcon({ size }) {
            return (React.createElement("svg", { viewBox: "0 0 16 16", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", focusable: "false", style: { display: 'block', flex: 'none' } },
                React.createElement("rect", { x: 2, y: 2.75, width: 12, height: 10.5, rx: 2 }),
                React.createElement("rect", { x: 4.25, y: 4.75, width: 3, height: 6.5, rx: 1, fill: "currentColor", stroke: "none" }),
                React.createElement("path", { d: "M9.25 5.75h3.25M9.25 8h3.25M9.25 10.25h2.1" })));
        }
        /**
         * Render one card: its kind, title, body (a code block for commands), and
         * the actions that edit, reorder, duplicate, or remove it.
         * @param props - the card and its callbacks.
         * @returns the card element.
         */
        function CardView({ card, index, total, text, onEdit, onRemove, onDuplicate, onMove }) {
            return (React.createElement("article", { className: "dsw-sp-card", "data-pinned": card.pinned ? 'true' : undefined, "aria-label": `${card.title} (${kindLabel(text, card.kind)})` },
                React.createElement("div", { className: "dsw-sp-card-head" },
                    React.createElement("span", { className: "dsw-sp-kind" }, kindLabel(text, card.kind)),
                    card.pinned ? React.createElement("span", { className: "dsw-sp-pin", "aria-hidden": "true" }, "\u2605") : null,
                    React.createElement("h3", { className: "dsw-sp-card-title", title: card.title }, card.title)),
                card.body.length > 0
                    ? (card.kind === 'command'
                        ? React.createElement("code", { className: "dsw-sp-code" }, card.body)
                        : React.createElement("p", { className: "dsw-sp-body" }, card.body))
                    : null,
                React.createElement("div", { className: "dsw-sp-card-foot" },
                    React.createElement("button", { type: "button", className: "dsw-sp-card-action", onClick: onEdit }, text.formEdit),
                    React.createElement("button", { type: "button", className: "dsw-sp-card-action", onClick: onDuplicate }, text.formDuplicate),
                    React.createElement("span", { className: "dsw-sp-moved" },
                        React.createElement("button", { type: "button", className: "dsw-sp-card-action", disabled: index === 0, "aria-label": `${text.move} 1`, onClick: () => { onMove(-1); } }, "\u2191"),
                        React.createElement("button", { type: "button", className: "dsw-sp-card-action", disabled: index === total - 1, "aria-label": `${text.move} ${index + 2}`, onClick: () => { onMove(1); } }, "\u2193")),
                    React.createElement("button", { type: "button", className: "dsw-sp-card-action", "data-danger": "true", onClick: onRemove }, text.formRemove))));
        }
        /**
         * Render the card editor: kind, title, body (with a skill picker for skill
         * cards), the board switch, and Save/Cancel.
         * @param props - the draft and its callbacks.
         * @returns the editor element.
         */
        function Editor({ draft, text, error, skills, skillsLoading, onChange, onSave, onCancel, onPickSkill }) {
            const bodyLabel = draft.kind === 'command' ? text.formBodyCommand : draft.kind === 'skill' ? text.formBodySkill : text.formBodyNote;
            const bodyPlaceholder = draft.kind === 'command' ? text.placeholderCommand : draft.kind === 'skill' ? text.placeholderSkill : text.placeholderNote;
            return (React.createElement("form", { className: "dsw-sp-editor", onSubmit: (event) => { event.preventDefault(); onSave(); }, "aria-label": text.formEdit },
                React.createElement("p", { className: "dsw-sp-editor-head" }, draft.title.length > 0 ? draft.title : text.add),
                React.createElement("div", { className: "dsw-sp-field" },
                    React.createElement("span", { className: "dsw-sp-field-label" }, text.formKind),
                    React.createElement("div", { className: "dsw-sp-filters", role: "group", "aria-label": text.formKind }, KINDS.map((kind) => (React.createElement("button", { key: kind, type: "button", className: "dsw-sp-chip", "aria-pressed": draft.kind === kind, onClick: () => { onChange({ ...draft, kind: kind }); } }, kindLabel(text, kind)))))),
                React.createElement("label", { className: "dsw-sp-field" },
                    React.createElement("span", { className: "dsw-sp-field-label" }, text.formTitle),
                    React.createElement("input", { className: "dsw-sp-input", value: draft.title, maxLength: TITLE_MAX, placeholder: text.placeholderTitle, onChange: (event) => { onChange({ ...draft, title: event.target.value }); } })),
                React.createElement("label", { className: "dsw-sp-field" },
                    React.createElement("span", { className: "dsw-sp-field-label" }, bodyLabel),
                    React.createElement("textarea", { className: "dsw-sp-input", value: draft.body, maxLength: BODY_MAX, placeholder: bodyPlaceholder, onChange: (event) => { onChange({ ...draft, body: event.target.value }); } })),
                draft.kind === 'skill' ? (React.createElement("div", { className: "dsw-sp-field" },
                    React.createElement("span", { className: "dsw-sp-field-label" }, text.formChoose),
                    skillsLoading
                        ? React.createElement("p", { className: "dsw-sp-body" }, text.cards)
                        : skills.length === 0
                            ? React.createElement("p", { className: "dsw-sp-body" }, text.formSkillsEmpty)
                            : (React.createElement("ul", { className: "dsw-sp-skill-list", "aria-label": text.formChoose }, skills.map((skill) => (React.createElement("li", { key: skill.name },
                                React.createElement("button", { type: "button", className: "dsw-sp-skill", onClick: () => { onPickSkill(skill); } },
                                    React.createElement("span", { className: "dsw-sp-skill-name" }, skill.name),
                                    React.createElement("span", { className: "dsw-sp-skill-desc" }, skill.description))))))))) : null,
                React.createElement("div", { className: "dsw-sp-editor-row" },
                    React.createElement("label", { className: "dsw-sp-check" },
                        React.createElement("input", { type: "checkbox", checked: draft.pinned, onChange: (event) => { onChange({ ...draft, pinned: event.target.checked }); } }),
                        text.formPinned),
                    React.createElement("div", { className: "dsw-sp-head-actions" },
                        React.createElement("button", { type: "button", className: "dsw-sp-secondary", onClick: onCancel }, text.formCancel),
                        React.createElement("button", { type: "submit", className: "dsw-sp-primary" }, text.formSave))),
                error.length > 0
                    ? (React.createElement("p", { className: "dsw-sp-error", role: "alert" }, error))
                    : null));
        }
        /**
         * Render the workbench: a searchable, filterable board of cards, the card
         * editor, a persistence notice, and the appearance switch. Cards come from
         * the Host store; the first load falls back to this tab's storage.
         * @param props - the runtime share injected by the `main` slot entry.
         * @returns the page element.
         */
        function WorkbenchPage({ text, usePreference, onBack, onPreference, source, listSkills }) {
            const preference = usePreference();
            const titleRef = React.useRef(null);
            const [cards, setCards] = React.useState([]);
            const [loading, setLoading] = React.useState(true);
            const [durable, setDurable] = React.useState(source.durable);
            const [notice, setNotice] = React.useState('');
            const [draft, setDraft] = React.useState(null);
            const [editingId, setEditingId] = React.useState(null);
            const [error, setError] = React.useState('');
            const [filter, setFilter] = React.useState('all');
            const [query, setQuery] = React.useState('');
            const [skills, setSkills] = React.useState([]);
            const [skillsLoading, setSkillsLoading] = React.useState(false);
            React.useEffect(() => {
                titleRef.current?.focus();
            }, []);
            React.useEffect(() => {
                let live = true;
                source.list().then((loaded) => {
                    if (!live)
                        return;
                    setCards(loaded);
                    setLoading(false);
                }, () => {
                    if (live)
                        setLoading(false);
                });
                return () => { live = false; };
            }, [source]);
            // Skill cards need the workspace catalog; load it the first time the
            // editor opens on a skill card, and keep the last result.
            React.useEffect(() => {
                if (draft === null || draft.kind !== 'skill' || skills.length > 0 || skillsLoading)
                    return;
                let live = true;
                setSkillsLoading(true);
                listSkills('').then((loaded) => {
                    if (!live)
                        return;
                    setSkills(loaded);
                    setSkillsLoading(false);
                }, () => {
                    if (live)
                        setSkillsLoading(false);
                });
                return () => { live = false; };
            }, [draft === null ? null : draft.kind, skills.length, skillsLoading]);
            const persist = (next) => {
                setCards(next);
                source.save(next).then((saved) => {
                    setCards(saved);
                    setDurable(true);
                    setNotice('');
                }, (failure) => {
                    setDurable(false);
                    setNotice(failure instanceof Error ? failure.message : text.saveError);
                });
            };
            const startNew = () => {
                setDraft(makeCard({ kind: 'note' }));
                setEditingId(null);
                setError('');
            };
            const startEdit = (card) => {
                setDraft({ ...card });
                setEditingId(card.id);
                setError('');
            };
            const cancelEdit = () => {
                setDraft(null);
                setEditingId(null);
                setError('');
            };
            const saveDraft = () => {
                if (draft === null)
                    return;
                if (draft.title.trim().length === 0) {
                    setError(text.errorTitle);
                    return;
                }
                const record = { ...draft, title: draft.title.trim(), body: draft.body.trimEnd() };
                const exists = cards.some((card) => card.id === record.id);
                persist(exists ? cards.map((card) => (card.id === record.id ? record : card)) : [record, ...cards]);
                cancelEdit();
            };
            const removeCard = (card) => {
                persist(cards.filter((existing) => existing.id !== card.id));
                if (editingId === card.id)
                    cancelEdit();
            };
            const duplicateCard = (card) => {
                // A copy must NOT inherit the source id, or removing either removes both.
                const copy = makeCard({ kind: card.kind, title: card.title, body: card.body, pinned: card.pinned });
                const index = cards.findIndex((existing) => existing.id === card.id);
                persist([...cards.slice(0, index + 1), copy, ...cards.slice(index + 1)]);
            };
            const moveCard = (card, offset) => {
                const index = cards.findIndex((existing) => existing.id === card.id);
                const target = index + offset;
                if (index < 0 || target < 0 || target >= cards.length)
                    return;
                const next = cards.slice();
                const [moved] = next.splice(index, 1);
                next.splice(target, 0, moved);
                persist(next);
            };
            const normalizedQuery = query.trim().toLowerCase();
            const visible = cards.filter((card) => {
                if (filter !== 'all' && card.kind !== filter)
                    return false;
                if (normalizedQuery.length === 0)
                    return true;
                return `${card.title}\n${card.body}`.toLowerCase().includes(normalizedQuery);
            });
            const filters = [
                ['all', text.filterAll],
                ['note', text.filterNote],
                ['command', text.filterCommand],
                ['skill', text.filterSkill],
            ];
            return (React.createElement("div", { className: "dsw-sp-page" },
                React.createElement("div", { className: "dsw-sp-inner" },
                    React.createElement("header", { className: "dsw-sp-head" },
                        React.createElement("div", { className: "dsw-sp-heading" },
                            React.createElement("h1", { ref: titleRef, tabIndex: -1, className: "dsw-sp-title" }, text.title),
                            React.createElement("p", { className: "dsw-sp-subtitle" }, text.subtitle)),
                        React.createElement("div", { className: "dsw-sp-head-actions" },
                            React.createElement("button", { type: "button", className: "dsw-sp-primary", onClick: startNew }, text.add),
                            React.createElement("button", { type: "button", className: "dsw-sp-secondary", onClick: onBack },
                                '\u2190',
                                " ",
                                text.back))),
                    notice.length > 0
                        ? React.createElement("p", { className: "dsw-sp-notice", "data-tone": "error", role: "alert" }, notice)
                        : null,
                    draft !== null
                        ? (React.createElement(Editor, { draft: draft, text: text, error: error, skills: skills, skillsLoading: skillsLoading, onChange: setDraft, onSave: saveDraft, onCancel: cancelEdit, onPickSkill: (skill) => {
                                setDraft({ ...draft, title: draft.title.length > 0 ? draft.title : skill.name, body: skill.name });
                            } }))
                        : null,
                    React.createElement("div", { className: "dsw-sp-toolbar" },
                        React.createElement("div", { className: "dsw-sp-filters", role: "group", "aria-label": text.cards }, filters.map(([id, label]) => (React.createElement("button", { key: id, type: "button", className: "dsw-sp-chip", "aria-pressed": filter === id, onClick: () => { setFilter(id); } }, label)))),
                        React.createElement("input", { className: "dsw-sp-search", type: "search", value: query, placeholder: text.search, "aria-label": text.search, onChange: (event) => { setQuery(event.target.value); } })),
                    loading
                        ? null
                        : visible.length === 0
                            ? (React.createElement("p", { className: "dsw-sp-empty" }, cards.length === 0 ? text.empty : text.emptySearch))
                            : (React.createElement("div", { className: "dsw-sp-grid", role: "list", "aria-label": text.a11yBoard }, visible.map((card, index) => (React.createElement("div", { role: "listitem", key: card.id },
                                React.createElement(CardView, { card: card, index: cards.indexOf(card), total: cards.length, text: text, onEdit: () => { startEdit(card); }, onRemove: () => { removeCard(card); }, onDuplicate: () => { duplicateCard(card); }, onMove: (offset) => { moveCard(card, offset); } })))))),
                    React.createElement("div", { className: "dsw-sp-foot", role: "group", "aria-label": text.appearance },
                        React.createElement("span", { className: "dsw-sp-foot-label" }, text.appearance),
                        PREFERENCES.map((id) => (React.createElement("button", { key: id, type: "button", className: "dsw-sp-appearance", "aria-pressed": preference === id, onClick: () => { onPreference(id); } }, id === 'light' ? text.light : id === 'dark' ? text.dark : text.system)))))));
        }
        /**
         * Read the theme preference from the optional Theme service.
         * @param ctx - the browser plugin context.
         * @returns `light`, `dark`, or `system` (the default when unavailable).
         */
        function readPreference(ctx) {
            try {
                const service = ctx.get('theme');
                const preference = service?.getTheme?.()?.preference;
                return PREFERENCES.includes(preference) ? preference : 'system';
            }
            catch {
                return 'system';
            }
        }
        /**
         * Build the external store the page subscribes to for the current theme
         * preference. The service is optional, so a composition without `ctx.theme`
         * reports the default preference and simply never changes it.
         * @param ctx - the browser plugin context.
         * @returns the store whose disposer unsubscribes from `theme/change`.
         */
        function createPreferenceStore(ctx) {
            let snapshot = readPreference(ctx);
            const listeners = new Set();
            const subscribe = (listener) => {
                listeners.add(listener);
                return () => { listeners.delete(listener); };
            };
            const publish = () => {
                const next = readPreference(ctx);
                if (next === snapshot)
                    return;
                snapshot = next;
                for (const listener of listeners)
                    listener();
            };
            const off = ctx.on('theme/change', publish);
            return {
                get: () => snapshot,
                use: () => React.useSyncExternalStore(subscribe, () => snapshot, () => snapshot),
                dispose: () => {
                    listeners.clear();
                    if (typeof off === 'function')
                        off();
                },
            };
        }
        /**
         * Read the cards this tab kept while the Host store was unavailable.
         * @returns the stored cards, or an empty list when nothing usable is saved.
         */
        function readLocalCards() {
            try {
                const raw = window.localStorage.getItem(LOCAL_KEY);
                const parsed = raw === null ? [] : JSON.parse(raw);
                return Array.isArray(parsed) ? parsed.filter((card) => card !== null && typeof card === 'object' && typeof card.id === 'string') : [];
            }
            catch {
                return [];
            }
        }
        /**
         * Keep the cards in this tab's storage.
         * @param cards - the full card list.
         */
        function writeLocalCards(cards) {
            try {
                window.localStorage.setItem(LOCAL_KEY, JSON.stringify(cards));
            }
            catch {
                // Quota or a blocked storage area: the page keeps the cards in state.
            }
        }
        /**
         * Route card reads and writes: the workbench keeps its cards in this
         * browser's local storage, keyed by the panel id. There is no Host
         * round-trip, so the page never needs a Host service.
         * @returns the workbench source the page renders.
         */
        function createWorkbenchSource() {
            return {
                durable: true,
                list: () => Promise.resolve(readLocalCards()),
                save: (cards) => {
                    writeLocalCards(cards);
                    return Promise.resolve(cards);
                },
            };
        }
        /**
         * List the skills the Host registry reports for a workspace. Without a Host
         * skill service this returns an empty list, so the editor's skill picker
         * simply shows "no skills available".
         * @param cwd - workspace path for project skill roots (unused here).
         * @returns the skill summaries.
         */
        function listSkillsFromHost(cwd) {
            return Promise.resolve([]);
        }
        return {
            inject: ['slots', 'locale', 'layout'],
            apply(ctx) {
                // The sheet is inserted under a stable id: a reloaded bundle that
                // re-injected it would leave the browser ignoring every later copy.
                ctx.effect(() => {
                    if (document.getElementById(CSS_ID) !== null)
                        return undefined;
                    const style = document.createElement('style');
                    style.id = CSS_ID;
                    style.textContent = CSS;
                    document.head.appendChild(style);
                    return () => { style.remove(); };
                }, 'sidebar-panel: stylesheet');
                // Dictionaries are registered before anything projects their text.
                ctx.effect(() => ctx.locale.register(NS, 'en', TEXT.en), 'sidebar-panel: en');
                ctx.effect(() => ctx.locale.register(NS, 'zh', TEXT.zh), 'sidebar-panel: zh');
                const preferenceStore = createPreferenceStore(ctx);
                ctx.effect(() => () => { preferenceStore.dispose(); }, 'sidebar-panel: preference store');
                const source = createWorkbenchSource();
                // The sidebar row: the id addresses the main panel, and the label follows
                // the active locale through a thunk the sidebar re-reads on every render.
                ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({
                    name: 'sidebar.panellist',
                    id: PANEL_ID,
                    order: ORDER,
                    locale: NS,
                    label: () => ctx.locale.bind(NS)('title'),
                }, SidebarEntryIcon));
                // The page the row opens, under the same key in the root-scoped main slot.
                ctx.slots.inject('main', () => ctx.slots.register({
                    name: 'main',
                    key: PANEL_ID,
                    locale: NS,
                    inject: () => {
                        const t = ctx.locale.bind(NS);
                        return {
                            text: {
                                title: t('title'),
                                subtitle: t('subtitle'),
                                back: t('back'),
                                add: t('add'),
                                cards: t('cards'),
                                empty: t('empty'),
                                emptySearch: t('emptySearch'),
                                search: t('search'),
                                local: t('local'),
                                persisted: t('persisted'),
                                saveError: t('saveError'),
                                move: t('move'),
                                pinnedOnly: t('pinnedOnly'),
                                filterAll: t('filterAll'),
                                filterNote: t('filterNote'),
                                filterCommand: t('filterCommand'),
                                filterSkill: t('filterSkill'),
                                kindNote: t('kind.note'),
                                kindCommand: t('kind.command'),
                                kindSkill: t('kind.skill'),
                                formKind: t('form.kind'),
                                formTitle: t('form.title'),
                                formBodyNote: t('form.bodyNote'),
                                formBodyCommand: t('form.bodyCommand'),
                                formBodySkill: t('form.bodySkill'),
                                formPinned: t('form.pinned'),
                                formSave: t('form.save'),
                                formCancel: t('form.cancel'),
                                formEdit: t('form.edit'),
                                formRemove: t('form.remove'),
                                formDuplicate: t('form.duplicate'),
                                formChoose: t('form.choose'),
                                formSkillsEmpty: t('form.skillsEmpty'),
                                placeholderTitle: t('placeholder.title'),
                                placeholderNote: t('placeholder.note'),
                                placeholderCommand: t('placeholder.command'),
                                placeholderSkill: t('placeholder.skill'),
                                errorTitle: t('error.title'),
                                appearance: t('appearance'),
                                light: t('light'),
                                dark: t('dark'),
                                system: t('system'),
                                a11yBoard: t('a11y.board'),
                                a11yCard: t('a11y.card'),
                            },
                            usePreference: () => preferenceStore.use(),
                            onBack: () => { ctx.get('layout')?.selectPanel(null); },
                            onPreference: (id) => {
                                try {
                                    ctx.get('theme')?.setTheme(id);
                                }
                                catch (error) {
                                    console.error('sidebar-panel: could not switch appearance', error);
                                }
                            },
                            source,
                            listSkills: listSkillsFromHost,
                        };
                    },
                }, WorkbenchPage));
            },
        };
    },
});

