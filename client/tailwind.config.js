/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'darkbg':'#3a405a',
      'black':'#000000',
      'white':'#ffffff',
      'primary':'#189AB4', 
      'btnbg':'#75E6DA',
      'blue': '#1fb6ff',
      'red': '#ff4949',
      'input': '#1f2937',
      'poweredBlue': '#D4F1F4',
      'transparent': 'transparent',
      
    },
    dropShadow: {
      '3xl': '0 35px 35px rgba(255,255,255,1)',
      '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
      ],
    'white': '0 4px 6px rgba(255, 255, 255, 0.9)',
    'blue': '0 4px 6px rgba(0, 0, 255, 0.8)',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      Lora : ['Lora', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      backgroundImage:{
        'hero-pattern': "url('https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",

      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    
  plugins: [],
},
darkMode: 'class',
}