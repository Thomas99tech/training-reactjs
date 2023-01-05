import React from "react";
import { useParams } from "react-router";

const Page = () => {

    const params = useParams();

    return (
        <div>
            <h1> This is page {params.pageId} </h1>
        </div>
    );
}

export default Page;
