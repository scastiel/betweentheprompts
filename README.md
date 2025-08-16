# Between the Prompts Blog

A Hugo blog styled with TailwindCSS.

## Development

### Prerequisites
- Hugo
- Node.js & npm

### Setup
```bash
npm install
```

### Development server
```bash
npm run dev
```
This starts both TailwindCSS in watch mode and Hugo server concurrently.

### Build for production
```bash
npm run build
```

### CSS Development
- Source CSS: `src/input.css`
- Output CSS: `static/css/style.css`
- Tailwind config: `tailwind.config.js`

The blog now uses TailwindCSS for all styling with:
- Dark mode support via system preference
- Responsive design (mobile-first)
- Monospace font throughout
- Custom color scheme matching the original design

### File Structure
```
layouts/
├── _default/
│   ├── baseof.html    # Base template with Tailwind classes
│   └── single.html    # Single post template
├── partials/
│   ├── header.html    # Navigation with Tailwind
│   ├── signup.html    # Email signup form
│   └── style.html     # Links to compiled CSS
└── shortcodes/
    └── post_list.html # Blog post listing
```

All original CSS has been converted to TailwindCSS utilities while maintaining the same visual design.