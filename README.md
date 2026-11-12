# dsh-custom-workbench

A **Custom workbench** entry for the left sidebar of the DeepSeek Harness (DSH) Web GUI. Click it and the main column shows a board of cards you can arrange yourself: notes, shell commands, and skills. The page is a global panel, so opening it never switches the session you are working in.

This is a standard DSH bundle: its patch inserts one row, and that row carries both halves — the Host half is empty, the browser half draws the sidebar entry and the page.

## Features

- **One sidebar row** — "Custom workbench" / 「定制工作台」, after the built-in entries; the row stays selected while the page is open.
- **Cards in three kinds** — note, command, skill. Command cards render their body as a monospace block.
- **Everything editable** — create, edit, duplicate, reorder (↑/↓), delete, and a "show on the board" switch per card.
- **Filter and search** — kind chips plus a search box over title and body.
- **Saved locally** — cards are stored in this browser's `localStorage`, so they survive a reload and a restart on the same machine. Nothing is sent anywhere.
- **Bilingual** — the row label, the page, and the plugin-list metadata follow the active locale (English and Simplified Chinese are bundled; the other locale files carry the plugin-list title and description).
- **Light and dark** — every colour comes from the host's `--dsw-alias-*` theme tokens.

## Install

Pick the form that matches how you received it.

**From a tarball or a local folder (desktop app):** open **Plugins**, choose **Add plugin**, and point it at the `.tgz` file or the unpacked folder.

**From the CLI:** the profile name is `web` for a plain `dsh web`, and your own profile name otherwise (the Desktop app manages its own profile — install through the app's **Plugins** page instead):

```sh
dsh plugin --profile web add /absolute/path/to/dsh-custom-workbench-1.0.0.tgz
dsh plugin --profile web add /absolute/path/to/unpacked/folder
```

Then refresh the page (or restart `dsh web`). The row appears under the built-in entries in the left sidebar.

**From this repository:**

```sh
dsh plugin --profile web add github:xbao610/dsh-custom-workbench
```

`client.js` is committed, so a Git install needs no build step and runs no install script. A **private** repository installs only for accounts that can read it and have Git credentials configured (HTTPS with a token, or SSH).

**From npm, once published:** `dsh plugin --profile web add dsh-custom-workbench`.

## Requirements and limits

- A DSH build that declares the `sidebar.panellist` and `main` slots (the 0.2.x Web GUI). Verified against 0.2.2-rc.2.
- No API key, no network access, and no Host service are used.
- Cards live in one browser profile on one machine. There is no sync between browsers, machines, or user accounts, and clearing site data removes them.
- Deleting the bundle removes the sidebar row; cards left in `localStorage` remain but are unreachable from the UI.

## Develop

`client.js` is generated — do not edit it by hand.

```sh
npm install        # installs the TypeScript devDependency
npm run build      # src/main.tsx -> client.js
```

- `src/main.tsx` — the authored page: dictionaries, the stylesheet string, the components, and the `apply(ctx)` body. It uses TypeScript's JSX transform; the build binds React to the browser module table's `require('react')` and never loads a module itself.
- `scripts/build.mjs` — the build. It reads `package.json` and injects `__PACKAGE_NAME__` so the browser module id always equals the package name (the loader row and the module table are keyed by it).
- `index.js` — the Host half. Empty by design.
- `cordis.patch.yml` — the bundle patch that inserts the row.
- `locale/*.json` — plugin-list title and description per language.
- `docs/DETAIL.md` + `docs/preview.svg` — the optional single-image detail page.

## License

MIT — see [LICENSE](LICENSE).
