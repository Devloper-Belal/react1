import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import "../theme.css";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firbase/config";
import {  signOut } from "firebase/auth";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const { changeLight, theme } = useContext(ThemeContext);
  return (
    <div className="ali">
    
      <header className="hide-when-mobile ali">
        <h1>
          <Link to="/">C4a.be</Link>
        </h1>
        <button
          onClick={() => changeLight(theme === "light" ? "darck" : "light")}
          className="theme-btn"
          type="button"
        >
          {theme}
        </button>

        <ul className="flex">
          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/signin">
                sign-in
              </NavLink>
            </li>
          )}

          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/signup">
                sign-up
              </NavLink>
            </li>
          )}

          {user && (
            <li
              onClick={() =>
                signOut(auth)
                  .then(() => {
                    // Sign-out successful.
                  })
                  .catch((error) => {
                    // An error happened.
                  })
              }
              className="main-list"
            >
              <NavLink className="main-link">sign-out</NavLink>
            </li>
          )}
   

  { user && <li className="main-list">
            <NavLink className="main-link" to="/html">
              HTML
            </NavLink>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href>coming soon🔥</a>
              </li>
            </ul>
          </li>}


          <li className="main-list">
            <NavLink className="main-link" to="/java">
              JavaScript
            </NavLink>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href>coming soon🔥</a>
              </li>
            </ul>
          </li>
        </ul>
      </header>
      <header className="show-when-mobile ali">
        <h1>
          <Link to="/">C4a.be</Link>{" "}
        </h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href>Full Course</a>
              </li>
              <li>
                <a href>Crash Course</a>
              </li>
              <li>
                <a href>learn in 1h</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href>Full Course</a>
              </li>
              <li>
                <a href>CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href>project 1</a>
                  </li>
                  <li>
                    <a href>project 2</a>
                  </li>
                  <li>
                    <a href>project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href>coming soon🔥</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
