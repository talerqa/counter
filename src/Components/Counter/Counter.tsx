import React from 'react';
import s from './Counter.module.css'

type CounterType = {
  value: number
  maxCounter: number
  isDisabled: boolean
}

export const Counter = (props: CounterType) => {

  const finalClass =  props.value === props.maxCounter ? s.counter + " " + s.final : s.counter

  return (
    <div className={s.wrapper}>
      <p>{props.isDisabled ? 'Counter value is out of range.' : props.value === 0 ? 'Enter value and press "set".' : props.value}</p>
    </div>
  );
};

