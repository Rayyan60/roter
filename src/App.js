import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }

 const toggleMode =() => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ='#090e58';
      showAlert("dark mode is enabled","success");
      setInterval(() => {
        document.title = 'ROTER - Dark Mode';
      }, 2000);
      setInterval(() => {
        document.title = 'ROTER - Loading Mode';
      }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white'
      showAlert("light mode is enabled","success");
      setInterval(() => {
        document.title = 'ROTER - Light Mode';
      }, 2000);
      setInterval(() => {
        document.title = 'ROTER - Loading Mode';
      }, 1500);
    }
  }

  return (
    <>
    <Router>
        <Navbar title="ROTER" About="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter The text to Analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router>
        </>
  );
}

export default App;
