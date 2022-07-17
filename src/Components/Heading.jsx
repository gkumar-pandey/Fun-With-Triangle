import React from "react";

function Heading(props) {
  const { heading } = props;
  return (
    <>
      <h1 id="heading">{heading}</h1>
    </>
  );
}

export default Heading;
