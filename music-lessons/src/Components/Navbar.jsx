import React from "react";
import { useState, useEffect } from "react";
import { Line, Column, Around } from "../Layouts/layouts";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Modal from "./Modal";
import Login from "./Login";
import SignUp from "./SignUp";

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

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
      </Line>
      <Line>
        <Column>
          {!isLoggedIn && (
            <button
              className="navbarButton"
              onClick={() => setLoginModalOpen(true)}
            >
              Login
            </button>
          )}
          <Modal
            isOpen={loginModalOpen}
            setIsOpen={setLoginModalOpen}
            Comp={Login}
          />
          ;
        </Column>
        <Column>
          {!isLoggedIn && (
            <button
              onClick={() => setSignupModalOpen(true)}
              className="navbarButton"
            >
              Join For Free
            </button>
          )}
          <Modal
            isOpen={signupModalOpen}
            setIsOpen={setSignupModalOpen}
            Comp={SignUp}
          />
        </Column>
      </Line>
    </Around>
  );
}
