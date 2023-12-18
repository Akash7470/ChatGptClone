import "jquery";
import "textillate";
import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import UserInput from "./UserInput";
import GridViewIcon from "@mui/icons-material/GridView";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import apiHandle from "../services/apiHandle";

const RightDraw = ({ debouncedClick, handleChange, questionStatement }) => {
  const animatedRef = useRef(null);
  const [answerStatement, setAnswerStatement] = useState("");

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      userInputResponse();
    }
  };

  const userInputResponse = async () => {
    debouncedClick();
    try {
      const response = await apiHandle.post("webhooks/rest/webhook", {
        data: questionStatement,
      });
      setAnswerStatement(response.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const animateOptions = { in: { effect: "fadeIn" } };
    const initializeTextillate = () => {
      if (animatedRef.current) {
        window.$(animatedRef.current).textillate(animateOptions);
      } else {
        setTimeout(initializeTextillate, 1000);
      }
    };
    initializeTextillate();
  }, [answerStatement]);

  return (
    <>
      <Typography variant="h4" position={"fixed"}>
        <b>Asset Pandas</b>
      </Typography>
      <Container maxWidth={"md"}>
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <GridViewIcon sx={{ color: "lightblue" }} />
          <Typography
            textAlign={"left"}
            fontFamily={"roboto"}
            fontSize={"22px"}
            fontWeight={"500"}
            lineHeight={"1.4"}
          >
            {questionStatement.charAt(0).toUpperCase() +
              questionStatement.substring(1, questionStatement.length)}
          </Typography>
        </Box>
        <Box marginTop={"20px"} display={"flex"} alignItems={"top"} gap={2}>
          <AcUnitIcon sx={{ color: "lightgreen" }} />
          <Typography
            ref={animatedRef}
            textAlign={"left"}
            fontFamily={"roboto"}
            fontSize={"18px"}
            fontWeight={"500"}
            lineHeight={"1.4"}
          >
            {/* <div style={{ color: "red" }}> */}
            {answerStatement !== "" ? answerStatement : ""}
            {/* </div> */}
          </Typography>
        </Box>

        {/* <TabScrollButton direction="left" orientation="vertical" /> */}
      </Container>
      <UserInput
        handleChange={handleChange}
        handleClick={userInputResponse}
        handleKeyDown={handleKeyDown}
      />
    </>
  );
};

export default RightDraw;
