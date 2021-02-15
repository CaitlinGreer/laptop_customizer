import React from 'react';
import Feature from '../Feature/Feature'
import './MainForm.css'


class MainForm extends React.Component {
  render() {
    return (
      <form className="main__form"> 
        <h2>Customize your laptop</h2>
        <Feature
          features={this.props.features}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
      </form>
    );
  }
}

export default MainForm