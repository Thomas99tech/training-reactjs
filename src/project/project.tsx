import { createTheme, Divider, ThemeProvider, Typography, Table, Container } from "@material-ui/core";
import React from "react";
import makeStyles from "@material-ui/core";
import custom_theme from "../theme"
import MyStylesButton from "../myStyleButton";
import { useNavigate } from "react-router";

//const theme = createTheme();


const PageProject = () => {
    const navigate = useNavigate();
    return (
        <ThemeProvider theme={custom_theme}>
        <Typography 
            variant="h2"
            align="center"
            >
            My Projects
        </Typography>
        <Divider></Divider>
        <Container maxWidth="sm" component="div" style={{marginTop:"10px"}}>
            <table border={1} cellPadding="0" cellSpacing={0}  style={{textAlign:"center", width:"80%"}}>
                <thead>
                    <tr>
                        <td>No</td>
                        <td>Project Name </td>
                        <td>Project URL </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Lead Management</td>
                        <td><a href="https://gentle-stone-002287c10.2.azurestaticapps.net">UAT URL</a>		</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>I Love VIP</td>
                        <td><a href="https://brave-mud-056714300.2.azurestaticapps.net/#/home?productPage=1">UAT URL</a>		</td>
                    </tr>
                </tbody>
                
            </table>
        </Container>
        <div style={{textAlign:"center"}}>
            <MyStylesButton onClick={()=>{navigate("/")}} >Back</MyStylesButton>
        </div>
        
        </ThemeProvider>
    );
}

export default PageProject;