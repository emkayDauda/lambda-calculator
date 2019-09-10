import React from "react";

const SpecialButton = ({specaialCharacter, onTap}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => onTap(specaialCharacter)}>{specaialCharacter}</button>
    </>
  );
};

export default SpecialButton;
