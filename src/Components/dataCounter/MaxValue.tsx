import React, {ChangeEvent} from 'react';
import s from './Value.module.css';

type MaxValuePropsType = {
  maxValue: number
  minValue: number
  handlerMaxValue: (event: ChangeEvent<HTMLInputElement>) => void
}

export const MaxValue = (props: MaxValuePropsType) => {
  const condition = props.minValue >= props.maxValue || props.maxValue < 0
  return (<div>
    <span>Max value</span>
    <input type="number"
           value={props.maxValue}
           onChange={props.handlerMaxValue}
           className={condition ? s.error : s.input}
    />
  </div>)
}

