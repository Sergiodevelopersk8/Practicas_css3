/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{"Inter":['Inter','sans-serif'],
      
    },
    colors:{
      "softOrange": "hsl(35,77%,62%)",
      "softRed": "hsl(5,85%,63%)",
      "offWhite": "hsl(36,100%,99%)",
      "grayishBlue": "hsl(233,8%,79%)",
      "darkGrayishBlue": "hsl(236,13%,42%)",
      "veryDarkBlue": "hsl(240,100%,5%)",
    },
    backgroundImage:{
      "abrir": "url(images/menu.png)",
      "menu-close": "url(images/cerrar.png)",
      "hero-desktop": "url(images/skate.jpg)",
      "hero-mobile": "url(images/spidermanps4.jpg)",
    }
    },
  },
  plugins: [],
}

