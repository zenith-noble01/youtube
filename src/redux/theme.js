import { createSlice } from "@reduxjs/toolkit";
import { themeAction } from "./themeServices";

const theme = JSON.parse(localStorage.getItem("theme"));

export const themeSlice = createSlice({
  name: "theme",
  initialState: theme ? theme : "dark",
  reducers: {
    toogleTheme: (state) => {
      localStorage.setItem(
        "theme",
        JSON.stringify(themeAction.toogleTheme(state))
      );

      return themeAction.toogleTheme(state);
    },
  },
});

export const { toogleTheme } = themeSlice.actions;

export default themeSlice.reducer;
