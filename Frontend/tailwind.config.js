// module.exports = {
//     content: ["./src/**/*.{js,ts,jsx,tsx}"], // Adjust if necessary
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   };
  

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'shine': 'shine 1.5s infinite',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};