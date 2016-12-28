import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Application from './components/Application.jsx';


/**
 * Number.prototype.format(n, x, s, c)
 *
 * @param integer n: length of decimal
 * @param integer x: length of whole part
 * @param mixed   s: sections delimiter
 * @param mixed   c: decimal delimiter
 */
Number.prototype.format = function(n = 0, x = 3, s = ' ', c = '.') {
  var n = this.toString().indexOf('.') > 0 ? n : 0,
      re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
      num = parseFloat(this.toFixed(Math.max(0, ~~n))),
      prefix = num < 0 ? '-' : '';
  num = num < 0 ? Math.abs(num).toString() : num.toString();

  return prefix + (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ' '));
};

ReactDOM.render(
  <Provider store={store}>
    <Application/>
  </Provider>,
  document.getElementById('content')
);