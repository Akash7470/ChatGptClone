import "jquery";
import "textillate";
import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import UserInput from "./UserInput";
import GridViewIcon from "@mui/icons-material/GridView";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import apiHandle from "../services/apiHandle";
import logo from "../../Images/logo.png";
import human from "../../Images/human.png";
import bgTheme from "../../Images/asset_pandas_bg.png";
import { useMediaQuery } from "react-responsive";

const RightDraw = ({
  debouncedClick,
  handleChange,
  questionStatement,
  userInputData,
}) => {
  const animatedRef = useRef(null);
  const [answerStatement, setAnswerStatement] = useState("");

  const logoCircle = {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    backgroundColor: "none",
  };

  const sideLogo = {
    position: "fixed",
    padding: "20px 0px",
    width: "200px",
  };

  const typoTextStyle = {
    textAlign: "left",
    fontFamily: "roboto",
    fontSize: "19px",
    fontWeight: "500",
    lineHeight: "1.4",
    marginTop: "27px",
  };

  const isSmallScreen = useMediaQuery({ maxWidth: 1200 });

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      userInputResponse();
    }
  };

  const userInputResponse = async () => {
    debouncedClick();
    try {
      const response = await apiHandle.post("webhook/", {
        data: userInputData,
      });
      setAnswerStatement(response.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const animateOptions = { in: { effect: "fadeIn" } };

    if (animatedRef.current !== null) {
      window.$(animatedRef.current).textillate(animateOptions);
    }
  }, [answerStatement, animatedRef]);

  return (
    <>
      <img style={sideLogo} src={bgTheme} alt="" srcset="" />
      <Container maxWidth={"md"}>
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <img style={logoCircle} src={human} alt="logo not visible" />
          <Typography sx={typoTextStyle}>
            <b>You</b>
            <br />
            {questionStatement !== ""
              ? questionStatement.charAt(0).toUpperCase() +
                questionStatement.substring(1, questionStatement.length)
              : "Hey, I am a Panda's bot"}
          </Typography>
        </Box>
        <Box marginTop={"20px"} display={"flex"} alignItems={"top"} gap={2}>
          <img style={logoCircle} src={logo} alt="logo not visible" />

          {answerStatement !== "" ? (
            <Typography ref={animatedRef} sx={typoTextStyle}>
              <b>Pandas</b>
              <br />
              {answerStatement}
            </Typography>
          ) : null}
        </Box>
      </Container>
      <UserInput
        handleChange={handleChange}
        handleClick={userInputResponse}
        handleKeyDown={handleKeyDown}
        userInputData={userInputData}
      />
    </>
  );
};

export default RightDraw;
