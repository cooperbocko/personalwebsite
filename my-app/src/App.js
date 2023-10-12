import {Route, Routes} from 'react-router-dom';

import './App.css';

import Home from './Components/Home';
import Projects from './Components/Projects';
import About from './Components/About';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
  );
}

export default App;
