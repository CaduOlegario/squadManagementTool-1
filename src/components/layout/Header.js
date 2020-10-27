import React from 'react';
import {AppBar, Toolbar, Grid, Avatar, Typography} from "@material-ui/core";

const Header = () => {
    return (
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
                            John Doe
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar>JD</Avatar>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
};

export default Header;