import React from 'react';
import './MainSummary.css';
import SummaryOption from '../SummaryOption/SummaryOption';
import SummaryTotal from '../SummaryTotal/SummaryTotal';

class MainSummary extends React.Component {

  render() {
    return (
      <section className="main__summary"> 
        <h2>Your cart</h2>
        <SummaryOption 
          selected={this.props.selected}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
        <SummaryTotal 
          USCurrencyFormat={this.props.USCurrencyFormat}
          selected={this.props.selected}  
        />
      </section>
    )
  }
}

export default MainSummary