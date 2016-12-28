import * as _ from '../constants/ActionTypes';

export function setCost(value) {
  return {
    type: _.SET_COST,
    value
  }
}

export function setInitialFee(value) {
  return {
    type: _.SET_INITIAL_FEE,
    value
  }
}

export function setInitialFeePercent(value) {
  return {
    type: _.SET_INITIAL_FEE_PERCENT,
    value
  }
}

export function setDuration(value) {
  return {
    type: _.SET_DURATION,
    value
  }
}