import { initTialStateTodo } from './initialState';
import { TodoListType, TodoType } from './type';
import { createSlice } from '@reduxjs/toolkit';
import { ActionType } from '../../type';

export const todoDataStore = createSlice({
  name: 'todoDataStore',
  initialState: initTialStateTodo as TodoListType<TodoType>,
  reducers: {
    addValueTodo: (state, action: ActionType<TodoType>) => {
      if(state.data) {
        state.data = [...state.data, action.payload];
      } else {
        state.data = [action.payload];
      }
    },
    setValueTodo: (state, action: ActionType<TodoType[]>) => {
        state.data = action.payload;
    },
    updateValueTodo: (state, action: ActionType<TodoType>) => {
      if(state.data) {
        state.data = [
          action.payload,
          ...state.data.filter((data) => data.id !== action.payload.id),
        ];
      } else {
        state.data = [action.payload];
      }
    },
    deleteValueTodo: (state, action: ActionType<number>) => {
      if(state.data) {
        state.data = state.data.filter((data) => data.id !== action.payload);
        state.select = undefined;
      }
    },
    selectValueTodo: (state, action: ActionType<number>) => {
      if(state.data) {
        state.select = state.data.find((select) => select.id === action.payload);
      } else {
        state.data = null;
      }
    }
  }
});

export const {
  setValueTodo,
  updateValueTodo,
  deleteValueTodo,
  selectValueTodo,
  addValueTodo,
} = todoDataStore.actions;
