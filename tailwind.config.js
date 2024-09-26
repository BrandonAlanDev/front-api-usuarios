/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{jsx,js}'
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)"
      },
      fontFamily: {
        museo900: ['Museo-Sans-900', 'sans-serif'],
        museo300: ['Museo-Sans-300', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

