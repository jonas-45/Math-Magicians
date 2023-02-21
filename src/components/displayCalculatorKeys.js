function DisplayCalculatorKeys() {
  const symbols = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const calKeys = symbols.map((symbol) => <button type="button" key={symbol} className="cal-key">{symbol}</button>);
  return (
    <div className="keys-container">
      {calKeys}
    </div>
  );
}

export default DisplayCalculatorKeys;
