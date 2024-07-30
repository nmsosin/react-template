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
        state.inputList.push({
          id: action.payload.id,
          inputType: action.payload.inputType,
          type: action.payload.type,
          name: action.payload.name,
          label: action.payload.label,
          isRequired: action.payload.isRequired,
          options: action.payload.options,
        });
        
        if (state.inputList.some(item => item.type === 'button')) {
          const buttonItem = state.inputList.find(item => item.type === 'button');
          const buttonItemIdx = state.inputList.findIndex(item => item.type === 'button');
          if (buttonItem && buttonItemIdx !== state.inputList.length - 1) {
            state.inputList = state.inputList.filter(item => item.type !== 'button').concat(buttonItem);
          }
        }
      },
      deleteInput(state, action: PayloadAction<InputItem>) {
        console.log('state', state);
        console.log('action', action);

        state.inputList = state.inputList.filter(item => item.id !== action.payload.id);
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
