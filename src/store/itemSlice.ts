import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InputItem, InputList } from '../utils/types';

const initialState: InputList = {
  inputList: [],
}

const itemSlice = createSlice({
  name: 'inputItem',
  initialState,
    reducers: {
      addInput(state, action: PayloadAction<InputItem>) {
        console.log('action.payload', action.payload);
        
        state.inputList.push({
          id: action.payload.id,
          inputType: action.payload.inputType,
          type: action.payload.type,
          name: action.payload.name,
          label: action.payload.label,
          isRequired: action.payload.isRequired,
          options: action.payload.options,
        });
        
        console.log('state.inputList', state.inputList);
      },
      deleteInput(state, action: PayloadAction<InputItem>) {
        console.log('state', state);
        console.log('action', action);
      },
      updateInput(state, action: PayloadAction<InputItem>) {
        console.log('state', state);
        console.log('action', action);
      },
    },
});

export const {
  addInput,
  deleteInput,
  updateInput,
} = itemSlice.actions;

export default itemSlice.reducer;
