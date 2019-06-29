import { createSlice, PayloadAction } from 'redux-starter-kit';
import { Dispatch } from 'redux';

import { AppState, appState } from '../appState';

/**
 * ReducerとStateに対応する自動的にAction Creator、Action Type、Selectorを生成する
 */
export const appModule = createSlice({
  // Slice名（Optional）、Action TypeとSelectorで使われる
  slice: 'app',
  // Reducerの初期値
  initialState: appState,
  // Key名はActionを生成する時に使われる
  reducers: {
    setValue(state: AppState, action: PayloadAction<string>): void {
      // immerによりmutateしてもOK
      state.value = action.payload;
    },
  },
});

// redux-thunkによる非同期処理
export function setValueAsync(value: string) {
  return async (dispatch: Dispatch) => {
    await setTimeout(() => {
      dispatch(appModule.actions.setValue(value));
    }, 1000);
  };
}
