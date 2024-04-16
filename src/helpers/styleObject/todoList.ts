import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { FONT_LM, FONT_CL } from "../constants/fonts";
import { COLOR_BLUE_GREY, COLOR_BLUE_GREY_LIGHTEN } from "../constants/colors";

export const todoListSX: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  "& .no-data": {
    width: "100%",
    height: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .image": {
      fontSize: "200px",
    },
  },
};

export const todoTableSX: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: COLOR_BLUE_GREY,
  borderRadius: "4px",
  px: "12px",
  py: "6px",
  "& .title-wrapper": {
    "& .title": {
      fontSize: FONT_LM,
      color: COLOR_BLUE_GREY_LIGHTEN,
    },
    "& .subtitle": {
      fontSize: FONT_LM,
      color: COLOR_BLUE_GREY_LIGHTEN + "99",
    },
  },
  "& .actions-wrapper": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& .priorities": {
      fontSize: FONT_LM,
      position: "relative",
      color: COLOR_BLUE_GREY_LIGHTEN,
      ":before": {
        top: "40%",
        width: "8px",
        content: "''",
        height: "8px",
        left: "-15px",
        background: "red",
        borderRadius: "50%",
        position: "absolute",
      },
    },
    "& .date": { fontSize: FONT_CL, color: COLOR_BLUE_GREY_LIGHTEN },
    "& .icon": { fontSize: "24px" },
    "& .checkbox": { width: "24px" },
  },
};
