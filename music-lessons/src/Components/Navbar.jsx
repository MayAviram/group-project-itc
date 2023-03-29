import React from "react";
import { useState, useEffect } from "react";
import { Line, Column, Around } from "../Layouts/layouts";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Modal from "./Modal";
import Login from "./Login";
import SignUp from "./SignUp";
import ProfileDetails from "./ProfileDetails";
import { AiOutlineSetting } from "react-icons/ai";

const admin = "admin";
const user = "user";
export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [profileDetailsOpen, setProfileDetailsOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);
  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  return (
    <Around className="navbar">
      <Column>
        {" "}
        <Link to="/" className="webNameTitle">
          Lessons4u
        </Link>
      </Column>
      <Line>
        <Column>
          <Link to="/">Home</Link>
        </Column>
        <Column>
          <Link to="/search">Search</Link>
        </Column>
        {isLoggedIn &&
          JSON.parse(localStorage.getItem("user"))?.role === user && (
            <Link to="/info">My Info</Link>
          )}

        <Column>
          {isLoggedIn &&
            JSON.parse(localStorage.getItem("user"))?.role === admin && (
              <Link to="/dashboard">Dashboard</Link>
            )}
        </Column>
      </Line>

      <Line className="navbarButtons">
        {isLoggedIn && (
          <button
            className="navbarButton"
            onClick={() => setProfileDetailsOpen(true)}
          >
            <Line>
              <Around>
                <AiOutlineSetting />
                {JSON.parse(localStorage.getItem("user"))?.name}
              </Around>
            </Line>
          </button>
        )}
        {isLoggedIn && (
          <button className="navbarButton" onClick={() => Logout()}>
            Logout
          </button>
        )}
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
        <Modal
          isOpen={profileDetailsOpen}
          setIsOpen={setProfileDetailsOpen}
          Comp={ProfileDetails}
        />
      </Line>
    </Around>
  );
}
