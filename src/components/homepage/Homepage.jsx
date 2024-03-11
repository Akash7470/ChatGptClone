import React, { useState } from "react";
import LeftDraw from "../leftDraw/LeftDraw";
import RightDraw from "../rightDraw/RightDraw";

const Homepage = () => {
  const [quesAnsList, setQuesAnsList] = useState([]);

  return (
    <div className="" style={{ height: "100vh" }}>
      {/* <div className="relative z-0 h-full w-full"> */}
        {/* <LeftDraw chatName={quesAnsList[0]?.ques} /> */}
        <div className="relative h-full">
          <RightDraw
            quesAnsList={quesAnsList}
            setQuesAnsList={setQuesAnsList}
          />
        </div>
      {/* </div> */}
    </div>
  );
};

export default Homepage;
