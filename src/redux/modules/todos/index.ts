import { Actions } from '@/redux/types';
import { State } from './types';

export const addTodoType = 'todos/addTodo' as const;
export const doneTodoType = 'todos/doneTodo' as const;

export const addTodo = (task: string) => {
  return {
    type: addTodoType,
    payload: {
      id: '1',
      done: false,
      task
    }
  };
};

export const doneTodo = (id: number) => {
  return {
    type: doneTodoType,
    payload: {
      id
    }
  };
};

export const initialState: State = {
  todos: []
};

export const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case addTodoType:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
};
