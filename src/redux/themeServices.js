export const themeAction = {
  toogleTheme: (state) => {
    if (state === "light") {
      return "dark";
    } else {
      return "light";
    }
  },
};
