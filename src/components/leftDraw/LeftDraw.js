import React, { useContext, useState } from "react";
import { Box, ListItem, Stack, IconButton } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MyContext from "../context/MyContext";

const LeftDraw = () => {
  const [isHidden, setIsHidden] = useState(true);
  const contextData = useContext(MyContext);
  // console.log(contextData, "contextData:----");

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
    console.log("trr");
  };

  const handleClick = () => {
    console.log("Hello");
    // setfocusInputField(true);
  };

  return (
    <Box
      sx={{
        bgcolor: "black",
        color: "white",
        maxWidth: { md: "17vw", lg: "17vw" },
        height: "100vh",
        display: { xs: "none", sm: "block", md: "block" },
      }}
    >
      <Navbar handleClick={handleClick} />
      <Stack spacing={2} style={{ overflowY: "scroll", maxHeight: "80vh" }}>
        <ListItem>{contextData}</ListItem>
        <ListItem>Assets</ListItem>
        <ListItem>Groups</ListItem>
        <ListItem>Dasta</ListItem>
      </Stack>
      <Footer />
      {/* <IconButton
        sx={{ position: "absolute", bottom: 16, left: isHidden ? 0 : "17vw" }}
        onClick={toggleVisibility}
      >
        {isHidden ? (
          <ArrowForwardIcon sx={{ color: "red" }} />
        ) : (
          <ArrowBackIcon sx={{ color: "red" }} />
        )}
      </IconButton> */}
    </Box>
  );
};

export default LeftDraw;
