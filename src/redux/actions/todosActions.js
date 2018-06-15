import { CURRENT_TODO_CHANGED, ADD_NEW_TODO, DELETE_TODO } from './types';

export const todoInputChanged = todoText => ({ type: CURRENT_TODO_CHANGED, todoText });
export const addNewTodo = () => ({ type: ADD_NEW_TODO });
export const deleteTodo = id => ({ type: DELETE_TODO, id });
