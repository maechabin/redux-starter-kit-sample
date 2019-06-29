import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import { AppState } from './appState';
import { appModule, setValueAsync } from './modules/appModule';

const App: React.FC = () => {
  const dispatch = useDispatch();

  // stateはunknown型のため型アサーションが必要
  // 第二引数は、余計なレンダリングを避けるためのstateの前後の状態を比較する関数
  const app = useSelector(
    (state: { app: AppState }) => state.app,
    shallowEqual,
  );

  const inputEl = React.useRef<HTMLInputElement>(null);

  function setValue(value: string): void {
    dispatch(setValueAsync(value));
  }

  function handleClick(): void {
    const input = inputEl.current;
    const value = input ? input.value : '';
    setValue(value);
  }

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <input ref={inputEl} type="text" />
      <button onClick={handleClick}>send</button>

      <p>{app.value}</p>
    </div>
  );
};

export default App;
