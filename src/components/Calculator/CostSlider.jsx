import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactSlider from 'rc-slider';
import store from '../../store';
import {setCost} from '../../actions/CalculatorActions.js';

require('rc-slider/assets/index.css');

const MIN_VALUE = 10000;
const MAX_VALUE = 20000000;
const STEP = 10000;

class CostSlider extends Component {

  _sliderChange(value) {
    store.dispatch(setCost(value));
  }

  _inputChange(event) {
    const targetValue = event.currentTarget.value.replace(/ /g,'');
    const val = parseInt(targetValue || 0, 10);
    if (!val || val < 0) return;
    store.dispatch(setCost(val));
  }

  _onBlur(event) {
    const targetValue = event.currentTarget.value.replace(/ /g,'');
    let val = parseInt(targetValue || 0, 10);

    if (!val || val < MIN_VALUE) {
      val = MIN_VALUE;
    } else if (val > MAX_VALUE) {
      val = MAX_VALUE;
    }
      
    store.dispatch(setCost(val));
  }

  render() {
    return (
      <div className="cc-slider">
        <label className="cc-slider__label">
          Стоимость недвижимости
          <input type="text"  
                 className="cc-slider__input cc-slider__input--rur"
                 value={this.props.cost.format()} 
                 onChange={this._inputChange}
                 onBlur={this._onBlur}/>руб
        </label>
        <ReactSlider
          value={this.props.cost}
          min={MIN_VALUE}
          max={MAX_VALUE}
          step={STEP}
          tipFormatter={null}
          onChange={this._sliderChange}/>
      </div>
    );
  }
}

const propsToState = (state) => {
  return {cost: state.calculatorState.cost}
}

export default connect(propsToState)(CostSlider);