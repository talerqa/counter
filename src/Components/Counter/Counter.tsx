import React from 'react';
import s from './Counter.module.css'
import {statusType} from '../../App';

type CounterType = {
  value: number
  maxCounter: number
  isDisabled: boolean
  minCounter: number
  status: statusType
}

export const Counter = (props: CounterType) => {

  const finalClass = props.value === props.maxCounter
  return (
    <div className={
      typeof props.status !== 'number'
        ? s.wrapper
        : finalClass
          ? s.final + ' ' + s.number : s.number}>
      {props.status}
    </div>
  );
};


