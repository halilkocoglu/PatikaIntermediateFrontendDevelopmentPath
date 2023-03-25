import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
//pages
import Users from './components/Users';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <Router>
      <div>
        <nav className='nav-bar'>
          <ul>
            <li>
              <NavLink  to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element= {<About />} />
          <Route path="/users" element= {<Users />}>
            <Route path=":id" element= {<User />} />
          </Route>
          <Route path="/" element= {<Home />} />
          <Route path="*" element= {<NoMatch />} />
          
        </Routes>
      </div>
    </Router>
  );
}


export default App;
