import React, { useReducer, useMemo } from 'react';

const initialState = {
  numbers: [5, 3, 8, 1, 9, 2],
  largestNumber: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'FIND_LARGEST_NUMBER':
      return {
        ...state,
        largestNumber: Math.max(...state.numbers),
      };
    default:
      return state;
  }
}

function LargestNumber() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const largestNumber = useMemo(() => {
    if (!state.largestNumber) {
      dispatch({ type: 'FIND_LARGEST_NUMBER' });
    }
    return state.largestNumber;
  }, [state]);

  return (
    <div>
      <p>Numbers: {state.numbers.join(', ')}</p>
      <p>Largest Number: {largestNumber}</p>
    </div>
  );
}

export default LargestNumber;
