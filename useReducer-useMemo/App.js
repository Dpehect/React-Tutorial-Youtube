import React, { useState, useMemo, useReducer } from "react";

function numberReducer(state, action) {
  switch (action.type) {
    case "ADD_NUMBER":
      return [...state, action.payload];
    case "SORT_NUMBERS":
      return state.sort((a, b) => b - a);
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

function NumberList() {
  const [number, setNumber] = useState("");
  const [numberList, dispatch] = useReducer(numberReducer, []);

  const sortedNumbers = useMemo(() => numberList.sort((a, b) => b - a), [numberList]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_NUMBER", payload: Number(number) });
    setNumber("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Number:
          <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
        </label>
        <button type="submit">Add Number</button>
      </form>
      <h2>Sorted Numbers:</h2>
      <ul>
        {sortedNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: "SORT_NUMBERS" })}>Sort Numbers</button>
    </div>
  );
}

export default NumberList;
