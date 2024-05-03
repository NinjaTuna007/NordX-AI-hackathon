/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#0000a0",
        white: "#fff",
        black: "#000",
        gainsboro: "#d9d9d9",
        gray: "#312020",
        red: "#e10000",
        midnightblue: "#00005e",
        orange: "#f39a32",
        dimgray: "#4b4343",
        antiquewhite: "#eadfd1",
        sandybrown: {
          "100": "#e7ac66",
          "200": "#eaa85c",
        },
        peru: "#d78a3b",
        darkgray: "#989797",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        inter: "Inter",
        "open-sans-hebrew": "'Open Sans Hebrew'",
        inherit: "inherit",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lgi: "19px",
      smi: "13px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "17xl": "36px",
      "3xl": "22px",
      "13xl": "32px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq767: {
        raw: "screen and (max-width: 767px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
