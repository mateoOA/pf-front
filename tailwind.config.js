/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // Configure your color palette here
      'common-violet':'#7F56D9',
      'card-color':'#f2f2f2'
    },
    extend: {},
  },
  plugins: [],
}

