import { TodoListType, TodoType } from './type';
import { createSlice } from '@reduxjs/toolkit';
import { ActionType } from '../../type';

export const todoDataStore = createSlice({
  name: 'todoDataStore',
  initialState: {
    list: {
      data: [{
        id: -1,
        message: '',
        time: '',
        title: '',
      }],
  }
  },
  reducers: {
    setValueTodo: (state, action: ActionType<TodoListType<TodoType[]>>) => {
        state.list = action.payload;
    },
    updateValueTodo: (state, action: ActionType<TodoType>) => {
      state.list = {
        data: [
          ...state.list.data.filter((data) => data.id !== action.payload.id),
          action.payload,
        ],
      };
    },
    deleteValueTodo: (state, action: ActionType<number>) => {
      state.list.data = state.list.data.filter((data) => data.id !== action.payload);
    },
  }
});

export const {
  setValueTodo,
  updateValueTodo,
  deleteValueTodo,
} = todoDataStore.actions;
