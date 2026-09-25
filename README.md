# terfno.github.io

![GitHub last commit](https://img.shields.io/github/last-commit/terfno/terfno.github.io)

## Env

Node.js は mise で管理している。プロジェクトルートで `mise install` を実行すると、
`mise.toml` に記載されたバージョンの Node.js と npm が利用できる。

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                     | Action                                           |
| :-------------------------- | :----------------------------------------------- |
| `mise install`              | Installs the project toolchain                   |
| `npm ci`                    | Installs dependencies from `package-lock.json`   |
| `npm run dev`               | Starts local dev server at `localhost:4321`      |
| `npm run build`             | Build your production site to `./dist/`          |
| `npm run preview`           | Preview your build locally, before deploying     |
| `npm run lighthouse`        | Run Lighthouse CI performance audits             |
| `npm run lighthouse:assert` | Run Lighthouse CI assertions only                |
| `npm run astro ...`         | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help`   | Get help using the Astro CLI                     |

## 🔍 Lighthouse CI

This project includes [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) for continuous performance monitoring.

### Features

- 🚀 **Performance Monitoring**: Automated Lighthouse audits on every commit
- 📊 **Performance Budgets**: Set thresholds for Core Web Vitals and other metrics
- 🔄 **CI/CD Integration**: Runs automatically on pull requests and deployments
- 📈 **Trend Analysis**: Track performance improvements and regressions over time

### Configuration

Lighthouse CI is configured in `.lighthouserc.js` with the following settings:

- **Performance**: Minimum score of 80%
- **Accessibility**: Minimum score of 90% (error on failure)
- **Best Practices**: Minimum score of 85%
- **SEO**: Minimum score of 85%
- **Core Web Vitals**: Enforced thresholds for FCP, LCP, CLS, and TBT

The CI workflow runs automatically on pushes to `master` and on pull requests.

## Hosting

`sueda.jp` は Cloudflare Pages で Astro のビルド成果物を公開する。GitHub Pages
には `.github/workflows/deploy.yml` から `github-pages-redirect/` だけを公開し、
旧 URL `https://terfno.github.io/` へのアクセスを `https://sueda.jp/` へ転送する。
転送時はパス・クエリ・ハッシュを引き継ぐ。GitHub Pages は静的配信のため、
これは HTTP 301 ではなくブラウザでの転送となる。JavaScript を実行できない場合は
トップページへ移動する。

GitHub Pages のカスタムドメイン設定から `sueda.jp` を解除して、
既定の `terfno.github.io` ドメインを利用する。旧 `CNAME` ファイルは使用しない。
変更の公開後は両ドメインの配信元と転送先を確認する。
