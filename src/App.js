import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
    <Router>
      <nav>
        <Link to = "/">Home</Link>
        <Link to = "/profile">Profile</Link>
      </nav>
      <Switch>
          <Route path = {["/", "/home"]} exact>
              <Home ></Home>
          </Route>
          <Route path = "/profile">
              <Profile></Profile>
          </Route>
      </Switch>
    </Router> 
  );
}

export default App;
