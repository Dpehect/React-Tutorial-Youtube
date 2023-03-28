import { useState, useRef, useLayoutEffect, useImperativeHandle, forwardRef } from 'react';

const Calculator = forwardRef((props, ref) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const resultRef = useRef();

  useLayoutEffect(() => {
    resultRef.current.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  }, [result]);

  useImperativeHandle(ref, () => ({
    calculate: () => {
      setResult(parseInt(num1) + parseInt(num2));
    },
  }));

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1Change} />
      +
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={() => ref.current.calculate()}>Calculate</button>
      <p ref={resultRef}>{result}</p>
    </div>
  );
});

export default Calculator;
