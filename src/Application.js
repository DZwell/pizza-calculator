import * as React from 'react';

import { PizzaCalculator } from './PizzaCalculator';
import { WithPizzaCalculations } from './PizzaHOC';

export default class Application extends React.Component {
  PizzaContainer = WithPizzaCalculations(PizzaCalculator);

  render() {
    return (
      <div className="Application">
        <this.PizzaContainer />
      </div>
    );
  }
}
