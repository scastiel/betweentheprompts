# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "Between the Prompts", a Hugo-based blog styled with TailwindCSS. The blog focuses on AI tools in software engineering and is hosted at betweentheprompts.com.

## Technology Stack

- **Hugo**: Static site generator (v0.128.0 in production)
- **TailwindCSS**: Utility-first CSS framework with custom configuration
- **Node.js/npm**: For build tooling and dependency management
- **GitHub Pages**: Hosting with automated deployment via GitHub Actions

## Development Commands

### Setup
```bash
npm install
```

### Development Server
```bash
npm run dev
# OR
./dev.sh
```
Starts TailwindCSS in watch mode and Hugo server concurrently. The site will be available at http://localhost:1313.

### Production Build
```bash
npm run build
# OR
./build.sh
```
Builds minified CSS and generates the static site in `public/` directory.

### CSS Development
```bash
npm run build-css        # Watch mode for development
npm run build-css-prod   # Minified production build
```

## Architecture & Structure

### CSS Architecture
- **Source**: `src/input.css` - TailwindCSS entry point with custom base and component layers
- **Output**: `static/css/style.css` - Generated CSS file
- **Config**: `tailwind.config.js` - Custom Tailwind configuration with:
  - Monospace font family throughout
  - Dark mode via system preference (`media`)
  - Custom colors for links and code backgrounds
  - Content scanning for Hugo templates and markdown

### Hugo Template Structure
- **Base template**: `layouts/_default/baseof.html` - Contains site header, footer, and TailwindCSS classes
- **Single post**: `layouts/_default/single.html` - Individual blog post layout  
- **Homepage**: `layouts/index.html` - Landing page with post listing
- **Partials**: `layouts/partials/` - Reusable components (nav, SEO, signup form)
- **Shortcodes**: `layouts/shortcodes/` - Custom Hugo shortcodes for post listings

### Content Management
- **Content**: `content/` directory contains Markdown files
- **Config**: `hugo.toml` - Hugo configuration with "Bearblog"-style URLs
- **Static assets**: `static/` directory for images, CSS, and other assets

### Design System
The site uses a monospace aesthetic with TailwindCSS utilities:
- Typography: Monospace fonts throughout with custom sizing
- Colors: Custom link colors for light/dark modes, subtle code backgrounds  
- Dark mode: System preference based with custom dark theme colors
- Responsive: Mobile-first approach with max content width of 768px

### Deployment
- **GitHub Actions**: `.github/workflows/hugo.yml` handles automated deployment
- **Build process**: Installs Hugo, Node.js dependencies, builds site, and deploys to GitHub Pages
- **Hugo version**: Pinned to 0.128.0 in production workflow

## Content Structure
- Blog posts are in `content/` as Markdown files
- Uses Hugo's default permalink structure with slugs
- Taxonomy features are disabled for simplicity
- Supports syntax highlighting with "bw" (black & white) style

## Git Workflow
- Always use rebase, never merge
