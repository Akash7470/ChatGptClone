import React, { useState } from "react";
import LeftDraw from "../leftDraw/LeftDraw";
import RightDraw from "../rightDraw/RightDraw";
import { Grid } from "@mui/material";
import MyContext from "../context/MyContext";
import _debounce from "lodash/debounce";

const Homepage = () => {
  const [userInputData, setUserInputData] = useState("");
  const [questionStatement, setQuestionStatement] = useState(userInputData);

  const handleClickUserInput = () => {
    setQuestionStatement(userInputData);
  };
  const handleChange = (e) => {
    setUserInputData(e.target.value);
  };

  const debouncedClick = _debounce(handleClickUserInput, 100);

  return (
    <div>
      <MyContext.Provider value={questionStatement}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={2}>
            <LeftDraw />
          </Grid>
          <Grid
            item
            xs={10}
            maxWidth={"lg"}
            style={{ overflowY: "scroll", maxHeight: "88vh" }}
          >
            <RightDraw
              handleChange={handleChange}
              debouncedClick={debouncedClick}
              questionStatement={questionStatement}
            />
          </Grid>
        </Grid>
      </MyContext.Provider>
    </div>
  );
};

export default Homepage;
