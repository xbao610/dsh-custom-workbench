/**
 * Generate `client.js` from `src/main.tsx`.
 *
 * The shipped `client.js` is a plain script that registers a lazy factory on
 * the browser module table; `require` inside that factory is that table, so
 * the generated text must never load a module itself. This build therefore
 * only applies TypeScript's JSX transform: the source binds `React` with the
 * factory's `require('react')`, the transform is pointed at that binding, and
 * the type-only TypeScript is erased. No bundler or runtime dependency is
 * added.
 *
 * The module id must equal the package name (the loader row and the browser
 * module table are keyed by it), so this script reads `package.json` and
 * prepends the name as `__PACKAGE_NAME__`; the source never repeats it.
 *
 * Run with a TypeScript 5 install available: `npm install` once (the
 * `typescript` devDependency), or point `TS_DIR` at any TypeScript 5:
 *   npm install && npm run build
 *   TS_DIR=/path/to/node_modules/typescript node scripts/build.mjs
 */
import { createRequire } from 'node:module'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const require = createRequire(import.meta.url)
const ts = require(process.env.TS_DIR ?? 'typescript')

/** A runtime React import would pull the module itself; JSX binds the factory's `React`. */
const REACT_IMPORT = "import * as React from 'react'\n"
/** The factory's module-table binding of React, named for the JSX transform. */
const RUNTIME_BINDING = "    const React = require('react')\n"
/** Placeholder for the JSX factory until the import line leaves the source. */
const REACT_LOCAL = '__dsh_react'
/** Import inserted only for the transform, whose `React.createElement` calls are rewritten below. */
const TRANSFORM_IMPORT = `import * as ${REACT_LOCAL} from 'react'\n`

const manifest = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'))
if (typeof manifest.name !== 'string' || manifest.name.length === 0) throw new Error('package.json has no name')

const source = readFileSync(join(root, 'src/main.tsx'), 'utf8')
if (!source.includes(RUNTIME_BINDING)) throw new Error('src/main.tsx must bind React through the factory require')
if (source.includes(REACT_IMPORT)) throw new Error('src/main.tsx must not import react at runtime; JSX uses the factory binding')

const stripped = TRANSFORM_IMPORT + source.replace(REACT_IMPORT, '')
const transformed = ts.transpileModule(stripped, {
  fileName: 'main.tsx',
  compilerOptions: {
    target: ts.ScriptTarget.ES2020,
    module: ts.ModuleKind.None,
    jsx: ts.JsxEmit.React,
    removeComments: false,
  },
}).outputText
  .replaceAll(`${REACT_LOCAL}.`, 'React.')
  // `module: None` still stamps the CommonJS interop marker onto a source that
  // has imports; the factory is reached through the module table, not `exports`.
  .replace(/^Object\.defineProperty\(exports, "__esModule", \{ value: true \}\);\n?/m, '')
  // A directive prologue only applies at the very top of a script; keep ours.
  .replace(/^"use strict";\n/, '')

const banner = [
  '/* GENERATED FILE — do not edit. Source: src/main.tsx; rebuild: node scripts/build.mjs */',
  `const __PACKAGE_NAME__ = ${JSON.stringify(manifest.name)};`,
  '',
].join('\n')
writeFileSync(join(root, 'client.js'), banner + transformed.trimStart() + '\n')
console.log('client.js written from src/main.tsx')
