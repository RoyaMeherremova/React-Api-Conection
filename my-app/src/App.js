import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/layout/Navigation';
import Contact from './pages/Contact';
import About from './pages/About';
import Employees from './pages/Employees';

function App() {
  return (
    <Router>
      <div className='app'>
        <header>
          <Navigation />
        </header>
        <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/employee" element={<Employees/>}/>



        </Routes>
      </div>
      <footer>
      </footer>
    </Router>


  );
}

export default App;
