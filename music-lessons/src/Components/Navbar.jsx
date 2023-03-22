import React from "react";
import { Line, Column, Around } from "../Layouts/layouts";
import { Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <Around className="navbar">
      <Column>Lessons4u</Column>
      <Line>
        <Column>
          <Link to="/">Home</Link>
        </Column>
        <Column>
          <Link to="/search">Search</Link>
        </Column>
        <Column>
          <Link to="/info">My Info</Link>
        </Column>
        <Column>
          <Link to="/dashboard">Dashboard</Link>
        </Column>
      </Line>
      <Line>
        <Column>
          <button className="navbarButton">Login</button>
        </Column>
        <Column>
          <button className="navbarButton">Join For Free</button>
        </Column>
      </Line>
    </Around>
  );
}
