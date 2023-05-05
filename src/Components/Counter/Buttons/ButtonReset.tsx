import React from 'react';
import s from './ButtonReset.module.css'

type ButtonResetType = {
  resetCounter: () => void
  value: number
  minCounter: number
  status: boolean
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