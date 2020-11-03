import React from 'react';
import {createMuiTheme, TextField, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {ThemeProvider} from "@material-ui/styles";
import useTheme from "@material-ui/core/styles/useTheme";

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

const Input = (props) => {
    const {error} = props;
    const theme = useTheme();

    return (
        <ThemeProvider theme={getMuiTheme(theme)}>
            <Box mb={0.5}>
                <Typography variant="subtitle1"
                            color={error ? "primary" : ""} >
                    {props.label}
                </Typography>
            </Box>
            <TextField
                {...props}
                label=""
                variant="outlined"
                color="secondary"
                fullWidth
            />
        </ThemeProvider>
    )
};

export default Input;