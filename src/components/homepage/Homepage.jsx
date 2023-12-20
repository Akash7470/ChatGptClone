import React, { useEffect, useState } from "react";
import LeftDraw from "../leftDraw/LeftDraw";
import RightDraw from "../rightDraw/RightDraw";
import { Grid } from "@mui/material";
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
    backgroundImage: bgtheme,
  };

  useEffect(() => {
    if (questionStatement !== "") {
      setListQuesStatement([...listQuesStatement, questionStatement]);
    }
  }, [questionStatement]);

  const handleClickUserInput = () => {
    setQuestionStatement(userInputData);
    setUserInputData("");
  };
  const handleChange = (e) => {
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
          <Grid item xs={10} style={bgThemeStyle}>
            <RightDraw
              handleChange={handleChange}
              debouncedClick={debouncedClick}
              userInputData={userInputData}
              questionStatement={questionStatement}
            />
          </Grid>
        </Grid>
      </MyContext.Provider>
    </div>
  );
};

export default Homepage;
