import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import { buildYTData } from './get-yt-data-json.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.resolve(__dirname, '../data');
const outputPath = path.resolve(outputDir, 'music.json');

async function main() {
    console.log(' ');
    console.log("\x1b[32m%s\x1b[0m", "Success: write-json.js started!");
    console.log("Running write-json.js — " + new Date().toLocaleTimeString());

    const musicDatabase = await buildYTData();

    await mkdir(outputDir, { recursive: true });
    await writeFile(outputPath, JSON.stringify(musicDatabase, null, 2));

    console.log("\x1b[32m%s\x1b[0m", `Success: wrote ${outputPath}`);
}

main().catch((err) => {
    console.log("\x1b[31m%s\x1b[0m", "Error: write-json.js failed!");
    console.error(err);
    process.exitCode = 1;
});