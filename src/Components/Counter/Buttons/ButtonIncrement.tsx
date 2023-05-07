import React from 'react';
import s from './ButtonIncrement.module.css'
import {statusType} from '../../../App';

type ButtonIncrementType = {
  incrementCounter: () => void
  value: number
  maxCounter: number
  minCounter: number
  status: statusType
}

const ButtonIncrement = (props: ButtonIncrementType) => {
  return (
    <div className={'wrapper'}>
      <button
        className={props.status ? s.button : s.disabled + ' ' + s.button}
        disabled={props.status === 'Enter value and press set.' && props.value >= props.minCounter && props.value < props.maxCounter ? false : true}
        onClick={props.incrementCounter}>Inc</button>
    </div>
  );
};

export default ButtonIncrement;