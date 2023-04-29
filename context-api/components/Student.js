import React from 'react';

export const Student = ({ name, age }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age} years old</p>
    </div>
  );
};
