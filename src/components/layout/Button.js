import React from "react";
import SourceButton from "@material-ui/core/Button";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";


const getMuiTheme = (theme) =>
    createMuiTheme({
        ...theme,
        overrides: {
            MuiButton: {
                root: {
                    padding: "9px 0",
                    borderRadius: "4px",
                    background: "linear-gradient(to bottom, rgb(154,53,125), rgb(121,44,127))"
                },
                label: {
                    color: "white",
                }
            }
        }
    });


const Button = (props) => {
    const theme = useTheme();

    return (
        <MuiThemeProvider theme={getMuiTheme(theme)}>
            <SourceButton {...props}/>
        </MuiThemeProvider>
    )
};

export default Button;