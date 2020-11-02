import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';

const mainColor = "rgb(191,14,79)";
const secondaryColor = "rgb(86,45,139)";

let theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif'
        ].join(','),

        h1: {
            fontSize: "25px",
            fontWeight: 600,
            color: secondaryColor
        },
        subtitle1: {
            fontWeight: 700,
            fontSize: "0.9rem"
        }
    },
    palette: {
        primary: {
            main: mainColor,
            dark: "rgb(138,31,110)"
        },
        secondary: {
            main: secondaryColor,
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
    MuiTypography: {
        root: {
            color: "rgb(67,67,67)"
        }
    },
};

theme = responsiveFontSizes(theme);

export default theme;
