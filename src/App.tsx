import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavLayout from './Layouts/SideNavLayout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SideNavLayout>
                <h1>Test</h1>
            </SideNavLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;