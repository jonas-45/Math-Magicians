import { Routes, Route } from 'react-router';
import Home from './routes/Home';
import CalculatorPage from './routes/CalculatorPage';
import Quote from './routes/Quote';
import NotMatch from './routes/NotMatch';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='calculator' element={<CalculatorPage />} />
      <Route path='quote' element={<Quote />} />
      <Route path='*' element={<NotMatch />} />
    </Routes>
  );
}

export default App;
