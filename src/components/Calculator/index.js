import React from 'react';

import SlidersContainer from './SlidersContainer.jsx';
import Summary from './Summary/SummaryContainer';

require('./styles/main.scss');

const CalculatorWidget = () => {
  return (
    <div className="cc-widget">
      <SlidersContainer/>
      <Summary/>
    </div>
  );
}

export default CalculatorWidget;