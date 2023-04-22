import React from 'react';
import s from './Counter.module.css'

type CounterType = {
  value: number
  maxCounter: number
}

export const Counter = (props: CounterType) => {

  const finalClass =  props.value === props.maxCounter ? s.counter + " " + s.final : s.counter

  return (
    <div className={s.wrapper}>
      <p className={finalClass}>{props.value}</p>
    </div>
  );
};

