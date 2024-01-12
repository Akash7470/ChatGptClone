import React, { useEffect, useRef, useState } from "react";
import LeftDraw from "../leftDraw/LeftDraw";
import RightDraw from "../rightDraw/RightDraw";
import { Grid, Typography } from "@mui/material";
import MyContext from "../context/MyContext";
import _debounce from "lodash/debounce";
import bgtheme from "../../Images/asset_pandas_bg.png";

const Homepage = () => {
  const [userInputData, setUserInputData] = useState("");
  const [questionStatement, setQuestionStatement] = useState("");
  const [listQuesStatement, setListQuesStatement] = useState([]);

  const bgThemeStyle = {
    overflowY: "scroll",
    maxHeight: "88vh",
    maxWidth: "lg",
    bgcolour: "silver",
    maxWidth: "300",
    width: "100%",
    bgColor: "gray",
    // backgroundImage: bgtheme,
  };

  const bgText = {
    position: "absolute",
    zIndex: "1",
    left: "30%",
    top: "17%",
    color: "#fafafa",
    lineHeight: "0.9",
    fontSize: "10vw",
    fontWeight: "500",
  };

  const textFieldRef = useRef(null);

  useEffect(() => {
    if (questionStatement !== "") {
      setListQuesStatement([...listQuesStatement, questionStatement]);
    }
  }, [questionStatement]);

  const handleClickUserInput = () => {
    setQuestionStatement(userInputData);
    const textField = textFieldRef.current;
    if (textField) {
      textField.value = "";
    }
  };
  const handleChange = (e) => {
    if (e.target.value === "") {
    }
    setUserInputData(e.target.value);
  };

  const debouncedClick = _debounce(handleClickUserInput, 100);

  return (
    <div>
      <MyContext.Provider value={listQuesStatement}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={2}>
            <LeftDraw />
          </Grid>
          <Typography sx={bgText} variant="h1">
            <span> Welcome To </span> <br />
            <span style={{ marginLeft: "200px" }}>Asset</span> <br />
            <span>Panda Chatbot</span>
          </Typography>
          <Grid item xs={10} sx={{ zIndex: "100" }} style={bgThemeStyle}>
            <RightDraw
              handleChange={handleChange}
              debouncedClick={debouncedClick}
              userInputData={userInputData}
              questionStatement={questionStatement}
              textFieldRef={textFieldRef}
            />
          </Grid>
        </Grid>
      </MyContext.Provider>
    </div>
  );
};

export default Homepage;
