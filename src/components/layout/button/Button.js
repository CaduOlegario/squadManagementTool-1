import React from "react";
import SourceButton from "@material-ui/core/Button";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import PropTypes from "prop-types";

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

/**
 * Button component colored with a gradient. Accepts the same props from [Material-ui button](https://material-ui.com/components/buttons/)
 */
const Button = (props) => {
    const theme = useTheme();

    return (
        <MuiThemeProvider theme={getMuiTheme(theme)}>
            <SourceButton
                variant="contained"
                {...props}/>
        </MuiThemeProvider>
    )
};

Button.propTypes = {
    /** HTML input types */
    type: PropTypes.string,
    /** Allow button to use full width of parent container */
    fullWidth: PropTypes.bool
};

export default Button;