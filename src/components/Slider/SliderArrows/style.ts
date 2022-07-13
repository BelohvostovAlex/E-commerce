interface makeStyleProps {
  direction: string;
}

export const makeStyles = ({ direction }: makeStyleProps) => ({
  SliderArrow: {
    width: "50px",
    height: "50px",
    backgroundColor: "gray",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "0px",
    bottom: "0px",
    right: direction === "right" ? "10px" : "",
    left: direction === "left" ? "10px" : "",
    margin: "auto",
    cursor: "pointer",
    opacity: "0.5",
    zIndex: "2",
    "&:hover": {
      opacity: 0.8,
    },
    transition: ".2s linear all",
  },
  SliderArrowIcon: {
    fontSize: "40px",
  },
});
