import PropTypes from 'prop-types';

function CalculatorKey({ symbol }) {
  return (
    <button type="button">{symbol}</button>
  );
}

CalculatorKey.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default CalculatorKey;
