import React, { Component } from 'react';
import './MainSummary.css';
import SummaryOption from '../SummaryOption/SummaryOption';
import SummaryTotal from '../SummaryTotal/SummaryTotal';

class MainSummary extends Component {
    render() {
      return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <SummaryOption 
                selected={this.props.featObj}
                USCurrencyFormat={this.props.USCurrencyFormat}
            />
            <SummaryTotal 
                sumTotal={this.props.mainTotal}
                USCurrencyFormat={this.props.USCurrencyFormat}
                />
        </section>
      );
    }
  }

export default MainSummary;