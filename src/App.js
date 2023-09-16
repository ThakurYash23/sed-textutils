//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);   // making alert an object

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils DarkMode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" abouttext="AboutUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className='container my-3'>
          <Routes>
            <Route exact path='/about' element = {
              <About key="about" mode={mode}/>
            }>
            </Route>
            <Route exact path='/' element = {
              <TextForm key="home" showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter,
              Remove ExtraSpaces" mode={mode}/>
            }>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
