import './App.css';
import AccesContactPage from './Page/AccesContactPage';
import HomePage from './Page/HomePage';
import PresationsPage from './Page/PresationsPage';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
  <div className=''>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/presations' element={<PresationsPage />}></Route>
        <Route path='/acces-contact' element={<AccesContactPage />}></Route>
      </Routes>
    </Router>    
  </div>
  );
}

export default App;
