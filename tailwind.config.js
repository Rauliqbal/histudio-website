const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
   theme: {
      extend: {
         container: {
            center: true,
         },
         colors: {
            primary: defaultTheme.colors.green,
         },
         fontFamily: {
            "work-sans": ["Work Sans", "sans-serif"],
            "space-grotesk": ["Space Grotesk", "sans-serif"],
         },
      },
   },
   plugins: [require("@tailwindcss/line-clamp")],
};
