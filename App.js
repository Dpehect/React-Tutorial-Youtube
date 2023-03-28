import Calculator from './Calculator';
import React, { useState, useRef } from 'react';


function App() {
  const calculatorRef = useRef();

  const handleButtonClick = () => {
    calculatorRef.current.calculate();
  };

  return (
    <div>
      <Calculator ref={calculatorRef} />
      <button onClick={handleButtonClick}>Calculate</button>
    </div>
  );
}

export default App;
