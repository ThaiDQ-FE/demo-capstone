import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="mx-5 my-2">
          <p>Home</p>
        </NavLink>
        <NavLink to="/uploads">
          <p>Uploads</p>
        </NavLink>
        <NavLink to="/booking" className="mx-5 my-2">
          <p>Booking</p>
        </NavLink>
      </nav>
    </div>
  );
}
export default NavBar;
