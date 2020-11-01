import React, { useState, useEffect } from 'react';

const useLocalStorage = (initialState, key) => {
  const getstateFromLocalStorage = () => {
    let value = '0';
    const storage = localStorage.getItem(initialState);
    console.log(storage)
    if (storage) return JSON.parse(storage)[value];
    return initialState;
  };

  const [value, setValue] = useState(getstateFromLocalStorage());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
  }, [value, key]);

  return [value, setValue];
};

function storeStateInLocalStorage(count) {
  localStorage.setItem('counterState', JSON.stringify({ count }));
  console.log(localStorage);
}

const Counter = ({ max, step }) => {
  const [count, setCount] = useLocalStorage(0, 'count');

  const increment = () => {
    setCount((c) => {
      if (c >= max) return c;
      return c + step;
    });
  };
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    document.title = `Counter: ${count}`;
  }, [count]);

  useEffect(() => {
    storeStateInLocalStorage(count);
  }, [count]);

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
