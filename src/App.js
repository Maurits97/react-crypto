import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter as Router, Route} from 'react-router-dom'


import NavContainer from './components/NavContainer'
import CryptoContainer from './components/CryptoContainer';
import TrendingContainer from './components/TrendingContainer';

function App() {
  return (
    <Provider store={store}>
      <Router>
          <NavContainer />

          <div className="main">
            <Route exact path="/" component={CryptoContainer}/>
            <Route exact path="/trending" component={TrendingContainer}/>
          </div>
          
      </Router>
    </Provider>
  );
}

export default App;
