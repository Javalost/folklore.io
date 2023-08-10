import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import './App.css';
import DataTest from './Components/DataTest'; // Ensure the correct path
import FormTest from './Components/FormTest';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/datatest">Data Test</Link>
              <br></br>
              <Link to="/">Home</Link> 
              <br></br> 
              <Link to="/formtest">Form</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/datatest" element={<DataTest />} />
          <Route path="/" element={<h1>Welcome to the Main Page</h1>} /> 
          <Route path="/formtest" element={<FormTest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
