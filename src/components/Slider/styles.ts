interface makeStylesProps {
  slideIndex: number;
}

export const makeStyles = ({ slideIndex }: makeStylesProps) => ({
  root: {
    SliderContainer: {
      width: "100%",
      height: "100vh",
      display: "flex",
      position: "relative",
      overflow: "hidden",
    },
    SliderWrapper: {
      height: "100%",
      display: "flex",
      transform: `translateX(${slideIndex * -100}vw)`,
      transition: ".8s ease-out all",
    },
  },
});
