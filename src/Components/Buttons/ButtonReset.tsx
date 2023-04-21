import React from 'react';
import s from './ButtonReset.module.css'

type ButtonResetType = {
  resetCounter: () => void
  value: number
  minCounter: number
}

const ButtonReset = (props: ButtonResetType) => {

  const statusDisabled = props.value === props.minCounter

  const finalCss = s.button
    +(statusDisabled ? ' ' + s.disabled : ' ')

  return (
    <div>
      <button
        onClick={props.resetCounter}
        className={finalCss}
        disabled={statusDisabled}
      >Reset
      </button>
    </div>
  );
};

export default ButtonReset;