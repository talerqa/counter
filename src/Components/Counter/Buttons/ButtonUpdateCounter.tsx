import React from 'react';
import {StatusType, TitleType} from '../../../App';
import s from './ButtonUpdateCounter.module.css';


type ButtonUpdateCounterType = {
  resetCounter: (minValue: number) => void
  incrementCounter: (maxValue: number, value: number) => void
  value: number
  minCounter: number
  status: StatusType
  maxCounter: number
  title: TitleType

}

export const ButtonUpdateCounter = (props: ButtonUpdateCounterType) => {

  //При вызове - колбэк увеличивает значение счетчика
  const onClickHandlerIncrement = () => {
    props.incrementCounter(props.maxCounter, props.value)
  }

  //При вызове - колбэк сбрасывает значение счетчика
  const onClickHandlerReset = () => {
    props.resetCounter(props.minCounter);
  }

  //Условия для классов когда они дизейблятся
  const conditionIncrement = props.status >= props.minCounter && (props.status !== props.maxCounter)
    ? s.buttonIncrement
    : s.disabled + ' ' + s.buttonIncrement

  const conditionReset = props.status > props.minCounter
    ? s.buttonReset
    : s.disabled + ' ' + s.buttonReset


  const isDisabledIncrement = props.maxCounter === props.value
  const isDisabledReset = props.minCounter === props.value

  //Условия для дизейбла кнопки
  const isDisableButton = typeof props.status !== 'number' // Если строка сразу дизейбл
    ? true
    : props.title === 'INCREMENT' && isDisabledIncrement
      ? true
      : props.title === 'RESET' && isDisabledReset

  return (
    <div className={'wrapper'}>

      <button
        className={props.title === 'INCREMENT' ? conditionIncrement : conditionReset}

        //Статус тут может быть СТРОКОЙ поэтмоу проверка, ели число, то раздизейб
        disabled={isDisableButton}

        //Клик и вызов функции в зависимости от названия по которому мы нажали
        onClick={props.title === 'INCREMENT' ? onClickHandlerIncrement : onClickHandlerReset}>
        {props.title}
      </button>


    </div>
  );
};

