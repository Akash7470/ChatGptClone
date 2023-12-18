import { Box, Container, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Footer = () => {
  return (
    <Box
      position={"fixed"}
      bottom={"0"}
      zIndex={"10"}
      width={"17%"}
      height={"10vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <AccountCircleIcon sx={{ marginRight: "20px" }} />
      <Typography variant="h6" ma component={"h6"}>
        Testing User
      </Typography>
    </Box>
  );
};

export default Footer;
