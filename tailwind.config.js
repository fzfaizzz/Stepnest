module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    fontFamily: {
      step: ['"Courier New"', 'Courier', 'monospace'], // Wrap "Courier New" in quotes
    },
    extend: {
      // You can extend other theme properties here
    },
    
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
