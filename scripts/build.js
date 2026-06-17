const fs=require('fs'); const path=require('path');
fs.rmSync('dist',{recursive:true,force:true}); fs.mkdirSync('dist/src',{recursive:true});
fs.copyFileSync('index.html','dist/index.html');
fs.copyFileSync('src/main.js','dist/src/main.js');
fs.copyFileSync('src/styles.css','dist/src/styles.css');
console.log('Built static WBT app to dist/');
