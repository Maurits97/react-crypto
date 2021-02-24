import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import cleeuwn from '../img/Cleeuwn.png'

class NotFound extends Component {
    render() {
        return (
          <div>
            <div className="main">
              <div className="error">
                <h1 className="error__message">Wrong page buddy!</h1>
                <p className="error__message--note">Please go back to the <Link to="/">homepage</Link></p>
                <img className="error__image" src={cleeuwn} alt="404 error"/>
              </div>
            </div>
          </div>
        )
    }
}

export default NotFound;