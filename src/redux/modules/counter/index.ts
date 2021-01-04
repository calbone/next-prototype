import { Actions } from '@/redux/types';
import { State } from './types';

export const incrementType = 'counter/increment' as const;
export const deincrementType = 'counter/deincrement' as const;

export const increment = (inc: number) => {
  return {
    type: incrementType,
    payload: inc
  };
};

export const decrement = (dec: number) => {
  return {
    type: deincrementType,
    payload: dec
  };
};

export const initialState: State = {
  count: 0
};

export const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case incrementType:
      return {
        ...state,
        count: state.count + 1
      };
    case deincrementType:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};
