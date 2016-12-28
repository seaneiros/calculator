import React from 'react';

import CostSlider from './CostSlider.jsx';
import FeeSlider from './FeeSlider.jsx';
import DurationSlider from './DurationSlider.jsx';

const SlidersContainer = () => (
  <div className="cc-sliders-container">
    <CostSlider/>
    <FeeSlider/>
    <DurationSlider/>
  </div>
);

export default SlidersContainer;