import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
