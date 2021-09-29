import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
//  Inside package.json i entered a thing both in script section to run both backend and frontend using concurrnetly library of npm 
// so we dont have to use to ternimal for that and to run that script we must enter "npm run both " because i named it both
function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/about"><About /></Route>
          </Switch>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
