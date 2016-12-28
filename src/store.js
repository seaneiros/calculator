import { createStore, combineReducers } from 'redux';

import CalculatorReducer from './reducers/CalculatorReducer';

const reducers = combineReducers({
  calculatorState: CalculatorReducer
});

const store = createStore(reducers);

export default store;