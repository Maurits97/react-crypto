import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter as HashRouter, Route, Switch} from 'react-router-dom'

import NavContainer from './components/NavContainer'
import FooterContainer from './components/FooterContainer'
import TrendingContainer from './components/trending/TrendingContainer';
import MarketCapContainer from './components/marketCap/MarketCapContainer';
import DetailContainer from './components/detail/DetailContainer';
import ScrollToTop from './components/ScrollToTop'
import NotFound from './components/NotFound'

function App() {
  return (
    <Provider store={store}>
      {/* Using HashRouter so there are no errors when reloading a route/page in production.*/} 
      <HashRouter basename="/#">
          {/* ScrollToTop: when page changes (routes) page will be scrolled to the top */} 
          <ScrollToTop>      
              <NavContainer />
              {/* Using switch for "404 page" when url doesnt excist. */}
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
