import React from 'react';

type Props = {
  myCounter: number;
  handleCountUp: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleCountDown: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Counter: React.FC<Props> = ({ myCounter, handleCountUp, handleCountDown }) => {
  return (
    <>
      "Redux カウンター"
      <br />
      {myCounter}
      <br />
      <button onClick={handleCountUp}>加算</button>
      <button onClick={handleCountDown}>減算</button>
    </>
  );
};

export default Counter;
