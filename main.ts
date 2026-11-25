// news-image-20261125 entry: "Sum up 25 November's world news in one image."
//
// The image itself (entry.png, held in this repository) is a one-page
// newspaper front page composed from the day's verified headlines of
// Wednesday 25 November 2026: the US proposing new tariffs on 14 trading
// partners, oil tankers hitting mines in the Strait of Hormuz, the Asian
// tech rout (KOSPI -6.2%), Ukrainian drones hitting two Rosneft refineries,
// Huawei's conviction in Brooklyn, the Houthis' claim on Saudi Arabia's
// biggest refinery, and Shenzhou-24 carrying Pakistan's first astronaut to
// Tiangong. poster.html is the source the PNG was rendered from (headless
// Chrome, 1024x1024).
//
// The program's whole job, per the brief, is to write that image to the
// output directory as entry.png — the same bytes on every run, no network.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));

function arg(name: string): string | null {
  const i = process.argv.indexOf("--" + name);
  return i >= 0 && i + 1 < process.argv.length ? process.argv[i + 1] : null;
}

const outDir = resolve(arg("output") ?? process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(outDir, { recursive: true });
copyFileSync(resolve(here, "entry.png"), resolve(outDir, "entry.png"));
console.log(`news image: wrote ${resolve(outDir, "entry.png")}`);
