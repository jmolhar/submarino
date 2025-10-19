#!/usr/bin/env node

const { execSync } = require('child_process');
const { writeFileSync, mkdirSync } = require('fs');

const exec = (cmd) => execSync(cmd, { stdio: 'inherit' });

const tsconfig = {
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "esModuleInterop": true,
    "rootDir": "./src",
    "outDir": "./dist",
    "moduleResolution": "node",
    "strict": true,
  }
};

const packageScripts = {
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "tsc --watch"
  }
};

const setup = () => {
  const projectName = process.argv[2] || 'proyecto-ts';

  console.log(`Creando proyecto: ${projectName}`);

  exec(`mkdir ${projectName}`);
  process.chdir(projectName);
  exec('npm init -y');
  exec('npm install typescript --save-dev');
  exec('npx tsc --init');

  writeFileSync('tsconfig.json', JSON.stringify(tsconfig, null, 2));

  const pkg = require(`${process.cwd()}/package.json`);
  pkg.scripts = packageScripts.scripts;
  writeFileSync('package.json', JSON.stringify(pkg, null, 2));

  mkdirSync('src');
  mkdirSync('dist');
  writeFileSync('src/index.ts', `console.log("Hola TypeScript desde ${projectName}");`);

  console.log('Proyecto TypeScript creado correctamente.');
  
};

setup();