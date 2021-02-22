import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <React.Fragment>
      <h1>404! We couldn't find that!</h1>
      <Link to="/">Go Back Home</Link>
    </React.Fragment>
  );
};

export default NotFound;
