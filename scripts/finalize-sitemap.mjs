import { readdir, rename, rm } from 'node:fs/promises';
import { join } from 'node:path';

const outputDir = join(process.cwd(), 'dist', 'client');
const sitemapChunks = (await readdir(outputDir)).filter((file) => /^sitemap-\d+\.xml$/.test(file));

if (sitemapChunks.length === 0) {
  throw new Error('Astro did not generate a sitemap chunk.');
}

if (sitemapChunks.length > 1) {
  throw new Error(`Expected one sitemap chunk, found ${sitemapChunks.length}.`);
}

await rm(join(outputDir, 'sitemap.xml'), { force: true });
await rename(join(outputDir, sitemapChunks[0]), join(outputDir, 'sitemap.xml'));
await rm(join(outputDir, 'sitemap-index.xml'), { force: true });

console.info('Created dist/client/sitemap.xml');
