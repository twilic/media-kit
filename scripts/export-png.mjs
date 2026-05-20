import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SIZE = 2000;

const logos = [
  "logo/badge/normal.svg",
  "logo/badge/inverted.svg",
  "logo/wordmark/normal.svg",
  "logo/wordmark/inverted.svg",
];

for (const relativePath of logos) {
  const svgPath = join(ROOT, relativePath);
  const pngPath = svgPath.replace(/\.svg$/, ".png");
  const svg = readFileSync(svgPath, "utf8");
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: SIZE },
  });
  const png = resvg.render().asPng();
  writeFileSync(pngPath, png);
  console.log(`${relativePath} -> ${relativePath.replace(/\.svg$/, ".png")}`);
}
