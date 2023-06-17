import React from 'react';
import {StatusType} from '../../App';

const initState: StatusType = 'Enter value and press set'

export const statusReducer = (state: StatusType = initState, action: EnterValueACType): StatusType => {
  switch (action.type) {
    case 'VALUE' : {
      return action.payload
    }
    default:
      return state
  }
}

type EnterValueACType = ReturnType<typeof enterValueAC>
export const enterValueAC = (value: StatusType) => {
  return {
    type: 'VALUE',
    payload: value
  } as const
}