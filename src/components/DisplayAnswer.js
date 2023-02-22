import '../index.css';
import PropTypes from 'prop-types';

function DisplayAnswer(props) {
  console.log('dataType: ', props.data);
  const { total, next } = props.data;
  console.log('newval1: ', total, ' newval2: ', next);
  const displayVal = (value1, value2) => {
    console.log('val1: ', value1, ' val2: ', value2);

    if (value2 !== null || value2 === '') {
      console.log('displaying value 2');
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
