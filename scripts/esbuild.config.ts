import { build, context, type BuildOptions } from 'esbuild';
import { cpSync, rmSync } from 'node:fs';
import { buildEntry, buildTarget, dev, prod, assets } from './build-config.ts';

const options: BuildOptions = {
  entryPoints: [buildEntry],
  bundle: true,
  target: buildTarget
};

if (process.argv.includes('--dev')) {
  const ctx = await context({ ...options, outfile: dev.bundlePath });
  await ctx.watch();
  await ctx.serve({ servedir: dev.serverDir, host: dev.serverHost, port: dev.serverPort });
} else {
  rmSync(prod.outDir, { recursive: true, force: true });
  await build({ ...options, minify: true, outfile: prod.bundlePath });
  cpSync(assets.source.html, assets.target.html);
}
