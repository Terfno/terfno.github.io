# terfno.github.io

![GitHub last commit](https://img.shields.io/github/last-commit/terfno/terfno.github.io)

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

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run lighthouse`      | Run Lighthouse CI performance audits            |
| `npm run lighthouse:assert` | Run Lighthouse CI assertions only              |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

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
