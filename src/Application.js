import * as React from 'react';

import { PizzaCalculator } from './PizzaCalculator';
import { WithPizzaCalculation } from './PizzaRender';

export default class Application extends React.Component {


  render() {
    return (
      <div className="Application">
        <WithPizzaCalculation render={(props) => <PizzaCalculator {...props}/>} />
      </div>
    );
  }
}
