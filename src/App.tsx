import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import ButtonIncrement from './Components/Counter/Buttons/ButtonIncrement';
import ButtonReset from './Components/Counter/Buttons/ButtonReset';
import {MaxValue} from './Components/dataCounter/MaxValue';
import {MinValue} from './Components/dataCounter/MinValue';
import {Counter} from './Components/Counter/Counter';

export type statusType = 'Enter value and press "set".' | 'Counter value is out of range.' | number

function App() {
  const [minValue, setMinValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(0)
  const [value, setValue] = useState<number>(maxValue);
  const [status, setStatus] = useState<statusType>('Enter value and press "set".');
  const isDisabled = maxValue <= minValue || maxValue < 0 || minValue < 0;


  useEffect(() => {
    const value = Number(localStorage.getItem('value'));
    const status = String(localStorage.getItem('status'));
    const minValue = Number(localStorage.getItem('minValue'));
    const maxValue = Number(localStorage.getItem('maxValue'))

    setValue(value);
    setMinValue(minValue);
    setMaxValue(maxValue);

  }, [])

  useEffect(() => {
    localStorage.setItem('minValue', JSON.stringify(minValue))
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
  }, [minValue, maxValue])


  const incrementCounter = () => {
    //сетаем в value значение которое увеличиваем
    value === maxValue ? setValue(maxValue) : setValue(value) // ?нужно ли это
    setValue(value + 1);
  }

  const resetCounter = () => {
    setValue(minValue);
  }


  const handlerMaxValue = (num: number) => {
    setMaxValue(num)
    num <= minValue || num < 0 || minValue < 0
      ? setStatus('Counter value is out of range.')
      : setStatus('Enter value and press "set".')
    localStorage.setItem('status', JSON.stringify(status))
  }

  //функция которая берет минимальное  значение из введенного  инпута
  const handlerMinValue = (num: number) => {
    setMinValue(num)
    maxValue <= num || maxValue < 0 || num < 0
      ? setStatus('Counter value is out of range.')
      : setStatus('Enter value and press "set".')
    localStorage.setItem('status', JSON.stringify(status))
  }

  const onSetMinAndMaxValue = () => {

    setMinValue(minValue);
    setMaxValue(maxValue);

    setStatus(minValue)

    localStorage.setItem('value', JSON.stringify(minValue));
    localStorage.setItem('status', JSON.stringify(status))
  };

  return (
    <div className={'App'}>
      <div className={'Set-counter'}>
        <div>
          <span>Please, change min and max value. </span>

          <div>
            <MaxValue maxValue={maxValue}
                      minValue={minValue}
                      handlerMaxValue={handlerMaxValue}/>
            <MinValue maxValue={maxValue}
                      minValue={minValue}
                      handlerMinValue={handlerMinValue}/>
          </div>

          <button
            //Если большее выбранное число больше меньшего, то кнопка раздизейбливается
            disabled={isDisabled}
            onClick={onSetMinAndMaxValue}>SET
          </button>

        </div>
      </div>
      <div className={'Wrapper-counter'}>

        {/*If status true that SHOW COUNTER else SHOW info about need to set max and min number*/}


        <Counter maxCounter={maxValue} minCounter={minValue} value={value} isDisabled={isDisabled} status={status}/>


        <div className="buttonWrapper">
          <ButtonIncrement status={status}
                           maxCounter={maxValue}
                           minCounter={minValue}
                           value={value}
                           incrementCounter={incrementCounter}/>

          <ButtonReset status={status}
                       maxCounter={maxValue}
                       minCounter={minValue}
                       value={value}
                       resetCounter={resetCounter}/>
        </div>
      </div>
    </div>
  );
}

export default App;
