import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        background: "#d0d0d0",
        color: "#444242",
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position="sticky">
            <Box p={1}>
                <Typography variant="body1" align="center">
                    2020 - All rights reserved
                </Typography>
            </Box>
        </AppBar>
    )
};

export default Footer;