import React, {ChangeEvent} from 'react';

type MinValuePropsType = {
  value: number
  handlerMinValue: (event: ChangeEvent<HTMLInputElement>) => void
}

export const MinValue = (props: MinValuePropsType) => {
  return (<input type="number"  value={props.value} onChange={props.handlerMinValue}/>)

}

