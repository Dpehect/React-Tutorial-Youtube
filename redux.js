import React, { useReducer } from 'react';

// Action türleri
const ADD_NUMBER = 'ADD_NUMBER';
const SORT_NUMBERS = 'SORT_NUMBERS';
const RESET_NUMBERS = 'RESET_NUMBERS';

// Başlangıç durumu
const initialState = {
  numbers: [],
  sortedNumbers: [],
  minNumber: null,
  maxNumber: null
};

// Reducer fonksiyonu
function reducer(state, action) {
  switch (action.type) {
    case ADD_NUMBER:
      const numbers = [...state.numbers, action.number];
      const newSortedNumbers = [...numbers].sort((a, b) => b - a);
      const minNumber = Math.min(...numbers);
      const maxNumber = Math.max(...numbers);
      return {
        ...state,
        numbers,
        sortedNumbers: newSortedNumbers,
        minNumber,
        maxNumber
      };
    case SORT_NUMBERS:
      const sortedNumbers = [...state.numbers].sort((a, b) => b - a);
      return {
        ...state,
        sortedNumbers
      };
    case RESET_NUMBERS:
      return initialState;
    default:
      return state;
  }
}

// Komponent
function NumberSorter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addNumber = (event) => {
    event.preventDefault();
    const number = parseInt(event.target.number.value);
    if (!isNaN(number)) {
      dispatch({ type: ADD_NUMBER, number });
      event.target.reset();
    }
  };

  const sortNumbers = () => {
    dispatch({ type: SORT_NUMBERS });
  };

  const resetNumbers = () => {
    dispatch({ type: RESET_NUMBERS });
  };

  return (
    <div>
      <h1>Redux ile sayı sıralama uygulaması</h1>
      <form onSubmit={addNumber}>
        <label>
          Sayı girin:
          <input type="number" name="number" />
        </label>
        <button type="submit">Ekle</button>
      </form>
      {state.numbers.length > 0 && (
        <div>
          <button onClick={sortNumbers}>Sayıları sırala</button>
          <button onClick={resetNumbers}>Sayıları sıfırla</button>
          <ul>
            {state.sortedNumbers.map((number) => (
              <li key={number}>{number}</li>
            ))}
          </ul>
          <p>
            En küçük sayı: {state.minNumber}, en büyük sayı: {state.maxNumber}
          </p>
        </div>
      )}
    </div>
  );
}

export default NumberSorter;
