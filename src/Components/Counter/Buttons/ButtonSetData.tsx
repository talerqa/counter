import React from 'react';

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
    <div>
      <button
        //Если большее выбранное число больше меньшего, то кнопка раздизейбливается
        disabled={props.disabled}
        onClick={handler}>SET
      </button>
    </div>
  );
};

