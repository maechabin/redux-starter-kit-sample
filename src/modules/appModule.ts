import { createSlice } from 'redux-starter-kit';

import { AppState, appState } from '../appState';

/**
 * ReducerとStateに対応する自動的にAction Creator、Action Type、Selectorを生成する
 */
const appModule = createSlice({
  // Slice名（Optional）、Action TypeとSelectorで使われる
  slice: 'app',
  // Reducerの初期値
  initialState: appState,
  // Key名はActionを生成する時に使われる
  reducers: {
    setValue(state: AppState, action: any): AppState {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export default appModule;
