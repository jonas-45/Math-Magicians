import DisplayAnswer from './DisplayAnswer';
import DisplayCalculatorKeys from './DisplayCalculatorKeys';

function Calculator() {
  return (
    <div className="calculator-container">
      <DisplayAnswer />
      <DisplayCalculatorKeys />
    </div>
  );
}

export default Calculator;
