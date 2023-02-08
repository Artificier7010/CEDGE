import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import { useEffect, useState } from 'react';
import Privacy from './Pages/Privacypage/Privacy';
import Terms from './Pages/Termspage/Terms';
import Register from './Pages/Registerpage/Register';

function App() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  return (
    <Router basename='/CEDGE'>
      <Routes>
        <Route path='/' element={<Homepage windowSize={windowSize} />} />
        <Route path='/register' element={<Register windowSize={windowSize} />} />
        <Route path='/Privacy' element={<Privacy windowSize={windowSize} />} />
        <Route path='/Terms' element={<Terms windowSize={windowSize} />} />
      </Routes>
    </Router>
  );
}

export default App;
