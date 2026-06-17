const fs=require('fs');
for (const file of ['index.html','src/styles.css','src/main.js']) {
  if (!fs.existsSync(file)) throw new Error(`${file} fehlt`);
  if (!fs.readFileSync(file,'utf8').trim()) throw new Error(`${file} ist leer`);
}
console.log('Static WBT app files present.');
