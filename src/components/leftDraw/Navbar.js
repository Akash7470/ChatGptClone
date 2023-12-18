import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LaunchIcon from "@mui/icons-material/Launch";

const Navbar = ({ handleClick }) => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"20px"}
        onClick={handleClick}
      >
        <AcUnitIcon />
        <Typography variant="h5" gridColumn={2}>
          New Chat
        </Typography>
        <LaunchIcon />
      </Box>
    </>
  );
};

export default Navbar;
