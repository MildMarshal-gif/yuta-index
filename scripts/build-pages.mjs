import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const nextBin = fileURLToPath(
  new URL("../node_modules/next/dist/bin/next", import.meta.url),
);
const result = spawnSync(process.execPath, [nextBin, "build"], {
  stdio: "inherit",
  env: { ...process.env, YUTA_PAGES_EXPORT: "1" },
});

if (result.error) {
  throw result.error;
}

process.exitCode = result.status ?? 1;
