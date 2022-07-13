interface makeStylesProps {
  bg: string;
}

export const makeStyles = ({ bg }: makeStylesProps) => ({
  root: {
    SliderItem: {
      display: "flex",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      background: bg,
    },
    SliderImageContainer: {
      height: "100%",
      width: "50%",
      overflow: "hidden",
      flex: "1",
    },
    SliderImage: {
      height: "80%",
    },
    SliderInfoContainer: {
      flex: "1",
      padding: "50px",
      boxSizing: "border-box",
    },
    SliderInfoDesc: {
      margin: "50px 0px",
      maxWidth: "700px",
    },
    SliderInfoBtn: {
      padding: "10px 15px",
    },
  },
});
