import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import appModule from './modules/appModule';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const app = useSelector(state => {
    console.log(state);
    return (state as any).app;
  });

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
