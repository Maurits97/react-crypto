import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import NavContainer from './components/NavContainer'
import FooterContainer from './components/FooterContainer'
import TrendingContainer from './components/TrendingContainer';
import MarketCapContainer from './components/MarketCapContainer';

function App() {
  return (
    <Provider store={store}>
      <Router>
          <NavContainer />

          <Route exact path="/" component={MarketCapContainer}/>
          <Route exact path="/trending" component={TrendingContainer}/>

          <FooterContainer />
          
      </Router>
    </Provider>
  );
}

export default App;
