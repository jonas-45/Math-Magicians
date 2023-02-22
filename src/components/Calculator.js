import React, { useState } from 'react';
import DisplayCalculatorKeys from './DisplayCalculatorKeys';
import calculate from '../logic/calculate';
import DisplayAnswer from './DisplayAnswer';

function Calculator() {
  const [calobj, setCalculation] = useState({ total: '0', next: '0', operation: '' });

  const clickHandler = (buttonName) => {
    setCalculation(calculate(calobj, buttonName));
  };
  return (
    <div className="calculator-container">
      <DisplayAnswer data={calobj} />
      <DisplayCalculatorKeys performCalculation={clickHandler} />
    </div>
  );
}

export default Calculator;
