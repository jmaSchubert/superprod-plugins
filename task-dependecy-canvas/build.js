const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const filesToZip = ['manifest.json', 'plugin.js', 'index.html', 'icon.svg'];
const outputFile = 'task-dependency-canvas.zip';

console.log('Verifying files...');
for (const file of filesToZip) {
  if (!fs.existsSync(path.join(__dirname, file))) {
    console.error(`Missing required file: ${file}`);
    process.exit(1);
  }
}

console.log(`Packaging ${filesToZip.join(', ')} into ${outputFile}...`);

// Remove existing zip if present
if (fs.existsSync(path.join(__dirname, outputFile))) {
  fs.unlinkSync(path.join(__dirname, outputFile));
}

try {
  // Use system zip utility
  execSync(`zip -r "${outputFile}" ${filesToZip.join(' ')}`, {
    cwd: __dirname,
    stdio: 'inherit',
  });
  console.log(`\n Successfully created ${outputFile}!`);
  console.log('To install in Super Productivity:');
  console.log('1. Open Super Productivity');
  console.log('2. Go to Settings -> Plugins');
  console.log(`3. Click "Choose Plugin File" and select ${outputFile}`);
} catch (err) {
  console.error('Failed to create zip with system zip command:', err.message);
  process.exit(1);
}
