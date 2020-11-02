import React, {useState} from 'react';
import {Typography, TextField, createMuiTheme} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import StringUtils from "../../utils/StringUtils";
import {ThemeProvider} from "@material-ui/styles";
import useTheme from "@material-ui/core/styles/useTheme";

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(169, 164, 164)"
        }
    },
    error: {
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary"
        }
    }
}));


const getMuiTheme = (theme) =>
    createMuiTheme({
        ...theme,
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
                // onFocus={() => setFocused(true)}
                fullWidth
                color="font"
                onBlur={() => checkError()} />
        </ThemeProvider>
    )
};

export default Input;