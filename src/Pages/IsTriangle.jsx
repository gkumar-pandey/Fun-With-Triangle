import React, { useEffect, useState } from "react";
import Heading from "../Components/Heading";
import Input from "../Components/Input";
import Button from "../Components/Button";

function IsTriangle() {
  const [isInputFilled, setisInputFilled] = useState("");
  const [istriangleValid, setistriangleValid] = useState("");
  const [isSubmit, setisSubmit] = useState(false);
  const [angle1, setangle1] = useState("");
  const [angle2, setangle2] = useState("");
  const [angle3, setangle3] = useState("");
  const handleInput1 = (e) => {
    setangle1(e);
  };
  const handleInput2 = (e) => {
    setangle2(e);
  };

  const handleInput3 = (e) => {
    setangle3(e);
  };

  const isTriangleValid = () => {
    let sumOfAngles = Number(angle1) + Number(angle2) + Number(angle3);
    if (angle1 == "" || angle2 == "" || angle3 == "") {
      setisInputFilled(false);
    } else {
      setisInputFilled(true);
      if (sumOfAngles == 180) {
        setistriangleValid(true);
      } else {
        setistriangleValid(false);
      }
    }
  };

  const handleButton = () => {
    isTriangleValid();
    setisSubmit(true);
  };
  return (
    <div className="isTriangle-container">
      <Heading heading="Is Triangle?" />
      <div id="input-btn-container">
        <Input
          inputLabel="Angle1(in degree)"
          inputid="Angle1"
          handleInput={handleInput1}
          value={angle1}
        />
        <Input
          inputLabel="Angle2(in degree)"
          inputid="Angle2"
          handleInput={handleInput2}
          value={angle2}
        />
        <Input
          inputLabel="Angle3(in degree)"
          inputid="Angle3"
          handleInput={handleInput3}
          value={angle3}
        />
        <Button handleButton={handleButton} />
      </div>

      {isSubmit ? (
        <div id="msg">
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
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default IsTriangle;
