/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#FFFFFF',
        panel: '#F7F7F7',
        line: 'rgba(0,0,0,0.1)'
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Inter Tight"', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      boxShadow: {
        glow: '0 18px 55px rgba(0, 0, 0, 0.08)'
      }
    }
  },
  plugins: []
};
