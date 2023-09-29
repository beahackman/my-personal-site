import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import AboutMe from './pages/aboutMe';
import ForFun from './pages/forFun';
import Projects from './pages/projects';
import Resume from './pages/resume';


function App() {
  return (
    <div className="App">
      <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/aboutMe' element={<AboutMe />} />
                <Route path='/forFun' element={<ForFun />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
