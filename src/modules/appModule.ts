import { createSlice } from 'redux-starter-kit';

const appModule = createSlice({
  slice: 'app',
  initialState: {
    value: 'initialValue',
  },
  reducers: {
    setValue(state, action) {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export default appModule;
