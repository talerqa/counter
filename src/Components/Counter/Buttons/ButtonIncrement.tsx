import React from 'react';
import s from './ButtonIncrement.module.css'
import {statusType} from '../../../App';

type ButtonIncrementType = {
  incrementCounter: (maxValue: number, value: number)  => void
  value: number
  maxCounter: number
  minCounter: number
  status: statusType
}

const ButtonIncrement = (props: ButtonIncrementType) => {

  const onClickHandler = () => {
    props.incrementCounter(props.maxCounter, props.value)
  }

  return (
    <div className={'wrapper'}>
      <button
        className={props.status ? s.button : s.disabled + ' ' + s.button}
        disabled={typeof props.status !== 'number'}
        onClick={onClickHandler}>INC</button>
    </div>
  );
};

export default ButtonIncrement;