const fs = require('fs');
const { execFileSync } = require('child_process');

for (const file of ['index.html', 'src/styles.css', 'src/main.js']) {
  if (!fs.existsSync(file)) throw new Error(`${file} fehlt`);
  if (!fs.readFileSync(file, 'utf8').trim()) throw new Error(`${file} ist leer`);
}

execFileSync(process.execPath, ['--check', 'src/main.js'], { stdio: 'inherit' });
console.log('Static WBT app files present and JavaScript syntax is valid.');
