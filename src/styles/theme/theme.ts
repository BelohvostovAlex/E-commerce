import { createTheme } from "@mui/material";

export const palette = {
  color: {
    main: "teal",
    primary: "gray",
    white: "#FFF",
    black: "#000000",
  },
  background: {
    main: "#171515",
    primary: "#2B2243",
    white: "#FFF",
    black: "#000000",
  },
};

export const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
    h2: {
      fontSize: "70px",
      lineHeight: "1.5",
      fontWeight: "500",
    },
    h3: {
      fontSize: "24px",
      fontWeight: "700",
    },
    h4: {
      fontSize: "20px",
      letterSpacing: "3px",
      fontWeight: 500,
      lineHeight: "1.5",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          padding: "0px",
          margin: "0px",
          boxSizing: "border-box",
          background: palette.background.white,
          color: palette.color.black,
          WebkitFontSmoothing: "auto",
        },
        a: {
          textDecoration: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0px",
        },
        containedPrimary: {
          border: "2px solid black",
          background: palette.background.white,
          color: palette.color.primary,
          "&:hover": {
            color: palette.color.black,
            background: palette.color.white,
          },
        },
        containedSecondary: {
          background: palette.background.white,
          color: palette.color.primary,
          fontWeight: "600",
          "&:hover": {
            color: palette.color.black,
            background: palette.color.white,
          },
        },
        containedSizeLarge: {
          minWidth: "160px",
          height: "50px",
        },
        containedSizeMedium: {
          minWidth: "120px",
          height: "40px",
        },
        containedSizeSmall: {
          minWidth: "100px",
          height: "35px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "none",
        },
        input: {
          padding: "5px 10px",
          color: palette.color.black,
          background: palette.background.white,
          "&::placeholder": {
            color: palette.color.primary,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          minWidth: "60px",
          margin: "2px",
          color: "teal",
          borderRadius: "0px",
          border: "1px solid black",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: palette.color.main,
          },
          color: "teal",
          background: "white",
          padding: "0px 4px",
        },
      },
    },
  },
});
