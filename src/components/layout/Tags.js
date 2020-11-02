import React from 'react';
import {createMuiTheme, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import ClearIcon from '@material-ui/icons/Clear';
import {ThemeProvider} from "@material-ui/styles";
import useTheme from "@material-ui/core/styles/useTheme";

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(169, 164, 164)"
        }
    },
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
            MuiAutocomplete: {
                inputRoot: {
                    height: "200px",
                    alignContent: "baseline"
                }
            }
        }
    });

const Tags = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <ThemeProvider theme={getMuiTheme(theme)}>
            <Box mb={0.5}>
                <Typography variant="subtitle1" >
                    {props.label}
                </Typography>
            </Box>
            <Autocomplete
                {...props}
                multiple
                className={classes.root}
                options={[]}
                freeSolo
                multiline
                rows={4}
                closeIcon={<React.Fragment />}
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                        <Chip
                            variant="outlined"
                            label={option}
                            color="primary"
                            clickable
                            deleteIcon={<ClearIcon />}
                            {...getTagProps({ index })} />
                    ))
                }
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        placeholder={props.value.length === 0 && props.placeholder}
                    />
                )}
            />
        </ThemeProvider>
    )
};

export default Tags;