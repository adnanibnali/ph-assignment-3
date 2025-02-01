module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      16: "4rem",
    },
    extend: {
      backgroundImage: {
        "card-bg1":
          "url('assets/cute-dog-mid.png'), linear-gradient(to right bottom, #F8CCFB, #ACD2FD)",
      },
    },
  },
  plugins: [],
};
