import React from "react";
import MyStylesButton from "./myStyleButton";
//import {useHistory } from "react-router";
import { useNavigate } from "react-router";
import { Typography	} from "@material-ui/core";
import MyStylesClassButton from "./myStyleClassButton";

const Landing_mui = () => {
	const navigate = useNavigate();

	return (
		<div>
			<Typography variant="h1">Landing page</Typography>
			<MyStylesButton onClick={() => navigate("/page/1")} >Page 1</MyStylesButton>
			<MyStylesButton onClick={() => navigate("/page/2")}>Page 2</MyStylesButton>
			<MyStylesClassButton obese onClick={() => navigate("/page/2")}>Page 3</MyStylesClassButton>
			<MyStylesClassButton  obese onClick={() => navigate("/page/2")}></MyStylesClassButton>
		</div>
	);
};

export default Landing_mui;