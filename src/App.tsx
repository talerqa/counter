import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Counter} from './Components/Counter/Counter';
import ButtonIncrement from './Components/Buttons/ButtonIncrement';
import ButtonReset from './Components/Buttons/ButtonReset';

function App() {
//useState для значения максимального, минимального и текущего
  const [minValue, setMinValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(0)
  const [value, setValue] = useState<number>(maxValue);

  //
  const [status, setStatus] = useState<boolean>(false)

  const incrementCounter = () => {
    value === maxValue ? setValue(maxValue) : setValue(value)
    setValue(value + 1);
  }

  const resetCounter = () => {
    setValue(minValue);
  }

//функция которая берет максимального  значение из введенного  инпута
  const handlerMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(event.currentTarget.value))
  }

  //функция которая берет минимальное  значение из введенного  инпута
  const handlerMinValue = (event: ChangeEvent<HTMLInputElement>) => {
    setMinValue(Number(event.currentTarget.value))
    setValue(minValue)
  }


  ///Если вводим отрицательное значение кнопка красная и дизейблиться
  /// По умолчанию кнопки все задизейблены, раздизейбл, когда мы нажали СЕТ

  return (
    <div className={'App'}>
      <div className={'Set-counter'}>
        <div>
          <div>
            <span>Max value</span>
            <input type="number" onChange={handlerMaxValue}/>
          </div>
          <div>
            <span>Min value</span>
            <input type="number" onChange={handlerMinValue}/>
          </div>
          {/*on click buuton show counter and set min value which press user */}
          <button onClick={() => {
            setStatus(true)
            setValue(minValue)
          }}>SET
          </button>
        </div>
      </div>
      <div className={'Wrapper-counter'}>

        {/*If status is true that SHOW COUNTER else SHOW info about need to set max and min number*/}
        {status
          ? <Counter maxCounter={maxValue} value={value}/>
          : <div>asdsdfssf</div>}

        <div className="buttonWrapper">
          <ButtonIncrement maxCounter={maxValue} value={value} incrementCounter={incrementCounter}/>
          <ButtonReset minCounter={minValue} value={value} resetCounter={resetCounter}/>
        </div>

      </div>

    </div>
  );
}

export default App;
