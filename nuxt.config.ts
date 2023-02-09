// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   modules: ["@nuxtjs/tailwindcss"],
   app: {
      head: {
         charset: "utf-16",
         viewport: "width=500, initial-scale=1",
         title: "Hi Studio - Website Template and Design Resources",
         meta: [
            // <meta name="description" content="My amazing site">
            { name: "description", content: "Hi Studio, Design Assets, Website Design, Website Template, template website html css" },
         ],
         link: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600&family=Work+Sans:wght@400;500;600;700&display=swap" }],
      },
      pageTransition: { name: "page", mode: "out-in" },
   },
});
