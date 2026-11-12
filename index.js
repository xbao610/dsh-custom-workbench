/**
 * Host half of the sidebar-panel bundle. The sidebar entry and the
 * customizable workbench page it opens live entirely in the browser, so
 * activation registers nothing on the Host; the empty body keeps the row
 * resolvable from the loader.
 *
 * The workbench keeps its cards in the browser's local storage, so no Host
 * service or RPC bridge is needed: cards survive a page reload on the same
 * machine without any Host round-trip.
 */
export function apply() {}
