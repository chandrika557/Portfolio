import './App.css';
import { useState } from 'react';
import Properties from './Properties';

function App() {
  // var Name = 'Vedant';
  // const square = function (x) {
  //   return x * x;
  // }
  // const squareArrow = x => { return x * x; }

  // console.log(square(4));
  // console.log(squareArrow(6));

  // const fullName = "Vedant Dabhade";
  // const firstName = fullName => fullName.split(' ')[0];
  
  // console.log(firstName(fullName));

  // const multiplier = {
  //   numbers: [10, 20, 30],
  //   multiplyBy: 12,
  //   multiply() {
  //     return this.numbers.map(number => number * this.multiplyBy);
  //   }
  // }

  // console.log(multiplier.multiply());

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{counter}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>

        {/* <h1>Hello {Name.toUpperCase()}</h1>
        <h2>{1 && 1 ? 'Dabhade' : 'vedant'} </h2> */}
      </header>

      <Properties name = "vedant"/>
    </div>
  );
}

export default App;