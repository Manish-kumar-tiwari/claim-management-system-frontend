import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const MenuBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logoutHandler = () => {
    localStorage.removeItem("token");
    toast.success("Logout Successfull");
    navigate("/");
  };
  return (
    <div className="bg-gray-800 ">
      <div className="container p-2 ">
        <div className="flex justify-between">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/" className="nav-link px-1 text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/myPolicies" className="nav-link px-2 text-white">
                My Policies
              </a>
            </li>
            <li>
              <a href="/myClaim" className="nav-link px-2 text-white">
                My Claims
              </a>
            </li>
            <li>
              <a href="/notification" className="nav-link px-2  text-white">
                Notifications
              </a>
            </li>
            <li>
              <a href="/profile" className="nav-link px-2 text-white">
                About Me
              </a>
            </li>
          </ul>
          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="bg-dark p-2 text-white border-0 rounded"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
          <div className="text-end">
            {token && (
              <button
                type="button"
                className="btn btn-danger me-2"
                onClick={logoutHandler}
              >
                Logout
              </button>
            )}

            {!token && (
              <button
                type="button"
                className="btn btn-outline-light me-2"
                onClick={() => navigate("/signIn")}
              >
                Login
              </button>
            )}

            <button
              type="button"
              className="btn btn-warning"
              onClick={() => navigate("/signUp")}
            >
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
