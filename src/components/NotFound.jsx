import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function NotFound() {
  const error = useRouteError();
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <h1 className="fs-3">Page Not Found - {error?.error?.message}</h1>
        <p className="mt-3">
          <Link to="/" className="text-decoration-none">
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
