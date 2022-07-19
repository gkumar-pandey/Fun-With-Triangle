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

  const handleBaseInput = () => {};
  const handleHeightInput = () => {};
  const isTriangleValid = () => {
    // if () {
    //   setisInputFilled(false);
    // } else {
    //   setisInputFilled(true);
    //   if () {
    //     setistriangleValid(true);
    //   } else {
    //     setistriangleValid(false);
    //   }
    // }
  };
  const handleButton = () => {
    setisSubmit(true);
  };

  return (
    <div className="isTriangle-container">
      <Heading heading="Area Of Triangle" />
      <Formula formula={'Area of Triangle = 1/2 *(Base * Height)'}/>
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
        {
          /* <div id="msg">
          {isInputFilled ? (
            <div>
              {istriangleValid ? (
                <p>Triangle valid</p>
              ) : (
                <div>Triangle invalid</div>
              )}
            </div>
          ) : (
            <p> 😕😕 Hey!! Buddy Filled all input 😕😕</p>
          )}{" "}
        </div> */
        }
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Area;
