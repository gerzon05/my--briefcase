/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily:{
      Neue: ['Bebas Neue'],
      tillana: ['Permanent Marker'],
      lilita: ['Lilita One']
    }
  },
  plugins: [require('flowbite/plugin')],
}

