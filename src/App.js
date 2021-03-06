import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import Footer from "components/layout/footer/Footer";
import Header from "components/layout/header/Header";
import theme from "theme/Theme";
import React from "react";
import Routes from "routes/Routes";
import Box from "@material-ui/core/Box";
import SnackbarProvider from 'react-simple-snackbar'

function App() {

    // Simulating logged user
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
                        <SnackbarProvider>
                            <div style={{width: "100%", padding: "40px"}}>
                                <Routes/>
                            </div>
                        </SnackbarProvider>
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
