import react, {PropsWithChildren} from "react";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import clx from "classnames";

interface MyButtonProps extends PropsWithChildren{
    onClick : (evt: react.MouseEvent<HTMLButtonElement>) => void
    obese : {}
}

const useStyles = makeStyles(theme=>({
    root:{
        padding : "8px 16px" //fatter button
    },
    superfat : {
        padding: "32px 64px",
    },
    error : {
        background: "red"
    }
}))

type props = {}

const MyStylesClassButton = (props: MyButtonProps) => {
    const classes = useStyles();
    const {children, onClick, obese} = props;
    const otherClasses = {
        [classes.superfat]: obese === true,
        [classes.error] : !children,
    }
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            className = { clx(classes.root, otherClasses) }
        >
            {children}
        </Button>
    );
}




export default MyStylesClassButton;