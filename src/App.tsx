import React, {useState} from 'react';
import './App.css';
import {Counter} from './Components/Counter/Counter';
import ButtonIncrement from './Components/Buttons/ButtonIncrement';
import ButtonReset from './Components/Buttons/ButtonReset';

function App() {
  const [value, setValue] = useState<number>(0)
  const maxCounter = 5
  const minCounter = 0

  const incrementCounter = () => {
    value === maxCounter ? setValue(maxCounter) : setValue(value)
    setValue(value + 1);
  }

  const resetCounter = () => {
    setValue(0);
  }

  return (
    <div className={'App'}>
      <Counter maxCounter={maxCounter} value={value}/>
      <div className="buttonWrapper">
        <ButtonIncrement maxCounter={maxCounter} value={value} incrementCounter={incrementCounter}/>
        <ButtonReset  minCounter={minCounter}  value={value} resetCounter={resetCounter}/>
      </div>
    </div>
  );
}

export default App;
