/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        signUpBg:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/1925d12b-edb9-4aca-ae4d-8e2777116b47/SO-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
