import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//import images
import searchIcon from '../../img/search_icon.svg'

class AutoCompleteText extends Component {
  constructor(props){
    super(props)
    this.state = {
      suggestions: [],
    };
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.searchClick()
    }
  }

  searchClick() {
    const { suggestions } = this.state;
    if(suggestions.length === 0) {
      return null
    } else {
      const id = suggestions[0].id
      window.location = `#/coin/${id}`;
    }
  }

  onTextChanged = (e) => {
    const { items } = this.props;
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = items.sort().filter(v => regex.test(v.id));
    }
    this.setState(() => ({ suggestions }))
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if(suggestions.length === 0) {
      return null
    }
    return (
      <ul className="search__suggestions">
        {suggestions.map((item) => <Link to={`/coin/${item.id}`} key={item.id} className="search__link">
          <li className="search__item">
            <img className="search__item__image" src={item.image} alt="coin-logo"/>
            <p className="search__item__name">{item.name}</p>
            <p className="search__item__symbol">{item.symbol.toUpperCase()}</p>
          </li></Link>)}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <div className="search">
          <input className="search__input" placeholder="Search 250 Crypto Currencies..." type="text" onChange={this.onTextChanged} onKeyDown={this.handleKeyDown}></input>
          <button className="search__button" onClick={this.searchClick.bind(this)}>
            <img className="search__icon" src={searchIcon} alt="search icon"/>
          </button>
          {this.renderSuggestions()}
        </div>
      </div>
    )
  }
    
}

export default AutoCompleteText