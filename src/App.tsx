import React, {ChangeEvent, useState} from 'react';
import './App.css';
import ButtonIncrement from './Components/Counter/Buttons/ButtonIncrement';
import ButtonReset from './Components/Counter/Buttons/ButtonReset';
import {MaxValue} from './Components/dataCounter/MaxValue';
import {MinValue} from './Components/dataCounter/MinValue';
import {Counter} from './Components/Counter/Counter';

function App() {
//useState для значения максимального, минимального и текущего
  const [minValue, setMinValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(5)
  const [value, setValue] = useState<number>(maxValue);
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

    //Когда выбираем цифру, после повторного ввода, то показывается Enter value and press "set"
    setStatus(false)
  }

  //функция которая берет минимальное  значение из введенного  инпута
  const handlerMinValue = (event: ChangeEvent<HTMLInputElement>) => {
    setMinValue(Number(event.currentTarget.value))
    setValue(minValue)
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
            disabled={maxValue > minValue ? false : true}
            onClick={onSetMinAndMaxValue}>SET
          </button>

        </div>
      </div>
      <div className={'Wrapper-counter'}>

        {/*If status true that SHOW COUNTER else SHOW info about need to set max and min number*/}
        {status ? (
          <Counter maxCounter={maxValue} value={value}/>
        ) : (
          minValue >= maxValue || minValue < 0 || maxValue < 0
            ? <span>Counter value is out of range.</span>
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
