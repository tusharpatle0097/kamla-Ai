/** @type {import('tailwindcss').Config} */
import video from './src/assets/ai.mp4'
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary': '#276b6c',
        'dark': '#000000',
      },
      backgroundImage: {
        // 'hero-pattern': "url('https://kaps-hazel.vercel.app/img/intro-bg.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'custom-gradient': "url('https://www.cdnsol.com/blog/wp-content/uploads/2017/11/Blockchain-Technology-Solutions.gif')",
        'gradient-highlight-vertical': 'linear-gradient(15deg, #7c84fc, #ff4dd2)',
        'gradient-highlight-horizontal': 'linear-gradient(90deg, #ff4dd2, #7c84fc)',
        'gradient-highlight-diagonal': 'linear-gradient(45deg, #7c84fc, #ff4dd2)',
      },
      backgroundRepeat: {
        'no-repeat': 'no-repeat',
        'repeat': 'repeat',
        'repeat-x': 'repeat-x',
        'repeat-y': 'repeat-y',
      },
      height: {
        'screen': '100vh',
      },
      width: {
        'screen': '100vw',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}

