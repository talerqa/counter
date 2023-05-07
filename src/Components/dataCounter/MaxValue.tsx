import React, {ChangeEvent} from 'react';
import s from './Value.module.css';

type MaxValuePropsType = {
  maxValue: number
  minValue: number
  handlerMaxValue: (num: number, status: any) => void
 // onSetMinAndMaxValue: (maxValue: number, minValue: number, status: any) => void
}

export const MaxValue = (props: MaxValuePropsType) => {
  const condition = props.minValue >= props.maxValue || props.maxValue < 0

  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    let changedValue = Number(event.currentTarget.value)
    let status

    changedValue <= props.minValue || changedValue < 0 || props.minValue < 0
      ? status = 'Counter value is out of range.'
      : status = 'Enter value and press set.'

    props.handlerMaxValue(Number(event.currentTarget.value), status);

    //props.onSetMinAndMaxValue(props.minValue, changedValue, status)
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

