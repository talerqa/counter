import React, {ChangeEvent} from 'react';
import s from './Value.module.css';

type MaxValuePropsType = {
  maxValue: number
  minValue: number
  handlerMaxValue: (num: number) => void

}

export const MaxValue = (props: MaxValuePropsType) => {
  const condition = props.minValue >= props.maxValue || props.maxValue < 0
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    props.handlerMaxValue(Number(event.currentTarget.value))
  }
  return (<div>
    <span>Max value</span>
    <input type="number"
           value={props.maxValue}
           onChange={handler}
           className={condition ? s.error : s.input}
    />
  </div>)
}

