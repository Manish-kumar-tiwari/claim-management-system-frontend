import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import BASE_URL from "../constant";

const SignInPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser((preUser) => ({
      ...preUser,
      [name]: value,
    }));
  };

  const loginHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(`${BASE_URL}/policyHolder/login`, user);

      localStorage.setItem("token", response.data.token);

      toast.success(response.data.message);
      setUser({
        email: "",
        password: "",
      });
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className=" bg-gray-400 h-screen">
      <div className="flex">
        <div className="h-screen">
          <img className="h-screen w-[90%]" src="ClaimImage.jpg" alt=" image" />
        </div>

        <div className="p-4 ml-2">
          <h1 className="p-2 flex justify-center text-white text-3xl font-bold">
            Login
          </h1>
          <hr />
          <form className="row g-3  border-1 rounded border-amber-900 p-5 bg-gray-700 ">
            <div>
              <div className="col-md-12">
                <label htmlFor="inputEmail" className="form-label text-white ">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={user.email}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="col-md-12">
                <label
                  htmlFor="inputPassword"
                  className="form-label text-white "
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={user.password}
                  onChange={onChangeHandler}
                />
              </div>
            </div>

            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={loginHandler}
              >
                SignIn
              </button>
            </div>

            <p>
              You don't have account ?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => navigate("/signUp")}
              >
                Create Account
              </span>
            </p>
          </form>
          <div
            className="px-2 py-1 mt-5 bg-yellow-100 border-0 rounded-full w-20 cursor-pointer flex justify-center"
            onClick={() => navigate("/")}
          >
            <IoMdArrowRoundBack size={"40"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
