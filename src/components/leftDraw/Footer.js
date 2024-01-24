import { Box, Container, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Footer = () => {
  const footerStyle = {
    position: "fixed",
    bottom: "0",
    zIndex: "10",
    width: "14%",
    padding: "5px",
    margin: "5px",
    backgroundColor: "#1565c0",
    color: "white",
    borderRadius: "10px",
    height: "6vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={footerStyle}>
      <AccountCircleIcon sx={{ marginRight: "40px" }} />
      <Typography variant="h6" component={"h6"}>
        Testing User
      </Typography>
    </div>
  );
};

export default Footer;
