import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Components/Counter/Counter';
import {ButtonSetData} from './Components/Counter/Buttons/ButtonSetData';
import {ButtonUpdateCounter} from './Components/Counter/Buttons/ButtonUpdateCounter';
import {InputChangeValue} from './Components/dataCounter/InputChangeValue';

export type statusType = 'Enter value and press set.' | 'Counter value is out of range.' | number

export type titleType = 'INCREMENT' | 'RESET'

export type titleInputValue = 'Max Value' | 'Min Value'

function App() {

  const title: titleType[] = ['INCREMENT', 'RESET'];

  const titleInputValue: titleInputValue[] = ['Max Value', 'Min Value']

  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [value, setValue] = useState<number>(maxValue);
  const [status, setStatus] = useState<statusType>('Enter value and press set.');
  const isDisabled = maxValue <= minValue || maxValue < 0 || minValue < 0;

  useEffect(() => {
    const storedValue = localStorage.getItem('value');
    const storedStatus = localStorage.getItem('status');
    const storedMinValue = localStorage.getItem('minValue');
    const storedMaxValue = localStorage.getItem('maxValue');

    setMinValue(Number(storedMinValue));
    setMaxValue(Number(storedMaxValue));
    setValue(Number(storedValue))

    if (storedStatus !== null) {
      if (typeof storedStatus === 'string') {
        return setStatus(JSON.parse(storedStatus) as statusType);
      } else {
        return setStatus(Number(storedValue) as statusType);
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('minValue', JSON.stringify(minValue))
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    localStorage.setItem('status', JSON.stringify(status))
    localStorage.setItem('value', JSON.stringify(value))

  }, [minValue, maxValue, status, value])


  const incrementCounter = (maxValue: number, value: number) => {
    if(value !== maxValue) {
      setValue(value + 1);
      setStatus(value + 1);
    }
  }

  const resetCounter = (minValue: number, value: number) => {
    setValue(minValue);
    setStatus(minValue);
  }


  const handlerMaxValue = (num: number, status: statusType) => {
    setMaxValue(num)
    setStatus(status)
    localStorage.setItem('status', JSON.stringify(status))
  }

  //функция которая берет минимальное  значение из введенного  инпута
  const handlerMinValue = (num: number, status: statusType) => {
    setMinValue(num)
    setStatus(status)
    localStorage.setItem('status', JSON.stringify(status))

  }
  const onSetMinAndMaxValue = (maxValue: number, minValue: number, value: number) => {
    setMinValue(minValue);
    setValue(minValue)
    setMaxValue(maxValue);
    setStatus(minValue)

    localStorage.setItem('status', JSON.stringify(status))
    localStorage.setItem('value', JSON.stringify(value));
  };
  return (
    <div className={'App'}>
      <div className={'Set-counter'}>
        <div>
          <span>Please, change min and max value. </span>

          <div>
            {/*<MaxValue maxValue={maxValue}*/}
            {/*          minValue={minValue}*/}
            {/*          handlerMaxValue={handlerMaxValue}*/}
            {/*          status={status}*/}
            {/*/>*/}
            {/*<MinValue maxValue={maxValue}*/}
            {/*          minValue={minValue}*/}
            {/*          handlerMinValue={handlerMinValue}*/}
            {/*          status={status}*/}
            {/*/>*/}

            {
              titleInputValue.map(buttonName => {
                return <InputChangeValue
                  maxValue={maxValue}
                  minValue={minValue}
                  handlerMaxValue={handlerMaxValue}
                  handlerMinValue={handlerMinValue}
                  status={status}
                  title={buttonName}
                />
              })
            }


          </div>


          <ButtonSetData maxValue={maxValue}
                         minValue={minValue}
                         value={value}
                         disabled={isDisabled}
                         onSetMinAndMaxValue={onSetMinAndMaxValue}/>
        </div>
      </div>
      <div className={'Wrapper-counter'}>


        <Counter maxCounter={maxValue}
                 minCounter={minValue}
                 value={value}
                 isDisabled={isDisabled}
                 status={status}/>

        <div className="buttonWrapper">
          {/*<ButtonIncrement status={status}*/}
          {/*                 maxCounter={maxValue}*/}
          {/*                 minCounter={minValue}*/}
          {/*                 value={value}*/}
          {/*                 incrementCounter={incrementCounter}/>*/}

          {/*<ButtonReset status={status}*/}
          {/*             maxCounter={maxValue}*/}
          {/*             minCounter={minValue}*/}
          {/*             value={value}*/}
          {/*             resetCounter={resetCounter}/>*/}

          {title.map(buttonName => {
            return <ButtonUpdateCounter
              status={status}
              maxCounter={maxValue}
              minCounter={minValue}
              value={value}
              incrementCounter={incrementCounter}
              resetCounter={resetCounter}
              title={buttonName}
            />
          })

          }


        </div>
      </div>
    </div>
  );
}

export default App;
