import React, { Component } from 'react';
import slugify from 'slugify';
import './FeatureItem.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class FeatureItem extends Component {
    render() {
        return(
          <fieldset className="feature" key={this.props.featureHash}>
            <legend className="feature__name">
              <h3>{this.props.feature}</h3>
            </legend>
            {this.props.options}
          </fieldset>
        )
      }
    }

export default FeatureItem;