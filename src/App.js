import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import theme from "./Theme";
import React from "react";
import Routes from "./Routes";
import Box from "@material-ui/core/Box";

function App() {

  const currentUser = {
    name: "John Doe"
  };

  return (
      <Router>
        <ThemeProvider theme={theme}>
            <Box height="100vh" display="flex" flexDirection="column">
                <Box>
                    <Header username={currentUser.name}/>
                </Box>
                <Box flex={1} overflow="auto" style={{display: "flex", alignItems: "stretch"}}>
                    <div style={{width: "100%", padding: "40px"}}>
                        <Routes />
                    </div>
                </Box>
                <Box>
                    <Footer/>
                </Box>
            </Box>

        </ThemeProvider>
      </Router>
  );
}

export default App;
