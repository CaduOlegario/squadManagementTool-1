import React from 'react';
import {createMuiTheme, TextField, Typography} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import ClearIcon from '@material-ui/icons/Clear';
import {ThemeProvider} from "@material-ui/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import PropTypes from "prop-types";
import Input from "../input/Input";

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

/** Input component that create tags. Accepts the same props from [Material-ui autocomplete free solo multiple values](https://material-ui.com/components/autocomplete/#multiple-values) */
const Tags = (props) => {
    const theme = useTheme();
    return (
        <ThemeProvider theme={getMuiTheme(theme)}>
            <Box mb={0.5}>
                <Typography variant="subtitle1">
                    {props.label}
                </Typography>
            </Box>
            <Autocomplete
                {...props}
                multiple
                options={[]}
                freeSolo
                rows={4}
                closeIcon={<React.Fragment/>}
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                        <Chip
                            label={option}
                            color="primary"
                            size="small"
                            clickable
                            deleteIcon={<ClearIcon/>}
                            {...getTagProps({index})} />
                    ))
                }
                renderInput={(params) => (
                    <TextField
                        {...params}
                        color="secondary"
                        variant="outlined"
                        placeholder={props.placeholder}
                    />
                )}
            />
        </ThemeProvider>
    )
};


Input.propTypes = {
    /** Input's label */
    label: PropTypes.string.isRequired,
    /** Input's placeholder */
    placeholder: PropTypes.string,
};

export default Tags;