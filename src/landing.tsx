import React from "react";
import MyButton from "./myButton";
//import {useHistory } from "react-router";
import { useNavigate } from "react-router";

const Landing = () => {
	const navigate = useNavigate();

	return (
		<div>
			<h1>Landing page</h1>
			<MyButton onclick={() => navigate("/page/1")} >Page 1</MyButton>
			<MyButton onclick={() => navigate("/page/2")}>Page 2</MyButton>
		</div>
	);
};

export default Landing;