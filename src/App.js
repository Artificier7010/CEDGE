import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Signup from './Pages/Signuppage/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
