const fs = require('fs');
const { execFileSync } = require('child_process');

const requiredFiles = ['index.html', 'src/styles.css', 'src/main.js'];

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) throw new Error(`${file} fehlt`);
  if (!fs.readFileSync(file, 'utf8').trim()) throw new Error(`${file} ist leer`);
}

const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('src/styles.css', 'utf8');
const js = fs.readFileSync('src/main.js', 'utf8');

for (const reference of ['src/styles.css', 'src/main.js']) {
  if (!html.includes(reference)) throw new Error(`index.html referenziert ${reference} nicht`);
}

for (const requiredText of ['Prompt-Lab', 'Lernzielkontrolle', 'Drehbuch', 'Use-Cases']) {
  if (!js.includes(requiredText)) throw new Error(`Pflichtinhalt fehlt: ${requiredText}`);
}

if (css.includes(':has(')) throw new Error('CSS :has() wird bewusst vermieden, damit die App breiter kompatibel bleibt');

execFileSync(process.execPath, ['--check', 'src/main.js'], { stdio: 'inherit' });
console.log('Static WBT app files, references, required content and JavaScript syntax are valid.');
