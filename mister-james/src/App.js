import './App.css';
import AccesContactPage from './Page/AccesContactPage';
import HomePage from './Page/HomePage';
import PrestationsPage from './Page/PrestationsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {  
  return (
  <div className=''>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/prestations' element={<PrestationsPage />}></Route>
        <Route path='/acces-contact' element={<AccesContactPage />}></Route>
      </Routes>
    </Router>    
  </div>
  );
}

export default App;
