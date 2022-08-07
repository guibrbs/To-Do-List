/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern-background': "url('assets/pattern_background.svg')"
      }
    },
    colors: {
      'background': '#181820',
      'secondary': '#21212B',
      'secondaryLight': '#292A37',
      'text': '#F6F6F6',
      'textDarker': '#B7B7B7',
      'primary': '#00897B',
      'primaryDarker': '#007165'
    }
  },
  plugins: [],
}