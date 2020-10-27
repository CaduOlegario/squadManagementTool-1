import './styles/App.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import theme from "./Theme";
import React from "react";
import Routes from "./Routes";

function App() {

  const currentUser = {
    name: "John Doe"
  };

  return (
      <Router>
        <ThemeProvider theme={theme}>
          <Header username={currentUser.name}/>
          <div>
            <Routes />
          </div>
          <Footer/>
        </ThemeProvider>
      </Router>
  );
}

export default App;
