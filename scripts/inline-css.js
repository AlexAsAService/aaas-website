import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

// Find the CSS file
const assetsDir = path.join(distDir, 'assets');
if (!fs.existsSync(assetsDir)) {
  console.log('No assets directory found.');
  process.exit(0);
}

const files = fs.readdirSync(assetsDir);
const cssFile = files.find(f => f.endsWith('.css'));

if (cssFile) {
  const cssContent = fs.readFileSync(path.join(assetsDir, cssFile), 'utf-8');
  
  // Find all HTML files in dist
  const htmlFiles = fs.readdirSync(distDir).filter(f => f.endsWith('.html'));
  
  for (const htmlFile of htmlFiles) {
    const htmlPath = path.join(distDir, htmlFile);
    let html = fs.readFileSync(htmlPath, 'utf-8');

    // Replace the <link rel="stylesheet"> with the inlined <style> tag
    html = html.replace(/<link[^>]*rel="stylesheet"[^>]*href="\/assets\/[^>]*\.css"[^>]*>/i, `<style>${cssContent}</style>`);

    fs.writeFileSync(htmlPath, html);
    console.log(`Inlined CSS into ${htmlFile}`);
    
  }
  fs.unlinkSync(path.join(assetsDir, cssFile));
}
