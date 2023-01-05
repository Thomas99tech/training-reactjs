import react, {PropsWithChildren} from "react";

interface MyButtonProps extends PropsWithChildren{
    onclick : (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

const MyButton = (props: MyButtonProps) => {
    const {children, onclick} = props;
    return (
        <button onClick={onclick} style={styles.root}>{children}</button>
    )
}

const styles = {
    root: {
		padding: "8px 16px",     // note the difference between 
		background: "#ff9833",   // CSS and JS style declarations
		border: "none",
		borderRadius: 4,         // while other numbers default to 'px'
        lineHeight: 1.5,         // lineHeight numbers default to 'em'      
		fontWeight: "bold",
		color: "#000",
	},
}

export default MyButton;