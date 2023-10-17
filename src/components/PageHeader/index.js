import React from "react";
import "./PageHeader.css";

const PageHeader = ({pageName}) => {
    return(
        <div className="pageHeaderContainer">
            <h1>{pageName}</h1>
        </div>
    )
}

export default PageHeader;