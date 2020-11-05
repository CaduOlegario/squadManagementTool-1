import {withStyles} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from 'prop-types';

const styles = {
    loading: {
        position: "fixed",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: "1100",
    },
    box: {
        padding: "54px 60vw",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
    },
    boxImg: {
        height: "150px",
        paddingBottom: "17px"
    },
    text: {
        textAlign: "center",
        fontSize: "16px",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        marginLeft: "8px"
    },
    loader: {
        color: "white",
        marginRight: "5px"
    }
};

const LoadingSpinner = (props) => {
    const {visible, classes} = props;
    const theme = useTheme();

    return (
        visible && <div>
            <div className={classes.loading}>
                <div className={classes.box} style={{background: "linear-gradient(to right, " + theme.palette.primary.main + ", " + theme.palette.primary.dark + ")"}}>
                    <img className={classes.boxImg} src="/images/venturus_logo.png" alt="Venturus Logo" />
                    <br/>
                    <span className={classes.text}>
                        <CircularProgress className={classes.loader} size={22} />&nbsp;Carregando...
                    </span>
                </div>
            </div>
        </div>
    );
};

LoadingSpinner.propTypes = {
    visible: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LoadingSpinner);