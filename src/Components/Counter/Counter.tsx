import React, {memo} from 'react';
import s from './Counter.module.css'
import {StatusType} from '../../App';

type CounterType = {
  value: number
  maxCounter: number
  isDisabled: boolean
  minCounter: number
  status: StatusType
}

export const Counter = (props: CounterType) => {
  const finalClass = props.value === props.maxCounter
  const conditionClassCounter = typeof props.status !== 'number'
    ? s.wrapper
    : finalClass
      ? s.final + ' ' + s.number : s.number
  return (
    <div className={conditionClassCounter}>
      <span className={s.spanCounter}>{props.status}</span>
    </div>
  );
}

