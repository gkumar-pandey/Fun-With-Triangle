import React, { useState } from "react";
import Button from "./Button";

function Question() {
  const [userScore, setuserScore] = useState(0);
  const [isInputFilled, setisInputFilled] = useState(false);
  const [isSubmit, setisSubmit] = useState(false);

  let score = 0;
  const quizQues = [
    {
      q: "What is the third angle for the triangle where angle1 = 45° and angle2= 45°?",

      a: "45",
      b: "34",
      c: "78",
      d: "65",
      ans: "45",
    },

    {
      q: "A triangle in which two sides are equal is called:",
      a: "Scalene triangle",
      b: "Equilateral triangle",
      c: "Isosceles triangle",
      d: "None of the above",
      ans: "Isosceles triangle",
    },
    {
      q: "If ABC is an equilateral triangle, then each angle equals to:",
      a: "90°",
      b: "180°",
      c: "120°",
      d: "60°",
      ans: "60°",
    },
    {
      q: " In triangle ABC, if AB=BC and ∠B = 70°, ∠A will be:",
      a: " 70°",
      b: "110°",
      c: "55°",
      d: "130°",
      ans: "55°",
    },
  ];
  const handleChange = (userAns, idx) => {
    if (quizQues[idx].ans == userAns) {
      score++;
    }
  };
  const handleButton = () => {
    
    setisSubmit(true);
    setisInputFilled(true);
    setuserScore(score);
  };
  return (
    <>
      {quizQues.map((item, idx) => {
        return (
          <div className="que-container">
            <p>{item.q}</p>
            <div className="option">
              <input
                type="radio"
                id={idx}
                value={item.a}
                name={idx}
                onChange={(e) => handleChange(e.target.value, idx)}
              />
              <label for={idx}>{item.a}</label>
            </div>
            <div className="option">
              <input
                type="radio"
                id={idx}
                value={item.b}
                name={idx}
                onChange={(e) => handleChange(e.target.value, idx)}
              />
              <label for={idx}>{item.b}</label>
            </div>

            <div className="option">
              <input
                type="radio"
                id={idx}
                value={item.c}
                name={idx}
                onChange={(e) => handleChange(e.target.value, idx)}
              />
              <label for={idx}>{item.c}</label>
            </div>

            <div className="option">
              <input
                type="radio"
                id={idx}
                value={item.d}
                name={idx}
                onChange={(e) => handleChange(e.target.value, idx)}
              />
              <label for={idx}>{item.d}</label>
            </div>
          </div>
        );
      })}
      <div id="submit-btn-container">
        <button onClick={handleButton} id="submit-btn">
          Submit
        </button>
      </div>
      {isSubmit ? (
        <div style={style.msg}>
          {isInputFilled ? (
            <div>
              <p>Your Score : {userScore}</p>
            </div>
          ) : (
            <p> 😕😕 Hey!! Buddy Filled all input 😕😕</p>
          )}
          {""}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
const style = {
  msg: {
    // border: "1px solid red",
    textAlign: 'center',
    fontSize: '2.2rem',
    fontWeight: 'bold',
    padding: '1rem'

  },
};

export default Question;
