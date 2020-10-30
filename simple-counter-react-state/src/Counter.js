import React, { useState } from 'react';

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');
  if (storage) return JSON.parse(storage);
  return { count: 0 };
};

function storeStateInLocalStorage() {
  localStorage.setItem('counterState', JSON.stringify(this.state));
}

const Counter = ({ max, step }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => {
      if (c >= max) return c;
      return c + step;
    });
  };

  // const increment = () => setCount(count + 1);
// on lesson useEffect & dependencies 
// react state management 
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div className='Counter'>
      <p className='count'>{count}</p>
      <section className='controls'>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};
export default Counter;
