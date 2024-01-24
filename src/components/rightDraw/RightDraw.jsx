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
  userInputData,
  textFieldRef,
  setAnswerStatement,
  quesAnsList,
  answerStatement,
}) => {
  const animatedRef = useRef(null);

  const [buttonDisabled, setButtonDisabled] = useState(false);

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
    fontSize: "17px",
    fontWeight: "400",
    lineHeight: "1.2",
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
      // setButtonDisabled(true);
      console.log(response, "api call");
      setAnswerStatement(response);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setButtonDisabled(false);
    }, 2000);
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
      <Container
        className="MuiTabList-hideScrollbar"
        sx={{
          height: "88vh",
          backgroundColor: "white",
          padding: "20px",
          boxShadow: 1,
          overflowY: "scroll",
        }}
        flexDirection={"column"}
      >
        {quesAnsList?.length ? (
          quesAnsList.map((list) => {
            return (
              <>
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  {list.ques !== "" ? (
                    <img
                      style={logoCircle}
                      src={human}
                      alt="logo not visible"
                    />
                  ) : (
                    <img style={logoCircle} src={logo} alt="logo not visible" />
                  )}

                  <Typography>
                    <>
                      <b>You</b>
                      <p>
                        {list.ques?.charAt(0).toUpperCase() +
                          list.ques?.substring(1, list.ques.length)}
                      </p>
                    </>
                  </Typography>
                </Box>
                {list.ques !== "" && (
                  <Box
                    marginTop={"20px"}
                    display={"flex"}
                    alignItems={"top"}
                    gap={2}
                  >
                    <img style={logoCircle} src={logo} alt="logo not visible" />
                    <Typography>
                      <b>Pandas</b>
                      {list.ans !== "" && (
                        <p key={list.ans} ref={animatedRef}>
                          {list.ans}
                        </p>
                      )}
                    </Typography>
                  </Box>
                )}
              </>
            );
          })
        ) : (
          <>
            <b>Pandas</b>
            {/* <span>{Date.now()}</span> */}
            <p key={1} ref={animatedRef}>
              Hey, Welcome to Asset Pandas.I am ChatBot, How can I help you ?
            </p>
          </>
        )}
      </Container>
      <UserInput
        handleChange={handleChange}
        handleSendMessage={userInputResponse}
        handleKeyDown={handleKeyDown}
        textFieldRef={textFieldRef}
        buttonDisabled={buttonDisabled}
      />
    </>
  );
};

export default RightDraw;
