import React, { useState } from "react";
import Button from "../Components/Button";
import Formula from "../Components/Formula";
import Heading from "../Components/Heading";
import Input from "../Components/Input";

function Area() {
  const [base, setbase] = useState("");
  const [isInputFilled, setisInputFilled] = useState("");
  const [isSubmit, setisSubmit] = useState(false);
  const [height, setheight] = useState("");
  const [area, setArea] = useState("");
  function areaOfTriangle(base, height) {
    areaOfTriangle = (base * height) / 2;

    setArea(areaOfTriangle);
  }
  const isInputsAreFilled = () => {
    if (base == "" || height == "") {
      setisInputFilled(false);
    } else {
      setisInputFilled(true);
    }
  };
  const handleBaseInput = (e) => {
    setbase(e);
  };
  const handleHeightInput = (e) => {
    setheight(e);
  };

  const handleButton = () => {
    setisSubmit(true);
    isInputsAreFilled();
    areaOfTriangle(base, height);
  };

  return (
    <div className="isTriangle-container">
      <Heading heading="Area Of Triangle" />
      <Formula formula={"Area of Triangle = 1/2 *(Base * Height)"} />
      <div id="input-btn-container">
        <Input
          inputLabel={"Base(in cm)"}
          inputid="base"
          handleInput={handleBaseInput}
          value={base}
        />
        <Input
          inputLabel={"Height(in cm)"}
          inputid="height"
          handleInput={handleHeightInput}
          value={height}
        />
        <Button btnName="Check Area" handleButton={handleButton} />
      </div>
      {isSubmit ? (
        <div id="msg">
          {isInputFilled ? (
            <div>
              <p>Area of Triangle {area} </p>
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

export default Area;
