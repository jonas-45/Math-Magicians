import DisplayAnswer from './displayAnswer';
import DisplayCalculatorKeys from './displayCalculatorKeys';

function Calculator() {
  return (
    <div className="calculator-container">
      <DisplayAnswer />
      <DisplayCalculatorKeys />
    </div>
  );
}

export default Calculator;
