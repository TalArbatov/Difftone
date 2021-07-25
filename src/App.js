import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Questionnaire from './components/CreateQuestionnaire/Questionnaire';
import Display from './components/DisplayQuestionnaire/Display';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  return (
    <Router>
      <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Difftone Questionnaire Assignment
          </Typography>
          <div className="menu-buttons">
            <Button color="inherit"><Link className="link" to='/create'>Create</Link></Button>
            <Button color="inherit"><Link className="link" to='/display'>Display</Link></Button>
          </div>
        </Toolbar>
      </AppBar>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create Questionnaire</Link>
            </li>
            <li>
              <Link to="/display">Display Questionnaire</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/create">
            <Questionnaire />
          </Route>
          <Route path="/display">
            <Display />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
