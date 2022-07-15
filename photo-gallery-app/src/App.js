import './App.css';
import { Routes, Route, useNavigate, } from 'react-router-dom';
// import SearchForm from './components/SearchForm';
import Gallery from './components/Gallery';
// import apiKey from '../src/config';

function App() {
  const navigate = useNavigate();
  const handleReRoute = (value) =>{
    navigate(`/${value}`, {replace: true});
  }
  
  return (
    <Routes>
      <Route path= '/' element={<Gallery reRoute={handleReRoute} />} />
      <Route path= '/:search' element={<Gallery reRoute={handleReRoute} />} />
    </Routes>
   
    );
}

export default App;
