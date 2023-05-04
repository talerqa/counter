import React from 'react';
import s from './ButtonIncrement.module.css'

type ButtonIncrementType = {
  incrementCounter: () => void
  value: number
  maxCounter: number
  minCounter: number
  status: boolean
}

const ButtonIncrement = (props: ButtonIncrementType) => {

  const statusDisabled = props.value === props.maxCounter

  const finalCss = s.button
  +(statusDisabled ? ' ' + s.disabled : ' ')

  return (
    <div className={'wrapper'}>
      <button
        className={props.status === true ? s.button : s.disabled + ' ' + s.button}
        disabled={props.status === true &&  props.value >= props.minCounter && props.value < props.maxCounter ? false : true}
        onClick={props.incrementCounter}>Inc</button>
    </div>
  );
};

export default ButtonIncrement;