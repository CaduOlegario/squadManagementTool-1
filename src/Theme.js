import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import pink from '@material-ui/core/colors/pink';

let theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif'
        ].join(','),
    },
    palette: {
        primary: {
            main: pink[500]
        },
        secondary: {
            main: "rgb(86,45,139)",
        },
        background: {
            light: "rgb(247,238,247)"
        },
        font: {
            main: "rgb(177,61,124)"
        }
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
