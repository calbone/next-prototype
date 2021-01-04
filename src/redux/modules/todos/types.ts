interface Todo {
  id: string;
  done: boolean;
  task: string;
}

export interface State {
  todos: Todo[];
}
