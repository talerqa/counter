import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Components/Counter/Counter';
import {ButtonSetData} from './Components/Counter/Buttons/ButtonSetData';
import {ButtonUpdateCounter} from './Components/Counter/Buttons/ButtonUpdateCounter';
import {InputChangeValue} from './Components/dataCounter/InputChangeValue';

export type statusType = 'Enter value and press set.' | 'Counter value is out of range.' | number

export type TitleType = 'INCREMENT' | 'RESET'

export type TitleInputValue = 'Max Value' | 'Min Value'

function App() {

  //Тайтл и условия для универсальных инпута и баттона
  const title: TitleType[] = ['INCREMENT', 'RESET'];
  const titleInputValue: TitleInputValue[] = ['Max Value', 'Min Value']

  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [value, setValue] = useState<number>(maxValue);

  //status в котором находится счетчик Нужно ввести значение либо Значения не допустимы либо Счетчик
  const [status, setStatus] = useState<statusType>('Enter value and press set.');

  //Условия дизейбла кнопок
  const isDisabled = maxValue <= minValue || maxValue < 0 || minValue < 0;


  useEffect(() => {

    //Получаем локальный стейт
    const storedValue = localStorage.getItem('currentValue');
    const storedStatus = localStorage.getItem('status');
    const storedMinValue = localStorage.getItem('minValue');
    const storedMaxValue = localStorage.getItem('maxValue');

    // докинуть проверок
    setMinValue(Number(storedMinValue));
    setMaxValue(Number(storedMaxValue));
    setValue(Number(storedValue))

    //Ели не null то парсится status в зависимости от типа statusType
    if (storedStatus !== null) {
      setStatus(JSON.parse(storedStatus) as statusType);
    }

  }, [])

  useEffect(() => {
    localStorage.setItem('minValue', JSON.stringify(minValue))
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    localStorage.setItem('status', JSON.stringify(status))
    localStorage.setItem('currentValue', JSON.stringify(value))

  }, [minValue, maxValue, status, value])

//Увеличиваем значение счетчика
  const incrementCounter = (maxValue: number, value: number) => {

    // Если текущее value === maxValue которое в инпуте, то счетчик не увеличивается
    if (value !== maxValue) {
      setValue(value + 1);
      setStatus(value + 1);
    }
  }

  const resetCounter = (minValue: number) => {
    setValue(minValue);
    setStatus(minValue);
  }

  //функция которая берет максимально  значение из введенного  инпута
  const handlerMaxValue = (num: number, status: statusType) => {
    setMaxValue(num)
    setStatus(status)
  }

  //функция которая берет минимальное  значение из введенного  инпута
  const handlerMinValue = (num: number, status: statusType) => {
    setMinValue(num)
    setStatus(status)
  }


  const onSetMinAndMaxValue = (maxValue: number, minValue: number, value: number) => {
    setMinValue(minValue);
    setValue(minValue)
    setMaxValue(maxValue);
    setStatus(minValue)
  };

  return (
    <div className={'App'}>
      <div className={'Set-counter'}>
        <div>
          <span>Please, change MIN and MAX value and press SET. </span>

          <div>
            {titleInputValue.map(buttonName => {
              return <InputChangeValue
                maxValue={maxValue}
                minValue={minValue}
                handlerMaxValue={handlerMaxValue}
                handlerMinValue={handlerMinValue}
                status={status}
                title={buttonName}
              />
            })}
          </div>

          <ButtonSetData maxValue={maxValue}
                         minValue={minValue}
                         value={value}
                         disabled={isDisabled}
                         onSetMinAndMaxValue={onSetMinAndMaxValue}
          />
        </div>
      </div>
      <div className={'Wrapper-counter'}>

        <Counter maxCounter={maxValue}
                 minCounter={minValue}
                 value={value}
                 isDisabled={isDisabled}
                 status={status}/>

        <div className="buttonWrapper">

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

          })}
        </div>
      </div>
    </div>
  );
}

export default App;
