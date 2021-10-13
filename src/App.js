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
import Login from './components/Login';
import Signup from './components/Signup';
//  Inside package.json i entered a thing both in script section to run both backend and frontend using concurrnetly library of npm 
// so we dont have to use to ternimal for that and to run that script we must enter "npm run both " because i named it both
function App() {
  const [alert, setAlert] = useState(false);
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
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Switch>
              <Route exact path="/"><Home showAlert={showAlert}/></Route>
              <Route exact path="/about"><About /></Route>
              <Route exact path="/login"><Login /></Route>
              <Route exact path="/signup"><Signup /></Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
