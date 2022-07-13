export const styles = {
  Header: {
    width: "100%",
    height: "60px",
    backgroundColor: "white",
  },
  HeaderWrapper: {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    justifyContent: "space-between",
    color: "black",
  },
  HeaderLeft: {
    flex: "1",
    display: "flex",
    alignItems: "center",
  },
  HeaderLang: {
    fontSize: "14px",
    cursor: "pointer",
  },
  HeaderSearchContainer: {
    display: "flex",
    alignItems: "center",
    border: "0.5px solid lightgray",
    marginLeft: "25px",
  },
  HeaderSearchIcon: {
    color: "gray",
    fontSize: "16px",
    marginRight: "5px",
  },
  HeaderCenter: {
    flex: "1",
    textAlign: "center",
  },
  HeaderLogo: {
    fontWeight: "bold",
  },
  HeaderRight: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  HeaderLink: {
    fontSize: "14px",
    cursor: "pointer",
    marginRight: "25px",
    textTransform: "uppercase",
  },
  HeaderBadge: {
    "& .MuiBadge-badge": {
      background: "gray",
      height: "15px",
    },
  },
};
