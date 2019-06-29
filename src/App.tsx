import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import { AppState } from './appState';
import appModule from './modules/appModule';

const App: React.FC = () => {
  const dispatch = useDispatch();

  // stateはunknown型のため型アサーションが必要
  // 第二引数は、余計なレンダリングを避けるためのstateの前後の状態を比較する関数
  const app = useSelector((state: { app: AppState }) => {
    return state.app;
  }, shallowEqual);

  const setValue = () => dispatch(appModule.actions.setValue('aaa'));

  function handleClick() {
    setValue();
  }

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <input />
      <button onClick={handleClick}>send</button>

      <p>{app.value}</p>
    </div>
  );
};

export default App;
