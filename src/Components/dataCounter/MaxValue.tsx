import React, {ChangeEvent} from 'react';

type MaxValuePropsType = {
  value: number
  handlerMaxValue: (event: ChangeEvent<HTMLInputElement>) => void
}

export const MaxValue = (props: MaxValuePropsType) => {
  return (<input type="number" value={props.value} onChange={props.handlerMaxValue}/>)
}

