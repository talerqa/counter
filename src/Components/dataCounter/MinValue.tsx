import React, {ChangeEvent} from 'react';
import s from './Value.module.css'

type MinValuePropsType = {
  maxValue: number
  minValue: number
  handlerMinValue: (num: number) => void
}

export const MinValue = (props: MinValuePropsType) => {
  const condition = props.minValue >= props.maxValue || props.minValue < 0

  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    props.handlerMinValue(Number(event.currentTarget.value))
  }


  return (<div>
    <span>Min value</span>
    <input
      type="number"
      value={props.minValue}
      onChange={handler}
      className={ condition ? s.error : s.input}
    />
  </div>)

}

