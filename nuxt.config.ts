import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["assets/css/tailwind.css"],
  vite: {
    // @ts-expect-error - Vite version mismatch between @tailwindcss/vite and Nuxt's internal Vite
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/eslint", "@nuxt/image"],
});
