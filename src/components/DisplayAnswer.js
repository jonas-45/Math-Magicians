import '../styles/index.css';
import PropTypes from 'prop-types';

function DisplayAnswer({ data }) {
  const { total, next } = data;
  const displayVal = (value1, value2) => {
    if (value2 !== null || value2 === '') {
      return value2;
    }
    return value1;
  };
  return (
    <div className="answer-display">
      { displayVal(total, next) }
    </div>
  );
}

DisplayAnswer.propTypes = {
  data: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
  }).isRequired,
};

export default DisplayAnswer;
