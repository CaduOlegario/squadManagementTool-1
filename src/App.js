import './styles/App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import theme from "./Theme";
import React from "react";
import NewPage from "./components/pages/NewPage";

function App() {
  return (
  <Router>
    <ThemeProvider theme={theme}>
      <Header/>
      <div>
        <Switch>
          <Route exact path='/' component={NewPage} />
            <Route path='/about' component={NewPage} />
        </Switch>
      </div>
      <Footer/>
    </ThemeProvider>
  </Router>
  );
}

export default App;
