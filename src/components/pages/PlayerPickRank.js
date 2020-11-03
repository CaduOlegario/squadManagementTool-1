import React from 'react';
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Avatar, createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import StringUtils from "../../utils/StringUtils";
import useTheme from "@material-ui/core/styles/useTheme";

const getMuiTheme = (theme) =>
    createMuiTheme({
        ...theme,
        overrides: {
            MuiAvatar: {
                colorDefault: {
                    backgroundColor: "white",
                    color: "black",
                    height: "130px",
                    width: "130px",
                }
            }
        }
    });

const styles = {
    paper: {
        background: "linear-gradient(to bottom, rgb(186,61,122), rgb(101,46,134))",
        height: "100%",
        position: "relative",
        borderRadius: "10px"
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
        paddingTop: "10.5%",
        paddingBottom: "26px"
    },
    avatar: {
        transform: "translateX(59%)",
        height: "130px",
        width: "130px",
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
        marginLeft: "32%",
        paddingRight: "26px",
        top: "30%",
        borderBottom: "1px solid white",
        position: "absolute",
    }
};

const PlayerPickRank = (props) => {
    const {classes, data} = props;

    // const mostPickerPlayer = data.reduce((min, item) => Math.min(min, item.appearences), data[0].appearences);
    // const leastPickedPlayer = data.reduce((max, item) => Math.max(max, item.appearences), data[0].appearences);

    const renderPlayer = (percentage, name, type) => {
        return (
            <Grid item xs={6} className={classes.firstGrid}>
                <Typography variant="h1" className={classes.title}>
                    {type == "mostPlayer" ? "Most picked player" : "Least picked player"}
                </Typography>
                <div className={classes.avatarContainer}>
                    <div className={`${classes.avatar} ${ classes[type]}`}>
                        <Avatar >
                            <Typography variant="h6" className={classes.avatarName}>
                                {StringUtils.getNameInitials(name)}
                            </Typography>
                        </Avatar>
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

    return (
        <MuiThemeProvider theme={getMuiTheme(useTheme())}>
            <Paper elevation={1} className={classes.paper}>
                <div className={classes.whiteCircle} />

                <Grid container className={classes.container}>
                    {renderPlayer( 75, "Marcelo robinho", "mostPlayer")}
                    {renderPlayer( 25, "Paulão lanches", "leastPlayer")}
                </Grid>
            </Paper>
        </MuiThemeProvider>
    )
};

export default withStyles(styles)(PlayerPickRank);