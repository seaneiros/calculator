import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactSlider from 'rc-slider';
import store from '../../store';
import {setDuration} from '../../actions/CalculatorActions.js';

require('rc-slider/assets/index.css');

const MIN_VALUE = 0;
const MAX_VALUE = 30;
const STEP = 5;

const marks = {
  5:'5 лет',
  10:'10 лет',
  15:'15 лет',
  20:'20 лет',
  25:'25 лет'
}

class DurationSlider extends Component {

  _sliderChange(value) {
    store.dispatch(setDuration(value || 1));
  }

  _inputChange(event) {
    const targetValue = event.currentTarget.value;
    const val = parseInt(targetValue || 0, 10) || 1;
    if (!val || val < 0) return;
    store.dispatch(setDuration(val));
  }

  _onBlur(event) {
    const targetValue = event.currentTarget.value;
    let val = parseInt(targetValue || 0, 10) || 1;

    if (!val || val < 1) {
      val = 1;
    } else if (val > MAX_VALUE) {
      val = MAX_VALUE;
    }

    store.dispatch(setDuration(val));
  }

  render() {
    return (
      <div className="cc-slider">
        <label className="cc-slider__label">
          Срок
          <input type="text" 
                 className="cc-slider__input cc-slider__input--years"
                 min={MIN_VALUE} 
                 max={MAX_VALUE} 
                 step={STEP} 
                 value={this.props.duration} 
                 onChange={this._inputChange}
                 onBlur={this._onBlur}/>лет
        </label>
        <ReactSlider
          value={this.props.duration}
          min={MIN_VALUE}
          max={MAX_VALUE}
          step={STEP}
          tipFormatter={null}
          marks={marks}
          dots={true}
          onChange={this._sliderChange}/>
      </div>
    );
  }
}

const propsToState = (state) => {
  return {
    duration: state.calculatorState.duration
  }
}

export default connect(propsToState)(DurationSlider);