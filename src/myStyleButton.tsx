import react, {PropsWithChildren} from "react";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import clx from "classnames";

interface MyButtonProps extends PropsWithChildren{
    onClick : (evt: react.MouseEvent<HTMLButtonElement>) => void;
}

const useStyles = makeStyles(theme=>({
    root:{
        padding : "8px 16px" //fatter button
    },
}))

const MyStylesButton=( props:MyButtonProps ) =>{
    const classes = useStyles();
    const {children, onClick} = props;

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            className = {classes.root}
        >
            {children}
        </Button>
    );
}




export default MyStylesButton;