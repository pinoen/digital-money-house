/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Opensans', 'sans-serif'],
      },
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'A1': '#201F22',
        'A2': '#3A393E',
        'A3': '#C1FD35',
        'A4': '#EEEAEA',
        'B1': '#0AEB8C',
        'B2': '#052A2D',
        'B3': '#D2FFEC',
        'B4': '#151817',
        'C1': '#FAE208',
        'C2': '#181818',
        'C3': '#3A3A3A',
        'C4': '#E3DFCF',
        'Ddark': '#EE3838',
        'Dlight': '#E91010',
        'btnGrey': '#CECECE'
      },
    },
  },
  plugins: [],
};
