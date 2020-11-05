import React from 'react'
import {ThemeProvider} from "@material-ui/styles";
import theme from "./Theme";

export default function Provider({children}) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}