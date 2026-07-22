import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the yuta links page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<html lang="ja">/);
  assert.match(html, /<title>ゆた｜links — @yutayuta_8e<\/title>/);
  assert.match(html, /ゆたの、ぜんぶ。/);
  assert.match(html, /https:\/\/yutayuta-world\.pages\.dev\//);
  assert.match(html, /両手でハートを作るゆた/);
  assert.doesNotMatch(html, /react-loading-skeleton|Your site is taking shape|codex-preview/);
});

test("keeps the page assets and accessibility affordances", async () => {
  const [page, layout, css, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);
  assert.match(page, /aria-label="ゆたのリンク一覧"/);
  assert.match(page, /rel="noopener noreferrer"/);
  assert.match(page, /href: "https:\/\/yutayuta-world\.pages\.dev\/"/);
  assert.match(layout, /lang="ja"/);
  assert.match(layout, /favicon\.svg/);
  assert.match(layout, /og\.png/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /link-hub__link\.link-hub__link--featured/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
