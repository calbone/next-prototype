import { Actions } from '@/redux/types';
import { State } from './types';

export const incrementType = 'counter/increment' as const;
export const decrementType = 'counter/decrement' as const;

export const increment = () => {
  return {
    type: incrementType
  };
};

export const decrement = () => {
  return {
    type: decrementType
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
    case decrementType:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};
