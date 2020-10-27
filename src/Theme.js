import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import pink from '@material-ui/core/colors/pink';

let theme = createMuiTheme({
    palette: {
        primary: {
            main: pink[500]
        },
        secondary: {
            main: purple[700],
        },
    }
});

theme.overrides = {
    MuiAppBar: {
        colorPrimary: {
            background: "linear-gradient(to right, " + theme.palette.primary.main + ", " + theme.palette.secondary.main + ")"
        }
    }
};

theme = responsiveFontSizes(theme);

export default theme;
