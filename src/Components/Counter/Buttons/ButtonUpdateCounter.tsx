import React from 'react';
import {statusType} from '../../../App';
import s from './ButtonUpdateCounter.module.css';


type ButtonUpdateCounterType = {
  resetCounter: (minValue: number, value: number) => void
  incrementCounter: (maxValue: number, value: number) => void
  value: number
  minCounter: number
  status: statusType
  maxCounter: number
}

type titleType = 'INCREMENT' | 'RESET'

export const ButtonUpdateCounter = (props: ButtonUpdateCounterType) => {

  const title = ['INCREMENT', 'RESET']

  // const [title, setTitle] = useState<titleType>('INCREMENT')

  const onClickHandlerIncrement = () => {
    props.incrementCounter(props.maxCounter, props.value)

  }

  const onClickHandlerReset = () => {
    props.resetCounter(props.minCounter, props.value);
  }

  const conditionIncrement = props.status >= props.minCounter
    ? s.buttonIncrement
    : s.disabled + ' ' + s.buttonIncrement

  const conditionReset = props.status > props.minCounter
    ? s.buttonReset
    : s.disabled + ' ' + s.buttonReset

  return (
    <div className={'wrapper'}>

      {title.map(buttonTitle => {
          return <button
            className={ buttonTitle === 'INCREMENT' ? conditionIncrement : conditionReset}
            disabled={typeof props.status !== 'number'}
            onClick={
              buttonTitle === 'INCREMENT' ? onClickHandlerIncrement : onClickHandlerReset
            }
          >
            {buttonTitle}
          </button>
        }
      )
      }


    </div>
  );
};

