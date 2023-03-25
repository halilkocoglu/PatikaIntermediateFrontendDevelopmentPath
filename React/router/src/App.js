import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
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
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
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
