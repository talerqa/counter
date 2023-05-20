import React, {ChangeEvent} from 'react';
import {StatusType, TitleInputValue} from '../../App';
import s from './InputChangeValue.module.css';


type valuePropsType = {
  maxValue: number
  minValue: number
  handlerMaxValue: (num: number, status: any) => void
  handlerMinValue: (num: number, status: any) => void
  status: StatusType
  title: TitleInputValue
}

export const InputChangeValue = (props: valuePropsType) => {

  const condition = props.minValue >= props.maxValue || props.minValue < 0

  const onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
    let changedValue = Number(event.currentTarget.value)
    let status
    changedValue <= props.minValue || changedValue < 0 || props.minValue < 0
      ? status = 'Counter value is out of range.'
      : status = 'Enter value and press set.'
      //кладу Number(event.currentTarget.value) потому что сломается из-за status
    props.handlerMaxValue(Number(event.currentTarget.value), status);
  }

  const onChangeMinValue = (event: ChangeEvent<HTMLInputElement>) => {
    let changedNumber = Number(event.currentTarget.value)
    let status
    props.maxValue <= changedNumber || props.maxValue < 0 || changedNumber < 0
      ? status = 'Counter value is out of range.'
      : status = 'Enter value and press set.'
    props.handlerMinValue(changedNumber, status)
  }

  return (
    <div>
      <span className={s.spanTitle}>{props.title === 'Max Value' ? 'Max Value' : 'Min Value'}</span>
      <input
        type="number"
        value={props.title === 'Max Value' ? props.maxValue : props.minValue}
        onChange={props.title === 'Max Value' ? onChangeMaxValue : onChangeMinValue}
        className={props.status === 'Counter value is out of range.'
          ? s.error + " " + s.inputDefault
          : condition
            ? s.input + " " + s.inputDefault
            : s.inputActive + " " + s.inputDefault}
      />
    </div>
  );
};

