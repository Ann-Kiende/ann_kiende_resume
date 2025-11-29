import './App.css';

import Home from './components/Home.jsx';
import About from './components/About.jsx';

import { BrowserRouter, Routes, Route, Link, Links } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
