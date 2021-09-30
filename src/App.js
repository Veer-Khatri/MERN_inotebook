import './App.css';
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
//  Inside package.json i entered a thing both in script section to run both backend and frontend using concurrnetly library of npm 
// so we dont have to use to ternimal for that and to run that script we must enter "npm run both " because i named it both
function App() {
  const [DarkModeState, setDarkModeState] = useState(false)// NEVER USED tells wherther the dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      alert_type: type,

    })
    
    
    setTimeout(() => {
      setAlert(false)
    }, 2500);
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar title='Company name' about_link="About Us" DarkModeState={DarkModeState} />
          <Alert alert={alert} />
          <div className="container">
            <Switch>
              <Route exact path="/"><Home showAlert={showAlert} heading='Enter the text to analyze' /></Route>
              <Route exact path="/about"><About /></Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
