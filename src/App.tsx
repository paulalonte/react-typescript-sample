import React from 'react';
import './App.css';
// import Counter from './components/counter/Counter';
import Todo from './components/todo/Todo';

function App() {
  const priceNum: string = '4';

  const randomColor = ():string => {
    return 'red';
  }

  return (
    <div>
      <Todo />
      {/* <Counter /> */}
      {/* <Card name="Paul" price={priceNum} randomColor={randomColor}/> */}
    </div>
  );
}

export default App;
