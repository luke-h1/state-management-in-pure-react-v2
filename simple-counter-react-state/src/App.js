import React from 'react';
import './App.scss';
import Counter from './Counter';
function App() {
  return (
    <main className='Application'>
      <section className='Counters'>
        <Counter max={15} step={5}/> 
      </section>
    </main>
  );
}

export default App;
