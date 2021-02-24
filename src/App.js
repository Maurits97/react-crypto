import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter as HashRouter, Route, Switch} from 'react-router-dom'

import NavContainer from './components/NavContainer'
import FooterContainer from './components/FooterContainer'
import TrendingContainer from './components/TrendingContainer';
import MarketCapContainer from './components/MarketCapContainer';
import DetailContainer from './components/DetailContainer';
import ScrollToTop from './components/ScrollToTop'
import NotFound from './components/NotFound'

function App() {
  return (
    <Provider store={store}>
      <HashRouter basename="/#"> 
          <ScrollToTop>      
              <NavContainer />

              <Switch> 
                <Route exact path="/" component={MarketCapContainer}/>
                <Route path="/trending" component={TrendingContainer}/>
                <Route path="/coin/:id" component={DetailContainer}/>
                <Route component={NotFound} />
              </Switch>

              <FooterContainer />
            </ScrollToTop>
      </HashRouter>
    </Provider>
  );
}

export default App;
