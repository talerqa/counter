import React from 'react';
import s from './ButtonReset.module.css'
import {statusType} from '../../../App';

type ButtonResetType = {
  resetCounter: (minValue: number, value: number) => void
  value: number
  minCounter: number
  status: statusType
  maxCounter: number
}

const ButtonReset = (props: ButtonResetType) => {

  const handler = () => {
    props.resetCounter(props.minCounter, props.value)
  }

  return (
    <div>
      <button
        onClick={handler}
        className={props.status > props.minCounter
          ? s.button
          : s.disabled + ' ' + s.button}
        disabled={typeof props.status !== 'number'}
      >RESET
      </button>
    </div>
  );
};

export default ButtonReset;