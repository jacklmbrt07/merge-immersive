import React from "react";
import { Link } from "react-router-dom";
import { MdInfo } from "react-icons/md";


const NotFound = () => {
    return (
        <>
            <h1><MdInfo />404! We couldn't find that!</h1>
            <Link to='/'>Go Back Home</Link>
        </>
    )
}


export default NotFound;