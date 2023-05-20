import React from 'react';
import {StatusType} from '../App';

export const statusReducer = (state: any, action: EnterValueACType) => {
  switch (action.type) {
    case 'VALUE' : {
      return action.payload
    }
  }
}


type EnterValueACType = ReturnType<typeof enterValueAC>
export const enterValueAC = (value: StatusType) => {
  return {
    type: 'VALUE',
    payload: value
  } as const
}