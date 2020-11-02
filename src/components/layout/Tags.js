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
            MuiAutocomplete: {
                inputRoot: {
                    height: "114px",
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
                            label={option}
                            color="primary"
                            size="small"
                            clickable
                            deleteIcon={<ClearIcon />}
                            {...getTagProps({ index })} />
                    ))
                }
                renderInput={(params) => (
                    <TextField
                        {...params}
                        color="secondary"
                        variant="outlined"
                        placeholder={props.value.length === 0 && props.placeholder}
                    />
                )}
            />
        </ThemeProvider>
    )
};

export default Tags;