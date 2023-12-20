import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import logo from "../../Images/logo.png";

const Navbar = ({ handleClick }) => {
  const logoCircle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "grey",
  };
  const navBox = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    onClick: handleClick,
  };
  return (
    <>
      <Box sx={navBox}>
        <img style={logoCircle} src={logo} alt="logo not visible" />

        <Typography variant="h5" gridColumn={2}>
          New Chat
        </Typography>
        <LaunchIcon />
      </Box>
    </>
  );
};

export default Navbar;
