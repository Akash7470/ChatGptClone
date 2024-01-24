import React, { useEffect, useRef, useState } from "react";
import LeftDraw from "../leftDraw/LeftDraw";
import RightDraw from "../rightDraw/RightDraw";
import { Grid, Typography } from "@mui/material";
import MyContext from "../context/MyContext";
import _debounce from "lodash/debounce";

const Homepage = ({ quesAnsList }) => {
  const [userInputData, setUserInputData] = useState("");
  const [questionStatement, setQuestionStatement] = useState("");
  const [answerStatement, setAnswerStatement] = useState("");
  const textFieldRef = useRef(null);

  useEffect(() => {
    console.log(answerStatement, "sdf");
    if (questionStatement !== "" && answerStatement !== "") {
      quesAnsList.push({
        ques: questionStatement,
        ans: answerStatement,
      });
      setQuestionStatement("");
    }
  }, [questionStatement, answerStatement]);

  const handleClickUserInput = () => {
    setQuestionStatement(userInputData);
    const textField = textFieldRef.current;
    if (textField) {
      textField.value = "";
    }
  };
  console.log(quesAnsList, "answ");
  const handleChange = (e) => {
    if (e.target.value === "") {
      setUserInputData(e.target.value);
    }
  };

  const debouncedClick = _debounce(handleClickUserInput, 100);

  return (
    <div>
      <MyContext.Provider value={quesAnsList[0]?.ques}>
        <Grid container spacing={2} style={{ backgroundColor: "#eeeeee" }}>
          <Grid item xs={2}>
            <LeftDraw />
          </Grid>

          <Grid item xs={9}>
            <RightDraw
              quesAnsList={quesAnsList}
              setAnswerStatement={setAnswerStatement}
              questionStatement={questionStatement}
              handleChange={handleChange}
              debouncedClick={debouncedClick}
              userInputData={userInputData}
              textFieldRef={textFieldRef}
              answerStatement={answerStatement}
            />
          </Grid>
        </Grid>
      </MyContext.Provider>
    </div>
  );
};

export default Homepage;
