import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
