import { Routes, Route } from 'react-router';
import Home from './routes/Home';
import CalculatorPage from './routes/CalculatorPage';
import Quote from './routes/Quote';
import NotMatch from './routes/NotMatch';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="quote" element={<Quote />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
