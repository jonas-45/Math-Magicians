import DisplayAnswer from './DisplayAnswer.js';
import DisplayCalculatorKeys from './DisplayCalculatorKeys.js';

function Calculator() {
  return (
    <div className="calculator-container">
      <DisplayAnswer />
      <DisplayCalculatorKeys />
    </div>
  );
}

export default Calculator;
