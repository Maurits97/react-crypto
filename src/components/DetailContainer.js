import React, { Component } from 'react';

//component imports

class DetailContainer extends Component {
    render() {
        return (
          <div>
            <div className="main">
              <div className="coin">
                <div className="breadcrumbs">
                  <h1>Hallo</h1>
                </div>
                <div className="header">
                  <div className="header__main"></div>
                  <div className="header__aside"></div>
                </div>
                <div className="coin__info"></div>
                <div className="coin__text"></div>
              </div>
            </div>
          </div>
        )
    }
}

export default DetailContainer;