import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";
import PropTypes from "prop-types";

const styles = {
    container: {
        padding: "28px",
        borderBottom: "1px solid #ececec",
    }
};

const PaperTitle = (props) => {
    const {classes, title} = props;

    return (
        <div className={classes.container}>
            <Typography variant="h1"> {title} </Typography>
        </div>
    );
};

PaperTitle.propTypes = {
    title: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperTitle);