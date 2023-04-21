import React, {useState} from 'react';
import s from './ButtonIncrement.module.css'

type ButtonIncrementType = {
  incrementCounter: () => void
  value: number
}

const ButtonIncrement = (props: ButtonIncrementType) => {

  const statusDisabled = props.value === 5

  const finalCss = s.button
  +(statusDisabled ? ' ' + s.disabled : ' ')

  return (
    <div className={'wrapper'}>
      <button
        disabled={statusDisabled}
        className={finalCss}
        onClick={props.incrementCounter}>Inc</button>
    </div>
  );
};

export default ButtonIncrement;