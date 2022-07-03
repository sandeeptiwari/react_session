import { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);

  const incrementHandler = setCounter(count + 1);
  const decrementHandler = setCounter(count - 1);

  return (
    <>
      <button onClick={incrementHandler}> Increment by 1 </button>
      <button onClick={decrementHandler}> Decrement by 1 </button>
      <h2>Currnt: {count}</h2>
    </>
  );
};

export default Counter;


