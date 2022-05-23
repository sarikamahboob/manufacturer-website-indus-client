import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Header = ({ dark, setDark }) => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <div className="bg-secondary">
      <div class="navbar  max-w-7xl mx-auto">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabIndex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52  "
            >
              <li>
                <NavLink className="font-bold" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="font-bold" to="/blogs">
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink className="font-bold" to="/purchase">
                  Purchased Items
                </NavLink>
              </li>
              <li>
                {user ? (
                  <button onClick={logout} className="btn btn-accent">
                    Sign Out
                  </button>
                ) : (
                  <Link to="/signin" className="font-bold">
                    Sign In
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <Link
            to="/"
            class="btn btn-ghost normal-case text-4xl text-accent font-bold font-saira"
          >
            Indus
          </Link>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0 font-roboto">
            <li>
              <NavLink
                className="text-white font-bold hover:text-accent text-lg "
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white font-bold hover:text-accent text-lg "
                to="/blogs"
              >
                Blogs
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  className="text-white font-bold hover:text-accent text-lg  "
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
            )}

            <li className="hover:bg-none">
              {user ? (
                <div>
                  <p className=" text-accent font-bold  ml-2 text-lg">
                    {user.displayName}
                  </p>
                  <button
                    onClick={logout}
                    className="btn btn-accent text-primary font-bold  ml-2 text-lg"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <NavLink
                  className="text-primary font-bold  ml-2 bg-accent border border-accent hover:bg-transparent hover:border-accent text-lg"
                  to="/signin"
                >
                  Sign In
                </NavLink>
              )}
            </li>

            <label class="swap swap-rotate ml-4">
              <input type="checkbox" onClick={() => setDark(!dark)} />

              <svg
                class="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                class="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
