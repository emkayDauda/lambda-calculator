import React from "react";

const OperatorButton = ({operator, onTap}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => onTap(operator)}>{operator}</button>
    </>
  );
};


export default OperatorButton;