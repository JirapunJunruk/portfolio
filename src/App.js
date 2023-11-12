import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

//content
import Home from './content/Home';
import Contact from './content/Contact';
import Resume from './content/Resume';




import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="contact" element={<Contact/>}/>
          <Route exact path="resume" element={<Resume/>}/>
    
      </Routes>
      </div>
    </Router>
     
  );
}

export default App;
