import { combineReducers, configureStore } from 'redux-starter-kit';

import appModule from './modules/appModule';

const reducer = combineReducers({
  app: appModule.reducer,
});

export const store = configureStore({
  reducer,
});
