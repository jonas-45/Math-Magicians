import PropTypes from 'prop-types';

function DisplayCalculatorKeys({ performCalculation }) {
  const symbols = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const calKeys = symbols.map((symbol) => <button onClick={() => performCalculation(symbol)} type="button" key={symbol} className="cal-key">{symbol}</button>);
  return (
    <div className="keys-container">
      {calKeys}
    </div>
  );
}
DisplayCalculatorKeys.propTypes = { performCalculation: PropTypes.func.isRequired };

export default DisplayCalculatorKeys;
