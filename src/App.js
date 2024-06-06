import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IPOList from './pages/IPOList';
import IPODetails from './pages/IPODetails';

function App() {
  return (
    <Router basename="/ipo-app-assignment">
      <div style={{ fontFamily: 'Sora, sans-serif' }}>
        <Routes>
          <Route path="/" element={<IPOList />} />
          <Route path="/ipo-details/:image/:id" element={<IPODetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

