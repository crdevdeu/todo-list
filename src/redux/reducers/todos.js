import { uniqueId } from 'lodash';

import { CURRENT_TODO_CHANGED, ADD_NEW_TODO, DELETE_TODO } from './../actions/types';

const INITIAL_STATE = {
  currentTodo: '',
  todosList: [{ text: 'Add your first todo', id: uniqueId() }],
  todosRemaining: 1
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CURRENT_TODO_CHANGED:
      return { ...state, currentTodo: action.todoText };
    case ADD_NEW_TODO: {
      const { currentTodo, todosList } = state;
      const newTodo = { text: currentTodo, id: uniqueId() };
      const newTodosList = [...todosList, newTodo];

      return { ...state, todosList: newTodosList, todosRemaining: newTodosList.length };
    }
    case DELETE_TODO: {
      const { todosList } = state;
      const newTodos = todosList.filter((todoValue, todoIndex) => action.id !== todoIndex);

      return { ...state, todosList: newTodos, todosRemaining: newTodos.length };
    }
    default:
      return state;
  }
};
