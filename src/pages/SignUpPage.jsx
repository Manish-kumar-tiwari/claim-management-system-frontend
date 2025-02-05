import React, { useState } from "react";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import BASE_URL from "../constant";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    dateOfBirth: "",
    gender: "",
    country: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const createAccountHandler = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(
        `${BASE_URL}/policyHolder/create`,
        user
      );

      console.log(response);

      toast.success(response.data.message);
      setUser({
        name: "",
        email: "",
        phone: "",
        address: "",
        dateOfBirth: "",
        gender: "",
        country: "",
        password: "",
      });
      navigate("/signIn");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="p-2  bg-gray-500 h-screen">
      <h1 className="p-1 flex justify-center text-white text-3xl">
        Create Your Account
      </h1>
      <hr />
      <br />
      <form className="row g-3 bg-gray-800 border-2 rounded p-4">
        <div className="col-md-4">
          <label htmlFor="inputname" className="form-label text-white ">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={user.name}
            onChange={onChangeHandler}
          />
        </div>
        <div className="col-md-4">
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
        <div className="col-md-4">
          <label htmlFor="inputPhone" className="form-label text-white ">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            name="phone"
            value={user.phone}
            onChange={onChangeHandler}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label text-white ">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={user.address}
            onChange={onChangeHandler}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputDOB" className="form-label text-white ">
            Date Of Birth
          </label>
          <input
            type="date"
            className="form-control"
            name="dateOfBirth"
            value={user.dateOfBirth}
            onChange={onChangeHandler}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputGender" className="form-label text-white ">
            Gender
          </label>
          <select
            name="gender"
            className="form-select"
            value={user.gender}
            onChange={onChangeHandler}
          >
            <option selected value={""}>
              Choose...
            </option>
            <option value={"Male"}>Male</option>
            <option value={"Femail"}>Female</option>
            <option value={"Other"}>Other</option>
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="inputCountry" className="form-label text-white ">
            Country
          </label>
          <select
            id="country"
            className="form-select"
            value={user.country}
            name="country"
            onChange={onChangeHandler}
          >
            <option selected value={""}>
              Choose...
            </option>
            <option value={"India"}>India</option>
            <option value={"Other"}>Other</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputPassword" className="form-label text-white ">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={user.password}
            onChange={onChangeHandler}
          />
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={createAccountHandler}
          >
            Create Account
          </button>
        </div>

        <p className="text-white">
          Have an Account ?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/signIn")}
          >
            Login
          </span>
        </p>
      </form>

      <div
        className="px-2 py-1 mt-2 bg-yellow-100 border-0 rounded-full w-20 cursor-pointer flex justify-center"
        onClick={() => navigate("/")}
      >
        <IoMdArrowRoundBack size={"40"} />
      </div>
    </div>
  );
};

export default SignUpPage;
