/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./index.html",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
      ],
  theme: {
    fontFamily: {
      inter: ['Inter']
    },

    extend: {
      colors: {
        primary: {
          50: '#fbf7fc',
          100: '#f5eff8',
          200: '#ebdef0',
          300: '#dcc3e4',
          400: '#c79fd3',
          500: '#ad78bd',
          600: '#9159a0',
          700: '#814d8d',
          800: '#633c6c',
          900: '#54355a',
          950: '#331a38',
          DEFAULT: '##814D8D'
        }
      }
    }
  },
  plugins: []
}
