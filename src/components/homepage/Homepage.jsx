import React, { useState } from "react";
import LeftDraw from "../leftDraw/LeftDraw";
import RightDraw from "../rightDraw/RightDraw";

const Homepage = () => {
  const [quesAnsList, setQuesAnsList] = useState([]);

  return (
    <div className="h-full" style={{ height: "100vh" }}>
      <div className="relative z-0 flex h-full w-full overflow-hidden">
        <LeftDraw chatName={quesAnsList[0]?.ques} />
        <div className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
          <RightDraw
            quesAnsList={quesAnsList}
            setQuesAnsList={setQuesAnsList}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
