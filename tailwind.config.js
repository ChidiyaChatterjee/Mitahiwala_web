/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightyellow:'#ffe7c2',
        brown:'#a45321',
        lightbrown:'#ca6629'

      },
      fontFamily:{
        poppins:["Poppins","sans-serif"],
        cursive:["Italianno","cursive"]
      },
      container:{
        center:true,
        padding:{
          default:"1rem",
          sm:"2rem",
          medi:"4rem",
          lg:"6rem",
          xl:"8rem"
        }
      },boxShadow: {
        glow: '0 0 8px rgba(255, 215, 0, 0.8), 0 0 15px rgba(255, 215, 0, 0.6)', // Adjust color and size for desired glow
      },
    },
  },
  plugins: [],
};

