import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

// Ensure dist directories
['privacy', 'terms', 'support'].forEach((dir) => {
  const targetDir = path.join(distDir, dir);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const redirectHtml = `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Lingo Beats - ${dir}</title>
    <script>window.location.replace('../#${dir}');</script>
    <meta http-equiv="refresh" content="0; url=../#${dir}">
  </head>
  <body style="background:#0b171f;color:#fff;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;">
    <p>Загрузка Lingo Beats...</p>
  </body>
</html>`;

  fs.writeFileSync(path.join(targetDir, 'index.html'), redirectHtml, 'utf8');
});

// Create 404.html from index.html for GitHub Pages fallback
const indexPath = path.join(distDir, 'index.html');
if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, path.join(distDir, '404.html'));
}

// Create .nojekyll to prevent GitHub Pages from ignoring files
fs.writeFileSync(path.join(distDir, '.nojekyll'), '', 'utf8');

console.log('Postbuild finished successfully: created redirects and .nojekyll');
