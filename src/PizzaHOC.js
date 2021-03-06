import React, { Component } from 'react';

import calculatePizzasNeeded from './lib/calculate-pizzas-needed';

const initialState = {
  numberOfPeople: 10,
  slicesPerPerson: 2,
};

export const WithPizzaCalculations = WrappedComponent => class extends Component {
  static displayName = `WithPizzaCalculations(${ WithPizzaCalculations.displayName || WithPizzaCalculations.name })`;
  state = { ...initialState };

  updateNumberOfPeople = event => {
    const numberOfPeople = parseInt(event.target.value, 10);
    this.setState({ numberOfPeople });
  };

  updateSlicesPerPerson = event => {
    const slicesPerPerson = parseInt(event.target.value, 10);
    this.setState({ slicesPerPerson });
  };

  reset = event => {
    this.setState({ ...initialState });
  };

  render() {
    const { numberOfPeople, slicesPerPerson } = this.state;
    const numberOfPizzas = calculatePizzasNeeded(
      numberOfPeople,
      slicesPerPerson,
    );
    const props = {
      numberOfPeople,
      numberOfPizzas,
      reset: this.reset,
      slicesPerPerson,
      updateNumberOfPeople: this.updateNumberOfPeople,
      updateSlicesPerPerson: this.updateSlicesPerPerson
    };

    return <WrappedComponent {...props} />
  }
}