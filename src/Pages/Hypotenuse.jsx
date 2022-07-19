import React, { useState } from "react";
import Heading from "../Components/Heading";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Formula from "../Components/Formula";

function Hypotenuse() {
  const [sideA, setsideA] = useState("");
  const [sideB, setsideB] = useState("");
  const [isSubmit, setisSubmit] = useState(false);

  const handleInputSideA = () => {};

  const handleInputSideB = () => {};
  const handleButton = () => {
    setisSubmit(true);
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
    </div>
  );
}

export default Hypotenuse;
