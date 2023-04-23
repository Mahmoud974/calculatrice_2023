/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ///////////////THEME 1///////////////
        //Backgrounds
        verydarkDesaturated: "hsl(222, 26%, 31%)",
        BlueBackground: "hsl(223, 31%, 90%)",
        blueScreen: " hsl(224, 36%, 15%)",
        //Keys
        blueKey: "hsl(225, 21%, 49%)",
        blueKeyShadow: "hsl(224, 28%, 35%)",
        redToogle: "hsl(6, 63%, 50%)",
        redKeyShadow: "hsl(6, 70%, 34%)",
        yellowKeyShadow: "hsl(30, 25%, 89%)",
        orangeKeyShadow: "hsl(28, 16%, 65%)",
        //Text
        grayishblue: "hsl(221, 14%, 31%)",

        ///////////////THEME 2///////////////
        //Backgrounds
        LightGrayMainBackground: "hsl(0, 0%, 90%))",
        GrayishRedToggle: "hsl(0, 5%, 81%)",
        VeryLightGrayScreen: "hsl(0, 0%, 93%)",
        //Keys
        DarkModerateCyanKey: "hsl(185, 42%, 37%)",
        VeryDarkCyanKeyShadow: "hsl(185, 58%, 25%)",
        OrangeToogle: "hsl(25, 98%, 40%)",
        DarkOrangeKeyShadow: "hsl(25, 99%, 27%)",
        LightGrayishKeyShadow: "hsl(45, 7%, 89%)",
        DarkGrayishOrangeKeyShadow: "hsl(35, 11%, 61%)",
        //Text
        VeryDarkGrayishYellow: "hsl(60, 10%, 19%)",

        ///////////////THEME 3///////////////
        //Backgrounds
        DarkVioletMainBackground: "hsl(268, 75%, 9%)",
        DarkVioletToggle: "hsl(268, 71%, 12%)",
        //Keys
        DarkVioletKey: "hsl(281, 89%, 26%)",
        VividMagentaKeyShadow: "hsl(285, 91%, 52%)",
        PureCyanToogle: "hsl(176, 100%, 44%)",
        SoftCyanKeyShadow: "hsl(177, 92%, 70%)",
        VeryDarkVioletKeyShadow: "hsl(268, 47%, 21%)",
        DarkMagentaKeyShadow: "hsl(290, 70%, 36%)",
        //Text
        LightYellow: "hsl(52, 100%, 62%)",
        VeryDarkBlue: "hsl(198, 20%, 13%)",
      },
    },
  },
  plugins: [],
};
