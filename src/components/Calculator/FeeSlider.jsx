import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactSlider from 'rc-slider';
import store from '../../store';
import {setInitialFee, setInitialFeePercent} from '../../actions/CalculatorActions.js';

require('rc-slider/assets/index.css');

const MIN_VALUE = 15;
const MAX_VALUE = 100;
const STEP = 10000;

class FeeSlider extends Component {

  constructor(props) {
    super(props);
    this._onValueBlur = this._onValueBlur.bind(this);
  }
  

  _sliderChange(value) {
    store.dispatch(setInitialFee(value));
  }

  _inputValueChange(event) {
    const targetValue = event.currentTarget.value.replace(/ /g,'');
    const val = parseInt(targetValue || 0, 10);
    if (!val || val < 0) return;
    store.dispatch(setInitialFee(val));
  }

  _inputPercentChange(event) {
    const targetValue = event.currentTarget.value;
    const val = parseInt(targetValue || 0, 10);
    if (!val || val < 0) return;
    store.dispatch(setInitialFeePercent(val));
  }

  _onPercentBlur(event) {
    const targetValue = event.currentTarget.value;
    let val = parseInt(targetValue || 0, 10);
    
    if (!val || val < MIN_VALUE) {
      val = MIN_VALUE;
    } else if (val > MAX_VALUE) {
      val = MAX_VALUE;
    }

    store.dispatch(setInitialFeePercent(val));
  }

  _onValueBlur(event) {
    const targetValue = event.currentTarget.value.replace(/ /g,'');
    const minVal = MIN_VALUE * this.props.cost / 100;
    const maxVal = MAX_VALUE * this.props.cost / 100;
    let val = parseInt(targetValue || 0, 10);

    
    if (!val || val < minVal) {
      val = minVal;
    } else if (val > maxVal) {
      val = maxVal;
    }

    store.dispatch(setInitialFee(val));
  }

  render() {
    const percentValue = this.props.cost ? Math.ceil(this.props.initialFee / this.props.cost * 100) : 0;

    return (
      <div className="cc-slider">
        <label className="cc-slider__label">
          Первоначальный взнос
          <input type="text"
                 className="cc-slider__input cc-slider__input--perc" 
                 min={MIN_VALUE} 
                 max={MAX_VALUE} 
                 step={1} 
                 value={percentValue} 
                 onChange={this._inputPercentChange}
                 onBlur={this._onPercentBlur}/>
          <div className="cc-slider__input__inner-mark">%</div>
          <input type="text" 
                 className="cc-slider__input cc-slider__input--rur"
                 value={this.props.initialFee.format()} 
                 onChange={this._inputValueChange}
                 onBlur={this._onValueBlur}/>руб
        </label>
        <ReactSlider
          value={this.props.initialFee}
          min={MIN_VALUE * this.props.cost / 100}
          max={MAX_VALUE * this.props.cost / 100}
          step={Math.ceil(this.props.cost / 100)}
          tipFormatter={null}
          onChange={this._sliderChange}/>
      </div>
    );
  }
}

const propsToState = (state) => {
  return {
    cost: state.calculatorState.cost,
    initialFee: state.calculatorState.initialFee
  }
}

export default connect(propsToState)(FeeSlider);