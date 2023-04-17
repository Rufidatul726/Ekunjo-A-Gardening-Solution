import React from "react";
import { Link } from "react-router-dom";

import { Nav } from "react-bootstrap";
import "../CSSfiles/sidenavbar.css";

const SideNavbar = () => {
  return (
    <Nav className="side-navbar flex-column">
      <Link to="/services/nursery" className="nav-link" >
        Find Nursery
      </Link>
      <Link to="/services/fertilizer" className="nav-link" >
        Get Fertilizer Amount
      </Link>
      <Link to="/services/plantinfo" className="nav-link">
        View Plant Details
      </Link>
      <Link to="/" className="nav-link">
        View Plant Diseases
      </Link>
    </Nav>
  );
};

export default SideNavbar;