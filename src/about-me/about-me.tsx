import React from "react";
import {Button, Divider, makeStyles, Table} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {Toolbar} from "@material-ui/core";
import { createTheme, ThemeProvider } from '@material-ui/core';
import MyStylesButton from "../myStyleButton";
import { create } from "domain";
import { useNavigate } from "react-router";
const useStyles = makeStyles(theme=>({
    page_title:{
        textAlign : "center"
    }
}))

const theme = createTheme();

const PageAboutMe = () => {

    const custom_class = useStyles();
    const navigate = useNavigate();
    return (
       <ThemeProvider theme={theme}>
            <Typography
                variant="h2"
                align="center"
                noWrap >
                    About Me
            </Typography>
            <Divider></Divider>
            <Typography
                variant="h3"
                >
                    Short Description 
            </Typography>
            <p>
                Hi, I am Thomas. I am a software developer. My primary skill is developing software with Using .net and php. 
            </p>
           <MyStylesButton onClick={()=>{navigate("/aboutme/project")}}>Passed Project</MyStylesButton>
       </ThemeProvider>
    );
}

export default PageAboutMe;