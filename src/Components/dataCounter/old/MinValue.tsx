import React, {ChangeEvent} from 'react';
import s from '../InputChangeValue.module.css'
import {statusType} from '../../../App';

type MinValuePropsType = {
  maxValue: number
  minValue: number
  handlerMinValue: (num: number, status: any) => void
  status: statusType
}

export const MinValue = (props: MinValuePropsType) => {


  const condition = props.minValue >= props.maxValue || props.minValue < 0

  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    let changedNumber = Number(event.currentTarget.value)
    let status
    props.maxValue <= changedNumber || props.maxValue < 0 || changedNumber < 0
      ? status = 'Counter value is out of range.'
      : status = 'Enter value and press set.'

    props.handlerMinValue(changedNumber, status)

  }


  return (<div>
    <span>Min value</span>
    <input
      type="number"
      value={props.minValue}
      onChange={handler}
      className={props.status === 'Counter value is out of range.'
        ? s.error
        : condition
          ? s.input : s.inputActive }
    />
  </div>)

}

