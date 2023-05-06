import React from 'react';
import s from './Counter.module.css'
import {statusType} from '../../App';
import {isDisabled} from '@testing-library/user-event/dist/utils';

type CounterType = {
  value: number
  maxCounter: number
  isDisabled: boolean
  minCounter: number
  status: statusType
}

export const Counter = (props: CounterType) => {

  const finalClass =  props.value === props.maxCounter ? s.counter + " " + s.final : s.counter
  console.log(props.status)
  console.log(props.value)
  console.log(!props.isDisabled)

  return (
    <div className={s.wrapper}>
      { props.status }
    </div>
  );
};


//
//props.maxCounter === 0 || props.value === 0
// props.minCounter >= props.maxCounter || props.minCounter < 0 || props.maxCounter < 0

