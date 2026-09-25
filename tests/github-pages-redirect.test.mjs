import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

const script = await readFile(
  new URL("../github-pages-redirect/redirect.js", import.meta.url),
  "utf8",
).catch(() => "");

for (const [pathname, search, hash, expected] of [
  ["/", "", "", "https://sueda.jp/"],
  [
    "/about/",
    "?from=old-link",
    "#profile",
    "https://sueda.jp/about/?from=old-link#profile",
  ],
  ["//example.com/path", "", "", "https://sueda.jp//example.com/path"],
]) {
  test(`old GitHub Pages URL ${pathname}${search}${hash} redirects to sueda.jp`, () => {
    let destination;
    const location = {
      pathname,
      search,
      hash,
      replace: (url) => {
        destination = url;
      },
    };

    runInNewContext(script, { location });

    assert.equal(destination, expected);
  });
}
