import React from 'react';
import {AppBar, Avatar, createMuiTheme, Grid, MuiThemeProvider, Toolbar, Typography} from "@material-ui/core";
import StringUtils from "utils/StringUtils";
import useTheme from "@material-ui/core/styles/useTheme";

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

export default Header;