# aaronsoft.de

[![Build and Release](https://github.com/Kartoffelbauer/web-aaronsoft/actions/workflows/build-release.yml/badge.svg)](https://github.com/Kartoffelbauer/web-aaronsoft/actions/workflows/build-release.yml)
[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fwww.aaronsoft.de)](https://www.aaronsoft.de)

Source code for the software engineering portfolio at **[www.aaronsoft.de](https://www.aaronsoft.de)**.

## 🛠 Built With

This project was built with a focus on high performance, zero-dependency styling, and long-term maintainability.

- **[Astro](https://astro.build/)** - Static Site Generator (SSG) for shipping zero-JS by default.
- **[TypeScript](https://www.typescriptlang.org/)** - For strictly typed configuration and utility logic.
- **Vanilla CSS** - Component-scoped styling and native CSS variables (No CSS frameworks).
- **[Docker](https://www.docker.com/) & [Nginx](https://nginx.org/)** - Multi-stage, unprivileged containerization for highly secure, lightning-fast edge serving.

## 💻 Local Development

To run this project locally, ensure you have [Node.js](https://nodejs.org/) (v24+) installed.

```bash
# 1. Clone the repository
git clone https://github.com/Kartoffelbauer/web-aaronsoft.git
cd web-aaronsoft

# 2. Install dependencies
npm install

# 3. Start the Astro development server (with Hot Module Replacement)
npm run dev

```

Navigate to `http://localhost:3000` to view the site. To add or modify content (skills, projects, etc.), simply edit the central `src/data/config.ts` file.

## 🚀 Deployment

### Docker (Recommended)

The easiest and most secure way to deploy. The image uses a multi-stage build that compiles the Astro site and serves it via an unprivileged Nginx user.

```bash
docker run -d -p 8080:8080 ghcr.io/kartoffelbauer/web-aaronsoft:latest

```

### Manual Serving

Because modern static sites use absolute routing, serve the page using any standard web server.

1. Download `website-compiled.zip` from the [Releases](https://github.com/Kartoffelbauer/web-aaronsoft/releases) page.
2. Extract the contents.
3. Serve the extracted `dist` folder using any standard web server (Nginx, Apache, or a simple local server like `npx serve .`).

## 📄 License

Licensed under the **[Apache License 2.0](https://www.google.com/search?q=LICENSE)**.
