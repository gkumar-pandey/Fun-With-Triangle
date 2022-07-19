import React, { useState } from "react";
import Button from "../Components/Button";
import Formula from "../Components/Formula";
import Heading from "../Components/Heading";
import Input from "../Components/Input";

function Area() {
  const [base, setbase] = useState("");
  const [isInputFilled, setisInputFilled] = useState("");
  const [isSubmit, setisSubmit] = useState(false);
  let area;
  const [height, setheight] = useState("");
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
  const areaOfTriangle = (base, height) => {
    console.log("height", height);
    console.log("base ", base);
    area = (base * height) / 2;
    console.log(area);
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
              <p>Area of Triangle  </p>
            </div>
          ) : (
            <p> 😕😕 Hey!! Buddy Filled all input 😕😕</p>
          )}{" "}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Area;
