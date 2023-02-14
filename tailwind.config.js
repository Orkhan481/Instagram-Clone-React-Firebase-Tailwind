/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#1877f2',
        facebook: '#385185',
      },
      backgroundImage: {
        'login-pattern': "url('https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones-2x.png?__makehaste_cache_breaker=73SVAexZgBW')"
      }
    },
  },
  plugins: [],
}
