import { readFileSync } from 'node:fs';
const read = p => readFileSync(new URL('../' + p, import.meta.url), 'utf8');
const src = read('src/js/loki-companion.js');
const p2 = read('src/js/p2-features.js');
const build = read('build.mjs');
const html = read('index.html');
const checks = [
  ['Study with Loki tab', src.includes('Study with Loki')],
  ['Stay with Loki tab', src.includes('Stay with Loki')],
  ['task field and focus timer', src.includes('What are we working on?') && src.includes('focusMinutes:25')],
  ['pause/reset/break controls', src.includes('id="lc-reset"') && src.includes('id="lc-start"') && src.includes('id="lc-switch"')],
  ['interactive Loki response', src.includes("function interact(e)") && src.includes("pick(stay)")],
  ['art upload/remove/position controls', src.includes('uploadArt') && src.includes('removeArt') && src.includes("['scale','x','y']")],
  ['Mochi root storage', src.includes("window.xyStore('xy-home-v2')")],
  ['large art IDB fallback', src.includes("window.idbGet('xy-home-v2:'+ART_KEY)")],
  ['8 MB image guard', src.includes('f.size>8*1024*1024')],
  ['wake lock and foreground recovery', src.includes("navigator.wakeLock.request('screen')") && src.includes("visibilitychange")],
  ['legacy icon replacement absent', !src.includes('replaceIcon')],
  ['existing companion button opens new UI first', p2.includes("if (window.LokiCompanionApp) { window.LokiCompanionApp.show(); return; }")],
  ['new script loads before p2', build.indexOf("'loki-companion.js'") < build.indexOf("'p2-features.js'")],
  ['built output contains companion', html.includes('window.LokiCompanionApp={show:show,hide:hide}') && html.includes('Stay with Loki')]
];
let pass = 0;
for (const [name, ok] of checks) { console.log((ok ? 'PASS' : 'FAIL') + '  ' + name); if (ok) pass++; }
console.log(`Result: ${pass}/${checks.length}`);
if (pass !== checks.length) process.exit(1);
