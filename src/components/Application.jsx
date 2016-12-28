import React, {Component} from 'react';
import CalculatorWidget from './Calculator';

class Application extends Component {
  render() {
    return (
      <div className="application">
        <div className="application__body">
          <CalculatorWidget/>
        </div>
      </div>
    );
  }
}

export default Application;