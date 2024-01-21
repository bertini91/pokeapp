import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { ITheme } from "../interfaces";

export const MyDarkTheme: ITheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#f4511e",
    colorPH: "#363b81",
    colorBH: "#fbd743",
    text: "rgb(244, 81, 30)",
    text2: "#5db9ff",
    text3: "#363b81",
    color1: "#fbd743",
    color2: "#ff1f1f",
    color3: "#5db9ff",
    color4: "#363b81",
    color5: "#ffffff",
    colorIndex: "#ffffff",
    backgroundHeader: "white",
  },
};
export const MyLigtTheme: ITheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#fbd743",
    colorPH: "#ff1f1f",
    colorBH: "#363b81",
    text: "#363b81",
    text2: "#5db9ff",
    text3: "#363b81",
    color1: "#fbd743",
    color2: "#ff1f1f",
    color3: "#5db9ff",
    color4: "#363b81",
    color5: "#ffffff",
    colorIndex: "#363b81",
    background: "white",
    backgroundHeader: "#5db9ff",
  },
};
