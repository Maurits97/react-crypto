import React, { Component } from 'react'

class CoinTextContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: 'Read more',
      readmore: 'closed'
    };
  }
  
  readmore(){
    const paragraph = document.getElementById('readmore-text');
    const arrow = document.getElementById('readmore-arrow');
    const fade = document.getElementById('readmore-fade');

    if (this.state.readmore === 'closed') {
      this.setState({
        text: 'Read less',
        readmore: 'open'
      })
      paragraph.classList.add('open');
      arrow.classList.add('arrow--less');
      fade.classList.add('fade--off');
    } else {
      this.setState({
        text: 'Read more',
        readmore: 'closed'
      })
      paragraph.classList.remove('open')
      arrow.classList.remove('arrow--less')
      fade.classList.remove('fade--off');
    }
  }

  render() {
    const coinData = this.props.coinData.cryptoOne;
    
    return (
      <div className="coin-text">
        <h2 className="coin-text__header">About {coinData.name}</h2>
        <p className="coin-text__paragraph" id="readmore-text" dangerouslySetInnerHTML={{ __html: coinData.description.en }}></p>
        <div className="coin-text__fade" id="readmore-fade"></div>
        <p className="coin-text__more" onClick={this.readmore.bind(this)}>{this.state.text}
          <svg className="arrow" id="readmore-arrow" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path fill="#345AE7" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
        </p>
      </div>
    )
  }
}

export default CoinTextContainer;