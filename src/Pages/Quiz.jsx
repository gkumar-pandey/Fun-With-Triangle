import React from "react";
import Heading from "../Components/Heading";
import Question from "../Components/Question";

function Quiz() {
  return (
    <div>
      <Heading heading="Quiz" />
      <div id="ques-container">
        <Question />
      </div>
    </div>
  );
}

export default Quiz;
