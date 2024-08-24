import React, { useState } from 'react';
import Navbar from './components/navbar'
import Textutils from './components/textutils'
import About from './components/about'
import Alert from './components/alert'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {

  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode = () =>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }else{
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has been enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar heading="Navbar" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Textutils mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
