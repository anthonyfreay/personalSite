import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load routes from routes.json (single source of truth)
const routesPath = path.resolve(__dirname, '../routes.json');
const routes = JSON.parse(fs.readFileSync(routesPath, 'utf-8'))
  .map(r => r.path)
  .filter(p => p && p !== '/');

const distPath = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distPath, 'index.html');

// Read the main index.html
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

// Create a directory and index.html for each route
routes.forEach(route => {
  const routePath = path.join(distPath, route);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(routePath)) {
    fs.mkdirSync(routePath, { recursive: true });
  }
  
  // Copy index.html to route directory
  const routeIndexPath = path.join(routePath, 'index.html');
  fs.writeFileSync(routeIndexPath, indexHtml);
  
  console.log(`✓ Pre-rendered: ${route}`);
});

// Create .nojekyll file for GitHub Pages
const nojekyllPath = path.join(distPath, '.nojekyll');
fs.writeFileSync(nojekyllPath, '');
console.log('✓ Created .nojekyll file');

console.log('\n✅ Pre-rendering complete!');
