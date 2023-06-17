import React, {useCallback} from 'react';
import s from './ButtonSetCounter.module.css'

type ButtonSetDataProps  = {
  maxValue: number
  minValue: number
  value: number
  disabled: boolean
  onSetMinAndMaxValue: (maxValue: number, minValue: number, value: number) => void
}

export const ButtonSetData = (props: ButtonSetDataProps) => {
  const handler = () => props.onSetMinAndMaxValue(props.maxValue, props.minValue, props.value)

  return (
    <div className={s.buttonCounter}>
      <button tabIndex={2} className={!props.disabled ? s.button + ' ' + s.buttonActive : s.button}
        //Если большее выбранное число больше меньшего, то кнопка раздизейбливается
              disabled={props.disabled}
              onClick={handler}>SET
      </button>
    </div>
  );
}

