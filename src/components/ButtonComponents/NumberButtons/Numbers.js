import React, {useState} from "react";

//import any components needed
import NumberButton from './NumberButton'
import numbers from '../../../data'
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [stateNumbers, setStateNumbers] = useState(numbers)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {
         stateNumbers.map(number => <NumberButton number={number} onTap={ () => {}}/>)
       }
    </div>
  );
};

export default Numbers;