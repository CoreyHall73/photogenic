import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Views/Home';
import FullWidthLayout from './Layouts/FullWidthLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <FullWidthLayout>
            <Home />
          </FullWidthLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
