import React from 'react';
import {createMuiTheme, TextField, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {ThemeProvider} from "@material-ui/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import PropTypes from "prop-types";

const getMuiTheme = (theme) =>
    createMuiTheme({
        ...theme,
        palette: {
            ...theme.palette,
            secondary: {
                main: 'rgb(0, 0, 0)'
            }
        },
        overrides: {
            MuiInputBase: {
                root: {
                    fontSize: "0.8rem"
                },
            },
            MuiOutlinedInput: {
                input: {
                    padding: "10px 14px"
                }
            },
        }
    });

/** Input component aligned with prototype styling.  Accepts the same props from [Material-ui text field](https://material-ui.com/components/text-fields/) */
const Input = (props) => {
    const {label, ...others} = props;
    const theme = useTheme();

    return (
        <ThemeProvider theme={getMuiTheme(theme)}>
            <Box mb={0.5}>
                <Typography variant="subtitle1"
                            color={props.error ? "primary" : undefined} >
                    {label}
                </Typography>
            </Box>
            <TextField
                {...others}
                label=""
                variant="outlined"
                color="secondary"
                fullWidth
            />
        </ThemeProvider>
    )
};

Input.propTypes ={
    /** Input title name */
    label: PropTypes.string.isRequired,
    /** Placeholder for the input */
    placeholder: PropTypes.string,
    /** Allow input to accept multiple lines */
    multiline: PropTypes.bool,
    /** Define the number of lines in the input in case its a multiline input */
    rows: PropTypes.number,
    /** Define if the component should change it's color to demonstrate an error */
    error: PropTypes.bool,
};

export default Input;