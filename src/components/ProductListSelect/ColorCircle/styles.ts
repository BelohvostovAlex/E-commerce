import { palette } from "../../../styles/theme/theme";

interface makeStylesProps {
  color: string;
}

export const makeStyles = ({ color }: makeStylesProps) => ({
  root: {
    circle: {
      width: "20px",
      height: "20px",
      border: `1px solid ${palette.color.primary}`,
      borderRadius: "50%",
      background: color || "black",
    },
  },
});
