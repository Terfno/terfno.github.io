import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const builtPage = async (path) =>
  readFile(new URL(`../dist${path}index.html`, import.meta.url), "utf8");

test("shared layouts emit canonical URLs for root, nested, and lab pages", async () => {
  const pages = await Promise.all([
    builtPage("/"),
    builtPage("/about/"),
    builtPage("/lab/"),
  ]);

  assert.match(pages[0], /<link rel="canonical" href="https:\/\/sueda\.jp\/"/);
  assert.match(pages[1], /<link rel="canonical" href="https:\/\/sueda\.jp\/about\/"/);
  assert.match(pages[2], /<link rel="canonical" href="https:\/\/sueda\.jp\/lab\/"/);
});

test("Cloudflare Pages copies receive noindex headers", async () => {
  const headers = await readFile(new URL("../public/_headers", import.meta.url), "utf8");

  assert.match(headers, /https:\/\/:project\.pages\.dev\/\*\s+X-Robots-Tag:\s*noindex/);
  assert.match(headers, /https:\/\/:version\.:project\.pages\.dev\/\*\s+X-Robots-Tag:\s*noindex/);
  assert.doesNotMatch(headers, /sueda\.jp/);
});
