const publicDir = 'public';
const distDir = 'dist';

export const buildEntry = 'src/main.ts';
export const buildTarget = 'es2022';

export const dev = {
  serverHost: '127.0.0.1',
  serverPort: 8000,
  serverDir: 'public',
  bundlePath: `${publicDir}/bundle.js`
} as const;

export const prod = {
  outDir: distDir,
  bundlePath: `${distDir}/bundle.js`
} as const;

export const assets = {
  source: { html: `${publicDir}/index.html` },
  target: { html: `${distDir}/index.html` }
} as const;