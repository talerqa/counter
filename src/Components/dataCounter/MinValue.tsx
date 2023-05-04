import React, {ChangeEvent} from 'react';
import s from './Value.module.css'

type MinValuePropsType = {
  maxValue: number
  minValue: number
  handlerMinValue: (event: ChangeEvent<HTMLInputElement>) => void
}

export const MinValue = (props: MinValuePropsType) => {
  return (<div>
    <span>Min value</span>
    <input
      type="number"
      value={props.minValue}
      onChange={props.handlerMinValue}
      className={props.minValue >= props.maxValue ? s.error : s.input}
    />
  </div>)

}

