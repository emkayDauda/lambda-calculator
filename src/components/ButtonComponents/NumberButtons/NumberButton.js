import React from "react";

const NumberButton = ({number, onTap}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="db-button" onClick={() => onTap(number)}>{number}</button>
    </>
  );
};

export default NumberButton;