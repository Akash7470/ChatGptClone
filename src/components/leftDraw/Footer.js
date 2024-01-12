import { Box, Container, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Footer = () => {
  return (
    <Box
      position={"fixed"}
      bottom={"0"}
      zIndex={"10"}
      width={"13%"}
      padding={"5px"}
      height={"8vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <AccountCircleIcon sx={{ marginRight: "40px" }} />
      <Typography variant="h6" component={"h6"}>
        Testing User
      </Typography>
    </Box>
  );
};

export default Footer;
