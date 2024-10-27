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
      }
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};

// Updated plugin function
function addVariablesForColors({ addBase, theme }) {
  const colors = theme("colors");
  const newVars = Object.keys(colors).reduce((acc, colorKey) => {
    if (typeof colors[colorKey] === 'string') {
      acc[`--${colorKey}`] = colors[colorKey];
    } else if (typeof colors[colorKey] === 'object') {
      Object.keys(colors[colorKey]).forEach((shade) => {
        acc[`--${colorKey}-${shade}`] = colors[colorKey][shade];
      });
    }
    return acc;
  }, {});

  addBase({
    ":root": newVars,
  });
}