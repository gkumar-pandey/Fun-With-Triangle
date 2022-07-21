import React, { useState } from "react";
import Heading from "../Components/Heading";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Formula from "../Components/Formula";

function Hypotenuse() {
  const [sideA, setsideA] = useState("");
  const [sideB, setsideB] = useState("");
  const [isInputFilled, setisInputFilled] = useState("");

  const [isSubmit, setisSubmit] = useState(false);
  const [hypotenuseOfTrianlge, sethypotenuseOfTriangle] = useState("");

  const handleInputSideA = (e) => {
    setsideA(e);
  };

  const handleInputSideB = (e) => {
    setsideB(e);
  };
  const findHypotenuseofTriangle = (a, b) => {
    let hypotenuse = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    sethypotenuseOfTriangle(hypotenuse);
  };
  const isInputAreaFilled = () => {
    if (sideA == "" || sideB == "") {
      setisInputFilled(false);
    } else {
      setisInputFilled(true);
    }
  };
  const handleButton = () => {
    setisSubmit(true);
    isInputAreaFilled();
    findHypotenuseofTriangle(sideA, sideB)
  };
  return (
    <div className="isTriangle-container">
      <Heading heading="Check Hypotenuse" />
      <Formula formula="Length of Hypotenuse = sqrt(a² + b²)" />
      <div id="input-btn-container">
        <Input
          inputLabel={"a = "}
          inputid="a"
          handleInput={handleInputSideA}
          value={sideA}
        />
        <Input
          inputLabel={"b = "}
          inputid="a"
          handleInput={handleInputSideB}
          value={sideB}
        />
        <Button btnName="Check Hypotenuse" handleButton={handleButton} />
      </div>
      {isSubmit ? (
        <div id="msg">
          {isInputFilled ? (
            <div>
              <p>Hypotenuse of Triangle {hypotenuseOfTrianlge} </p>
            </div>
          ) : (
            <p> 😕😕 Hey!! Buddy Filled all input 😕😕</p>
          )}
          {""}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Hypotenuse;
