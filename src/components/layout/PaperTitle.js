import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";

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

export default withStyles(styles)(PaperTitle);