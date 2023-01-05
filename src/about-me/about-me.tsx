import React from "react";
import {makeStyles} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {Toolbar} from "@material-ui/core";
import { createTheme, ThemeProvider } from '@material-ui/core';
import MyStylesButton from "../myStyleButton";
import { create } from "domain";
const useStyles = makeStyles(theme=>({
    page_title:{
        textAlign : "center"
    }
}))

const theme = createTheme();

const PageAboutMe = () => {

    const custom_class = useStyles();

    return (
       <ThemeProvider theme={theme}>

       </ThemeProvider>
    );
}

export default PageAboutMe;