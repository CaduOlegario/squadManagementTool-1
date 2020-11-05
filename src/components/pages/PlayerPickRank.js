import React from 'react';
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Avatar, createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import StringUtils from "utils/StringUtils";
import useTheme from "@material-ui/core/styles/useTheme";
import Tooltip from "@material-ui/core/Tooltip";
import PropTypes from "prop-types";
import Input from "../layout/input/Input";

const getMuiTheme = (theme) =>
    createMuiTheme({
        ...theme,
        overrides: {
            MuiAvatar: {
                colorDefault: {
                    backgroundColor: "white",
                    color: "black",
                    height: "14vh",
                    width: "14vh",
                }
            }
        }
    });

const styles = {
    paper: {
        background: "linear-gradient(to bottom, rgb(186,61,122), rgb(101,46,134))",
        height: "100%",
        position: "relative",
        borderRadius: "14px"
    },
    container: {
        height: "100%"
    },
    firstGrid: {
        borderRight: "2px solid #ffffff3b",
        height: "100%"
    },
    whiteCircle: {
        border: "2px solid #ffffff3b",
        borderRadius: "50%",
        width: "70px",
        height: "70px",
        position: "absolute",
        top: "50%",
        transform: "translate(-50%, -50%)",
        left: "50%"
    },
    title: {
        color: "white",
        textAlign: "center",
        paddingTop: "4vh",
        paddingBottom: "26px"
    },
    avatar: {
        transform: "translateX(-50%)",
        left: "45%",
        position: "relative",
        borderRadius: "50%",
    },
    mostPlayer: {
        "&:before": {
            borderRadius: "50%",
            top: "-8px",
            left: "-8px",
            right: "-8px",
            bottom: "-8px",
            content: '""',
            position: "absolute",
            boxShadow: "0 0 13px 3px #601679, inset 0 0 15px #521b65",
            backgroundImage: "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23FFFFFFDB' stroke-width='4' stroke-dasharray='8%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")"
        }
    },
    leastPlayer: {
        border: "4px solid rgb(160, 21, 21)",
        boxShadow: "0 0 16px #601679"
    },
    avatarName: {
        fontSize: "40px"
    },
    avatarContainer: {
        display: "flex",
        alignItems: "end"
    },
    percentage: {
        color: "white",
        fontWeight: "700",
        marginLeft: "25%",
        transform: "translateX(62%)",
        paddingRight: "26px",
        top: "30%",
        borderBottom: "1px solid white",
        position: "absolute",
    }
};

const renderPlayer = (player, classes) => {
    const {title, avatarClass, name, percentage} = player;

    return (
        <Grid item xs={6} className={classes.firstGrid}>
            <Typography variant="h1" className={classes.title}>
                {title}
            </Typography>
            <div className={classes.avatarContainer}>
                <div className={`${classes.avatar} ${avatarClass}`}>
                    <Tooltip title={name}>
                        <Avatar >
                            <Typography variant="h6" className={classes.avatarName}>
                                {StringUtils.getNameInitials(name)}
                            </Typography>
                        </Avatar>
                    </Tooltip>
                </div>
                <div className={classes.percentage} >
                    <Typography variant="h6" style={{lineHeight: "1.6rem"}}>
                        {percentage}%
                    </Typography>
                </div>
            </div>
        </Grid>
    )
};

const renderPlayers = (props) => {
    const {classes, data, teamCount} = props;

    if(!data.length) {
        return;
    }

    const playersOrderedByAppearances = data.sort((a, b) => a.appearances - b.appearances);

    const leastPickedPlayer = playersOrderedByAppearances[0];
    const leastPickedPlayerConfig = {
        percentage: parseInt((leastPickedPlayer.appearances * 100 ) / teamCount),
        name: leastPickedPlayer.name,
        title: "Least picked player",
        avatarClass: classes.leastPlayer,
    };

    const mostPickedPlayer = playersOrderedByAppearances[playersOrderedByAppearances.length-1];
    const mostPickedPlayerConfig = {
        percentage: parseInt((mostPickedPlayer.appearances * 100) / teamCount),
        name: mostPickedPlayer.name,
        title: "Most picked player",
        avatarClass: classes.mostPlayer,
    };

    return (
        <React.Fragment>
            {renderPlayer(mostPickedPlayerConfig, classes)}
            {renderPlayer(leastPickedPlayerConfig, classes)}
        </React.Fragment>
    )

}

const PlayerPickRank = (props) => {
    const {classes} = props;
    const theme = useTheme();

    return (
        <MuiThemeProvider theme={getMuiTheme(theme)}>
            <Paper elevation={1} className={classes.paper}>
                <div className={classes.whiteCircle} />

                <Grid container className={classes.container}>
                    {renderPlayers(props)}
                </Grid>
            </Paper>
        </MuiThemeProvider>
    )
};

Input.propTypes ={
    data: PropTypes.array,
    teamCount: PropTypes.number,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlayerPickRank);