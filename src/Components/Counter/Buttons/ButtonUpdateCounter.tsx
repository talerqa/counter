import React from 'react';
import {statusType, titleType} from '../../../App';
import s from './ButtonUpdateCounter.module.css';


type ButtonUpdateCounterType = {
  resetCounter: (minValue: number, value: number) => void
  incrementCounter: (maxValue: number, value: number) => void
  value: number
  minCounter: number
  status: statusType
  maxCounter: number
  title: titleType
}

export const ButtonUpdateCounter = (props: ButtonUpdateCounterType) => {

  const onClickHandlerIncrement = () => {
    props.incrementCounter(props.maxCounter, props.value)

  }

  const onClickHandlerReset = () => {
    props.resetCounter(props.minCounter, props.value);
  }

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
        disabled={typeof props.status !== 'number'}
        onClick={
          props.title === 'INCREMENT' ? onClickHandlerIncrement : onClickHandlerReset
        }
      >
        {props.title}
      </button>


    </div>
  );
};

