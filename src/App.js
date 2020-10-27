import './styles/App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from "./header/Header";
import About from "./header/About";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <div>
        <h2>Welcome to React Router Tutorial</h2>
        <nav>
          <ul>
            <li><Link to={'/'} > Home </Link></li>
            <li><Link to={'/contact'} >Contact</Link></li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path='/' component={Footer} />
          <Route path='/about' component={Footer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
