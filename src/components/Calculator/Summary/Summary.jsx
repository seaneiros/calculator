import React from 'react';

require('./summary.scss');

const ANNUAL_RATE = .125;
const MONTH_RATE = ANNUAL_RATE / 12;
const MAGIC_MINIMAL = .4;

const Summary = (props) => {

  const {cost, initialFee, duration} = props;
  
  const creaditValue = cost - initialFee;

  const pow = Math.pow(1 + MONTH_RATE, duration * 12);
  const rate = (MONTH_RATE * pow) / (pow - 1);

  const monthPayValue = Math.ceil(rate * creaditValue);

  const data = [
    {
      title: 'Ежемесячный платеж',
      value: monthPayValue.format()
    },
    {
      title: 'Размер кредита',
      value: creaditValue.format()
    },
    {
      title: 'Минимальный доход',
      value: Math.ceil(monthPayValue / MAGIC_MINIMAL).format()
    },
  ]

  return (
    <div className="cc-summary">
      {data.map((i, idx) => (
        <div key={idx} className="cc-summary__item">
          <div className="cc-summary__item__title">{i.title}</div>
          <div className="cc-summary__item__value">{i.value} руб</div>
        </div>
      ))}
    </div>
  );

}

export default Summary;