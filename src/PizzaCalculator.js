import * as React from 'react';
import Title from './Title';
import Input from './Input';
import Result from './Result';

export class PizzaCalculator extends React.Component {
  render() {
    const { numberOfPeople, numberOfPizzas, reset, slicesPerPerson, updateNumberOfPeople, updateSlicesPerPerson } = this.props;
    return (
      <div>
        <Title />
        <Input
          label="Number of Guests"
          type="number"
          min={0}
          value={numberOfPeople}
          onChange={updateNumberOfPeople}
        />
        <Input
          label="Slices Per Person"
          type="number"
          min={0}
          value={slicesPerPerson}
          onChange={updateSlicesPerPerson}
        />
        <Result amount={numberOfPizzas} />
        <button className="full-width" onClick={reset}>
          Reset
      </button>
      </div>
    )
  }
}