import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from 'redux-starter-kit';

import appModule from './modules/appModule';
// reducer
const reducer = combineReducers({
  app: appModule.reducer,
});

// middleware
const middlewares = [...getDefaultMiddleware()];

export const store = configureStore({
  reducer,
  middleware: middlewares,
});
