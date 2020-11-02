import React, {useState} from 'react';
import {Typography, TextField, createMuiTheme} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import StringUtils from "../../utils/StringUtils";
import {ThemeProvider} from "@material-ui/styles";
import useTheme from "@material-ui/core/styles/useTheme";

const useStyles = makeStyles(theme => ({
    root: {

    },
}));


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
    const {required, validate, value} = props;
    const [error, setError] = useState(false);
    const classes = useStyles();
    const theme = useTheme();

    const checkError = () => {
        if(required && !value) {
            setError(true);
            return;
        }

        switch (validate) {
            case 'website':
                if(!StringUtils.validateUrl(value)) {
                    setError(true);
                    return;
                }
                break;
            default:
                break;
        }

        setError(false);
    };

    return (
        <ThemeProvider theme={getMuiTheme(theme)}>
            <Box mb={0.5}>
                <Typography variant="subtitle1"
                    color={error ? "primary" : ""} >
                    {props.label}
                </Typography>
            </Box>
            <TextField
                error={error}
                className={classes.root}
                {...props}
                label=""
                variant="outlined"
                color="secondary"
                fullWidth
                onBlur={() => checkError()} />
        </ThemeProvider>
    )
};

export default Input;