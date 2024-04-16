import { Theme, SxProps } from "@mui/material";

import {
  COLOR_BLUE,
  COLOR_ORANGE,
  COLOR_BLUE_GREY,
  COLOR_GREEN_ACCENT,
  COLOR_BLUE_GREY_DARKEN,
  COLOR_BLUE_GREY_LIGHTEN,
} from "../constants/colors";
import { FONT_HM, FONT_LS } from "../constants/fonts";
import { handleChangeTheme } from "../other/handlers";

export const TodoListLayoutSX = (theme: TTheme): SxProps<Theme> => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: handleChangeTheme(theme, {
    light: COLOR_BLUE_GREY,
    dark: COLOR_BLUE_GREY_DARKEN,
  }),
  "& .switch-wrapper": {
    pt: "32px",
    px: "32px",
  },
  "& .todo-list-wrapper": {
    width: "100%",
    rowGap: "24px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    "& .todo-title": {
      fontSize: FONT_HM,
      fontWeight: "500",
      color: handleChangeTheme(theme, {
        dark: COLOR_BLUE_GREY,
        light: COLOR_BLUE_GREY_DARKEN,
      }),
    },
    "& .todo-wrapper": {
      width: "80%",
      padding: "32px",
      minHeight: "500px",
      maxHeight: "500px",
      borderRadius: "4px",
      height: "fit-content",
      backgroundColor: COLOR_BLUE_GREY_LIGHTEN,
      "& .status-wrapper": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        "& .total-status , .success-status ,.pending-status ": {
          px: "8px",
          py: "4px",
          fontSize: FONT_LS,
          fontWeight: "500",
          borderRadius: "2px",
        },
        "& .total-status": {
          color: COLOR_BLUE,
          backgroundColor: COLOR_BLUE + "30",
        },
        "& .success-status": {
          color: COLOR_GREEN_ACCENT,
          backgroundColor: COLOR_GREEN_ACCENT + "30",
        },
        "& .pending-status": {
          color: COLOR_ORANGE,
          backgroundColor: COLOR_ORANGE + "30",
        },
      },
    },
  },
});
