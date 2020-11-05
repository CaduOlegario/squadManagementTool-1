import React from 'react';
import {AppBar, Avatar, createMuiTheme, Grid, MuiThemeProvider, Toolbar, Typography} from "@material-ui/core";
import StringUtils from "utils/StringUtils";
import useTheme from "@material-ui/core/styles/useTheme";
import PropTypes from "prop-types";

const getMuiTheme = (theme) =>
    createMuiTheme({
        ...theme,
        overrides: {
            MuiAppBar: {
                colorPrimary: {
                    background: "linear-gradient(to right, " + theme.palette.primary.main + ", " + theme.palette.primary.dark + ")"
                }
            },
            MuiAvatar: {
                colorDefault: {
                    color: "black",
                    backgroundColor: "white"
                }
            }
        }
    });

/**
 * Header component that displays the application logo, name, the logged user and it's initials
 */
const Header = ({username}) => {
    return (
        <MuiThemeProvider theme={getMuiTheme(useTheme())}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container spacing={1} alignItems="center" wrap="nowrap">
                        <Grid item>
                            <Avatar alt="Venturus Logo" src="/images/venturus_logo.png"/>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" noWrap>
                                Squad Management Tool
                            </Typography>
                        </Grid>
                        <Grid item xs={12}></Grid>
                        <Grid item>
                            <Typography variant="h6" noWrap>
                                {username}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Avatar>
                                <Typography variant="h6">
                                    {StringUtils.getNameInitials(username)}
                                </Typography>
                            </Avatar>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    )
};

Header.propTypes = {
    /** Name of the logged user */
    username: PropTypes.string.isRequired
};

export default Header;