/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html"
  ],
  darkMode: 'media', // Use system preference for dark mode
  theme: {
    extend: {
      fontFamily: {
        'mono': ['ui-monospace', '"Cascadia Code"', '"Source Code Pro"', 'Menlo', 'Consolas', '"DejaVu Sans Mono"', 'monospace'],
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
      },
      maxWidth: {
        'content': '768px',
      },
      colors: {
        'link': '#3273dc',
        'link-dark': '#8cc2dd',
      },
      backgroundColor: {
        'code-light': 'rgba(0, 0, 0, 0.035)', // equivalent to #00000009
        'code-dark': 'rgba(255, 255, 255, 0.035)', // equivalent to #ffffff09
      },
      borderColor: {
        'quote': '#999',
        'hr': '#ccc',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}