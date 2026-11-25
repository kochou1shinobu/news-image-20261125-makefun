// Entry for the news-image-20261125 bounty:
// "Sum up 25 November's world news in one image."
//
// What this program does is deliberately tiny. The entry is the picture
// itself — entry.png, a one-page newspaper front page for Wednesday
// 25 November 2026, built from that day's verified headlines. The lead
// story is Washington proposing new tariffs on 14 trading partners; the
// six stories below it cover tankers hitting mines in the Strait of
// Hormuz, the Asian tech rout, Ukrainian drones hitting two Rosneft
// refineries, Huawei's conviction in Brooklyn, the Houthis' claim on
// Saudi Arabia's biggest refinery, and Shenzhou-24 carrying Pakistan's
// first astronaut to Tiangong. poster.html is the source the picture
// was rendered from (headless Chrome at 1024x1024), kept in the repo
// so anyone can see how the front page was composed.
//
// Running this program writes that same picture, byte for byte, to the
// output directory as entry.png. It reads nothing from the network and
// its output never changes between runs.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));

function flagValue(name: string): string | undefined {
  const at = process.argv.indexOf(`--${name}`);
  return at === -1 ? undefined : process.argv[at + 1];
}

const destination = resolve(
  flagValue("output") ?? process.env.MAKEFUN_OUTPUT_DIR ?? "/output",
);

mkdirSync(destination, { recursive: true });
copyFileSync(resolve(root, "entry.png"), resolve(destination, "entry.png"));
console.log(`wrote entry.png to ${destination}`);
