import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { FONT_CL } from "../constants/fonts";

export const todoFormSX: SxProps<Theme> = {
  width: "100%",
  "& .todo-input": {
    width: "100%",
    my: "18px",
    borderRadius: "2px",
    "& .MuiInputBase-root": {
      "& .MuiInputBase-input ": {
        px: "8px",
        fontSize: FONT_CL,
      },
    },
    "& .icon-wrapper": {
      cursor: "pointer",
    },
  },
};
