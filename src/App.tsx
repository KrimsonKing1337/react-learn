import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { About } from './pages/About';
import { Main } from './pages/Main';
import style from './App.scss';

export const App = () => {
  return (
    <div className={style.app}>
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
      </Router>
    </div>
  );
};

export const ChatApp = App;
