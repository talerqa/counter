import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import ButtonIncrement from './Components/Counter/Buttons/ButtonIncrement';
import ButtonReset from './Components/Counter/Buttons/ButtonReset';
import {MaxValue} from './Components/dataCounter/MaxValue';
import {MinValue} from './Components/dataCounter/MinValue';
import {Counter} from './Components/Counter/Counter';

function App() {
//useState для значения максимального, минимального и текущего
  const [minValue, setMinValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(0)
  const [value, setValue] = useState<number>(maxValue);
  //usestate для
  const [status, setStatus] = useState<boolean>(false)

  useEffect(() => {
    const value = Number(localStorage.getItem('value'));
    const status = Boolean(localStorage.getItem('status'));
    const minValue = Number(localStorage.getItem('minValue'));
    const maxValue = Number(localStorage.getItem('maxValue'))

    setMinValue(minValue);
    setMaxValue(maxValue);
    setValue(value < 0 ? handler() : value);
    setStatus(status);

  }, [])

  useEffect(() => {
    localStorage.setItem('value', JSON.stringify(value))
    localStorage.setItem('status', JSON.stringify(status))
    localStorage.setItem('minValue', JSON.stringify(minValue))
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
  }, [value, status, maxValue, minValue])

  const handler = () => {
    setStatus(false)
    return 0
  }

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

    //Когда выбираем цифру, после повторного ввода, то показывается Enter value and press "set"
    setStatus(false)
  }

  //функция которая берет минимальное  значение из введенного  инпута
  const handlerMinValue = (event: ChangeEvent<HTMLInputElement>) => {
    setMinValue(Number(event.currentTarget.value))

    //Когда выбираем цифру, после повторного ввода, то показывается Enter value and press "set"
    setStatus(false)
  }

  const onSetMinAndMaxValue = () => {
    setStatus(true)
    setValue(minValue)
  }
  ///Если вводим отрицательное значение кнопка красная и дизейблиться
  /// По умолчанию кнопки все задизейблены, раздизейбл, когда мы нажали СЕТ

  return (
    <div className={'App'}>
      <div className={'Set-counter'}>
        <div>
          <span>Please, change min and max value. </span>

          {/*Кнопка информации парвила использования счетчика*/}
          <div>
            <MaxValue maxValue={maxValue}
                      minValue={minValue}
                      handlerMaxValue={handlerMaxValue}/>
            <MinValue maxValue={maxValue}
                      minValue={minValue}
                      handlerMinValue={handlerMinValue}/>
          </div>

          {/*on click buuton show counter and set min value which press user */}
          <button
            //Если большее выбранное число больше меньшего, то кнопка раздизейбливается


            disabled={maxValue > minValue && maxValue >= 0 && minValue >= 0 ? false : true}
            onClick={onSetMinAndMaxValue}>SET
          </button>

        </div>
      </div>
      <div className={'Wrapper-counter'}>

        {/*If status true that SHOW COUNTER else SHOW info about need to set max and min number*/}
        {status ? (
          <Counter maxCounter={maxValue} value={value}/>
        ) : (
          //Минимально установленное больше либо равно макисмально установленно
          // Минимально установленное меньше 0
          //Максимально установленое меньше 0
          //Показываются соответствующие подсказки
          minValue >= maxValue || minValue < 0 || maxValue < 0
            ? <span>Counter value is out of range.</span>
            //Если условия
            : <span>Enter value and press "set".</span>
        )}

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
