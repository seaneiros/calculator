import React from 'react';
import {
  connect
} from 'react-redux';

import Summary from './Summary.jsx';

const propsToState = (store) => {
  return {
    cost: store.calculatorState.cost,
    initialFee: store.calculatorState.initialFee,
    duration: store.calculatorState.duration
  }
}

export default connect(propsToState)(Summary);