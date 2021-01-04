import 'react-redux';
import { increment, decrement } from '@/redux/modules/counter';
import { addTodo, doneTodo } from '@/redux/modules/todos';
import { initialStates } from './reducers';

export type Actions =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof addTodo>
  | ReturnType<typeof doneTodo>;

export type RootState = ReturnType<typeof initialStates>;

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultRootState extends RootState {}
}
