import {combineReducers, legacy_createStore} from 'redux';
import {statusReducer} from './Reducer/StatusReducer';

let rootReducer = combineReducers({
  statusReducer
})

export type RootReducer = ReturnType<typeof rootReducer>
export let store = legacy_createStore(rootReducer)

