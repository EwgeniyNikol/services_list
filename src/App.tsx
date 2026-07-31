import { Routes, Route } from 'react-router-dom';
import ServiceListPage from './pages/ServiceListPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import './style.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<ServiceListPage />} />
        <Route path="/:id/details" element={<ServiceDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;