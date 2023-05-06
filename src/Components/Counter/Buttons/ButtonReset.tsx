import React from 'react';
import s from './ButtonReset.module.css'
import {statusType} from '../../../App';

type ButtonResetType = {
  resetCounter: () => void
  value: number
  minCounter: number
  status: statusType
  maxCounter: number
}

const ButtonReset = (props: ButtonResetType) => {

  return (
    <div>
      <button
        onClick={props.resetCounter}
        className={props.status && props.value >= props.minCounter ? s.button : s.disabled + ' ' + s.button}
        disabled={!(props.status && props.value > props.minCounter && props.value <= props.maxCounter)}
      >Reset
      </button>
    </div>
  );
};

export default ButtonReset;