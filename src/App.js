import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import AboutMe from './pages/AboutMe/aboutMe';
import ForFun from './pages/forFun';
import Projects from './pages/Projects/projects';
import Resume from './pages/Resume/resume';
import HPEProject from './pages/Projects/ProjectPages/HPEProject';
import SPEKSProject from './pages/Projects/ProjectPages/SPEKSProject';
import ACMWProject from './pages/Projects/ProjectPages/ACMWProject';
import SecondLifeProject from './pages/Projects/ProjectPages/SecondLifeProject';

function App() {
  return (
    <div className="App">
      <Router>
            <Navbar />
            <Routes>
                <Route exact path='/my-personal-site' element={<Home />} />
                <Route path='/aboutMe' element={<AboutMe />} />
                <Route path='/forFun' element={<ForFun />} />
                <Route path='/projects' element={<Projects />} />
                  <Route path='/projects/automated-update-alert-system' element={<HPEProject />} />
                  <Route path='/projects/speks-project' element={<SPEKSProject />} />
                  <Route path='/projects/acm-w-site' element={<ACMWProject/>} />   
                  <Route path='/projects/second-life-project' element={<SecondLifeProject/>} />        
                <Route path='/resume' element={<Resume />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
