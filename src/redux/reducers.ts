import { combineReducers } from 'redux';
import * as Counter from '@/redux/modules/counter';
import * as Todos from '@/redux/modules/todos';

export const initialStates = () => {
  return {
    counter: Counter.initialState,
    todos: Todos.initialState
  };
};

export const reducers = combineReducers({
  counter: Counter.reducer,
  todos: Todos.reducer
});
