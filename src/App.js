import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './css/App.css';

import User from './components/User';
import Account from './components/Account';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <Router>
      <div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/account">Account</Link>
        </div>

        <p> Counter {counter}</p>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>+</button>
        {isLogged ? <p>Information i shouldnt see</p>: ''}

        <hr/>
        <Route exact path="/" component={User}/>
        <Route exact path="/account" component={Account}/>
      </div>
    </Router>
  );
}

export default App;
