import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import './App.css'
import JobList from './components/Joblist';

function App() {
  return (
 <Router>
    <Routes>
       <Route path="/" element={<JobList />} />
    </Routes>
    </Router>
  );
}

export default App;
