import { createSlice } from '@reduxjs/toolkit'
import { ActionType } from '../../type';

export const inputDataUserName = createSlice({
  name: 'inputDataUserName',
  initialState: {
    name: '',
  },
  reducers: {
    updateValue: (state, action: ActionType<string>) => {
        state.name = action.payload;
    }
  }
});

export const { updateValue } = inputDataUserName.actions;
