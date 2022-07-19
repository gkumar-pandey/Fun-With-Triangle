import React from "react";

function Question() {
  const quizQues = [
    {
      q: "What is the third angle for the triangle where angle1 = 45° and angle2= 45°?",

      a: "45",
      b: "34",
      c: "78",
      d: "65",
    },
    {
      q: "What is the third angle for the triangle where angle1 = 45° and angle2= 45°?",
      a: "45",
      b: "34",
      c: "78",
      d: "65",
    },
    {
      q: "What is the third angle for the triangle where angle1 = 45° and angle2= 45°?",
      a: "45",
      b: "34",
      c: "78",
      d: "65",
    },
  ];
  return (
    <>
      {quizQues.map((item, idx) => {
        return (
          <div className="que-container">
            <p>{item.q}</p>
            <input type="radio" id={idx} value={item.a} name={idx} />
            <label for={idx}>{item.a}</label>
            <input type="radio" id={idx} value={item.b} name={idx} />
            <label for={idx}>{item.b}</label>
            <input type="radio" id={idx} value={item.c} name={idx} />
            <label for={idx}>{item.c}</label>
            <input type="radio" id={idx} value={item.d} name={idx} />
            <label for={idx}>{item.d}</label>
          </div>
        );
      })}
    </>
  );
}

export default Question;
