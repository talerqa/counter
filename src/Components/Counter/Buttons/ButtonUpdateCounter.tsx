import React from 'react';
import {statusType, titleType} from '../../../App';
import s from './ButtonUpdateCounter.module.css';


type ButtonUpdateCounterType = {
  resetCounter: (minValue: number) => void
  incrementCounter: (maxValue: number, value: number) => void
  value: number
  minCounter: number
  status: statusType
  maxCounter: number
  title: titleType
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
  const conditionIncrement = props.status >= props.minCounter
    ? s.buttonIncrement
    : s.disabled + ' ' + s.buttonIncrement
  const conditionReset = props.status > props.minCounter
    ? s.buttonReset
    : s.disabled + ' ' + s.buttonReset

  return (
    <div className={'wrapper'}>

      <button
        className={props.title === 'INCREMENT' ? conditionIncrement : conditionReset}

        //Статус тут может быть СТРОКОЙ поэтмоу проверка, ели число, то раздизейб
        disabled={typeof props.status !== 'number'}

        //Клик и вызов функции в зависимости от названия по которому мы нажали
        onClick={props.title === 'INCREMENT' ? onClickHandlerIncrement : onClickHandlerReset}>
        {props.title}
      </button>


    </div>
  );
};

