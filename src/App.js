import { useState } from 'react';
import './App.css';
import Alert from './component/Alert';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');  //tells whether the dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>       //show alert is a function use to show the alert messages
  {
    setAlert({                         //alert is a object
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.classList.add('bg-' + cls);
      // showAlert("Dark mode has been enabled", "Success");
      // setInterval(() => {
      //   document.title ='TextEditor - Dark mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title ='TextEditor - Dark mode is enabled';
      // }, 1500);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("Light mode has been enabled", "Success");
      // document.title ='TextEditor - Light mode';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextEditor" mode={mode} toggleMode={toggleMode} aboutText="About"/>

        <strong><Alert alert={alert} /></strong>

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>

            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Text Editor - word counter, character counter, Remove extra spaces" mode={mode} />
            </Route>
            
          </Switch>
        </div>
        
      </Router>
    </>
  );
}

export default App;
