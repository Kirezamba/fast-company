import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Main
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/users">
            Users
          </Link>
        </li>
      </ul>
    </>
  );
}
