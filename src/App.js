import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter as HashRouter, Route} from 'react-router-dom'

import NavContainer from './components/NavContainer'
import FooterContainer from './components/FooterContainer'
import TrendingContainer from './components/TrendingContainer';
import MarketCapContainer from './components/MarketCapContainer';
import DetailContainer from './components/DetailContainer';
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Provider store={store}>
      <HashRouter basename="/#">
          <ScrollToTop>
            <NavContainer />

            <Route exact path="/" component={MarketCapContainer}/>
            <Route exact path="/trending" component={TrendingContainer}/>
            <Route exact path="/coin/:id" component={DetailContainer}/>

            <FooterContainer />
          </ScrollToTop>
          
      </HashRouter>
    </Provider>
  );
}

export default App;
