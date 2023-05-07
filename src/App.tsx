import React, {useEffect, useState} from 'react';
import './App.css';
import ButtonIncrement from './Components/Counter/Buttons/ButtonIncrement';
import ButtonReset from './Components/Counter/Buttons/ButtonReset';
import {MaxValue} from './Components/dataCounter/MaxValue';
import {MinValue} from './Components/dataCounter/MinValue';
import {Counter} from './Components/Counter/Counter';
import {ButtonSetData} from './Components/Counter/Buttons/ButtonSetData';

export type statusType = 'Enter value and press set.' | 'Counter value is out of range.' | number

function App() {
  const [minValue, setMinValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(0)
  const [value, setValue] = useState<number>(maxValue);
  const [status, setStatus] = useState<statusType>('Enter value and press set.');
  const isDisabled = maxValue <= minValue || maxValue < 0 || minValue < 0;


  useEffect(() => {
    const storedValue = localStorage.getItem('value');
    const storedStatus = localStorage.getItem('status')
    const storedMinValue = localStorage.getItem('minValue');
    const storedMaxValue = localStorage.getItem('maxValue');

    setValue(Number(storedValue));
    setStatus(storedStatus as statusType);
    setMinValue(Number(storedMinValue));
    setMaxValue(Number(storedMaxValue));

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


  const handlerMaxValue = (num: number, status: statusType) => {
    setMaxValue(num)
    setStatus(status)
    localStorage.setItem('status', JSON.stringify(status))
  }

  //функция которая берет минимальное  значение из введенного  инпута
  const handlerMinValue = (num: number, status: statusType) => {
    setMinValue(num)
    console.log(num)
    setStatus(status)
    localStorage.setItem('status', JSON.stringify(status))

  }
  console.log({value1: value, status: status, maxValue: maxValue, minValu: minValue})
  const onSetMinAndMaxValue = (maxValue: number, minValue: number, value: number) => {
    console.log({value1: value, status: status, maxValue: maxValue, minValu: minValue})

    setMinValue(minValue);
    setValue(minValue)


    // setMaxValue(maxValue);
     setStatus(minValue)

    // localStorage.setItem('status', JSON.stringify(status))
    localStorage.setItem('value', JSON.stringify(value));
  };
  return (
    <div className={'App'}>
      <div className={'Set-counter'}>
        <div>
          <span>Please, change min and max value. </span>

          <div>
            <MaxValue maxValue={maxValue}
                      minValue={minValue}
                      handlerMaxValue={handlerMaxValue}
            />
            <MinValue maxValue={maxValue}
                      minValue={minValue}
                      handlerMinValue={handlerMinValue}
            />
          </div>


          <ButtonSetData maxValue={maxValue}
                         minValue={minValue}
                         value={value}
                         disabled={isDisabled} onSetMinAndMaxValue={onSetMinAndMaxValue}/>

        </div>
      </div>
      <div className={'Wrapper-counter'}>


        <Counter maxCounter={maxValue}
                 minCounter={minValue}
                 value={value}
                 isDisabled={isDisabled}
                 status={status}/>

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
