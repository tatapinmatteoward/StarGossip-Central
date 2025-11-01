/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003366',
        accent: '#FF6F61',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
