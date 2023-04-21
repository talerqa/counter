import React from 'react';
import s from './Counter.module.css'

type CounterType = {
  value: number
  maxCounter: number
}

export const Counter = (props: CounterType) => {

  const finalClass =  props.value === props.maxCounter ? s.final : ' '

  return (
    <div className={s.wrapper}>
      <div className={finalClass}>{props.value}</div>
    </div>
  );
};

