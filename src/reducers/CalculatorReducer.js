import * as _ from '../constants/ActionTypes';

const DEFAULT_COST = 1000000;
const DEFAULT_INITIAL_FEE_PERCENT = .5;
const DEFAULT_DURATION = 10;

const initialState = {
  cost: DEFAULT_COST,
  initialFee: DEFAULT_INITIAL_FEE_PERCENT * DEFAULT_COST,
  duration: DEFAULT_DURATION
}

const CalculatorReducer = (state = initialState, action) => {

  switch (action.type) {
    case _.SET_COST:
      const currentFeePercent = state.cost ? Math.ceil(state.initialFee / state.cost * 100) / 100 : 0;
      const newState = Object.assign({},
        state, {
          cost       : action.value,
          initialFee : action.value * currentFeePercent
        }
      );
      return newState;
    
    case _.SET_INITIAL_FEE:
      return Object.assign({}, state, {initialFee: action.value});

    case _.SET_INITIAL_FEE_PERCENT:
      return Object.assign({}, state, {initialFee: (action.value * state.cost / 100)});

    case _.SET_DURATION:
      return Object.assign({}, state, {duration: action.value});

  }

  return state;
}

export default CalculatorReducer;