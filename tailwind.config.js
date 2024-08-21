/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        'value': ['Value', 'sans-serif'],
      },

      colors: {
        'heading-blue': ['#153a5b'],
        'hover-dark-blue': ['rgb(4 26 48)']
      },

      backgroundImage: {
        'shop-all-1': "url('https://res.cloudinary.com/larq/image/upload/w_790/v1692781791/Homepage-v3/Navigation/update/purification-big.jpg')",
        'banner-mobile': "url('https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1723834265/Luberon_Lavender_Mobile_tennis_new/Luberon_Lavender_Mobile_tennis_new.jpg?_i=AA')",
        'banner-desktop': "url('https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1723834257/Luberon_Lavender_desktop_tennis_new/Luberon_Lavender_desktop_tennis_new.jpg?_i=AA')",
      }
    },
  },
  plugins: [],
}

