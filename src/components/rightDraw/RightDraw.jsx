import "jquery";
import "textillate";
import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import UserInput from "./UserInput";
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
  textFieldRef,
}) => {
  const animatedRef = useRef(null);
  const [answerStatement, setAnswerStatement] = useState("");
  const [quesAnsList, setQuesAnsList] = useState([]);

  const logoCircle = {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    backgroundColor: "none",
    marginTop: "30px",
  };

  const sideLogo = {
    position: "absolute",
    padding: "20px 0px",
    width: "200px",
    left: "18vw",
  };

  const typoTextStyle = {
    width: "100%",
    textAlign: "left",
    fontFamily: "roboto",
    fontSize: "19px",
    fontWeight: "500",
    lineHeight: "1.2",
    boxShadow: 4,
    padding: 1.5,
    margin: 2,
    borderRadius: 2,
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      userInputResponse();
    }
  };

  const userInputResponse = async () => {
    debouncedClick();
    try {
      const response = await apiHandle.post("query", {
        query: userInputData,
      });
      console.log(response);
      setAnswerStatement(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const animateOptions = {
      in: {
        effect: "fadeIn",
      },
    };
    if (animatedRef.current !== null) {
      window.$(animatedRef.current).textillate(animateOptions);
    }
  }, [answerStatement, animatedRef]);

  return (
    <>
      <Container maxWidth={"md"} flexDirection={"column"}>
        <Box>
          <img style={sideLogo} src={bgTheme} alt="" srcSet="" />
        </Box>

        <Box display={"flex"} alignItems={"center"} gap={2}>
          {questionStatement !== "" ? (
            <img style={logoCircle} src={human} alt="logo not visible" />
          ) : (
            <img style={logoCircle} src={logo} alt="logo not visible" />
          )}

          <Typography sx={typoTextStyle}>
            {questionStatement !== "" ? (
              <>
                <b>You</b>
                <p>
                  {questionStatement?.charAt(0).toUpperCase() +
                    questionStatement?.substring(1, questionStatement.length)}
                </p>
              </>
            ) : (
              <>
                <b>Pandas</b>
                {/* <span>{Date.now()}</span> */}
                <p key={1} ref={animatedRef}>
                  Hey, Welcome to Asset Pandas.I am ChatBot, How can I help you
                  ?
                </p>
              </>
            )}
          </Typography>
        </Box>
        {questionStatement !== "" && (
          <Box marginTop={"20px"} display={"flex"} alignItems={"top"} gap={2}>
            <img style={logoCircle} src={logo} alt="logo not visible" />
            <Typography sx={typoTextStyle}>
              <b>Pandas</b>
              {answerStatement !== "" && (
                <p key={answerStatement} ref={animatedRef}>
                  {answerStatement}
                </p>
              )}
            </Typography>
          </Box>
        )}
      </Container>
      <UserInput
        handleChange={handleChange}
        handleClick={userInputResponse}
        handleKeyDown={handleKeyDown}
        textFieldRef={textFieldRef}
      />
    </>
  );
};

export default RightDraw;
