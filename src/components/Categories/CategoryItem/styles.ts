import { palette } from "../../../styles/theme/theme";

export const styles = {
  CategoryItemWrapper: {
    flex: 1,
    margin: "3px",
    height: "70vh",
    position: "relative",
  },
  CategoryItemImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  CategoryItemInfo: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  CategoryItemTitle: {
    color: palette.color.white,
    marginBottom: "20px",
  },
  CategoryItemBtn: {
    padding: "5px 10px",
  },
};
