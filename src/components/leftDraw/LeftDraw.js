import React, { useContext, useState } from "react";
import { Box, ListItem, Stack, ListItemText, IconButton } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DehazeIcon from "@mui/icons-material/Dehaze";
import MyContext from "../context/MyContext";
import bgTheme from "../../Images/asset_pandas_bg.png";

const LeftDraw = ({ chats, activeChat, setActiveChat, handleNewChat }) => {
  const [hiddenBtn, setHiddenBtn] = useState(false);
  const contextData = useContext(MyContext);

  const visibleBtn = () => {
    setHiddenBtn(!hiddenBtn);
    // console.log("Hello");
  };

  const stackStyle = {
    // width: "17vw",
    overflowY: "scroll",
    maxHeight: "75vh",
    text: "center",
  };
  const listItems = {
    boxShadow: 1,
    borderRadius: 2,
    // bgcolor: "green",
    color: "#424242",
    lineHeight: "2",
    "&:hover": {
      backgroundColor: "#69f0ae",
      opacity: "0.8",
    },
  };

  const sideLogo = {
    padding: "10px 0px",
    width: "200px",
    left: "18vw",
  };

  return (
    <>
      <IconButton
        sx={{
          position: "absolute",
          top: 16,
          left: "3vw",
          display: {
            sx: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <DehazeIcon sx={{ color: "red" }} onClick={visibleBtn} />
      </IconButton>
      <Box
        sx={{
          bgcolor: "white",
          color: "#424242",
          maxWidth: { md: "17vw", lg: "17vw" },
          height: "100vh",
          display: {
            xs: hiddenBtn ? "block" : "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          },
        }}
      >
        <Box display="flex" justifyContent="center">
          <img style={sideLogo} src={bgTheme} alt="" srcSet="" />
        </Box>
        <Navbar handleNewChat={handleNewChat} />
        <Stack spacing={2} sx={stackStyle}>
          <ListItem sx={listItems}>
            {contextData > 20
              ? contextData.substring(0, 20).concat(" ....")
              : contextData}
          </ListItem>
        </Stack>
        <Footer />
      </Box>
    </>
  );
};

export default LeftDraw;
