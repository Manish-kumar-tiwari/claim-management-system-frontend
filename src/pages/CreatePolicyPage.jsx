import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import BASE_URL from "../constant";

const CreatePolicyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [policyHolderNominee, setPolicyHolderNominee] = useState("");
  const [policyHolderNomineeRelation, setPolicyHolderNomineeRelation] =
    useState("");

  const { image, policyType, policyAmount, policyPremium } =
    location.state || {};

  const applyHandler = async (e) => {
    try {
      e.preventDefault();

      const token = localStorage.getItem("token");
      console.log(token);

      const response = await axios.post(
        `${BASE_URL}/policy/create`,
        {
          image,
          policyType,
          policyAmount,
          policyPremium,
          policyHolderNominee,
          policyHolderNomineeRelation,
        },

        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="p-4  bg-gray-400 h-screen flex">
      <div className="h-[98%] w-[90%]">
        <img className="h-[100%]" src={image} alt="" />
      </div>
      <div className="p-3 border-1 rounded h-[98%]">
        <h1 className="p-2 flex justify-center text-white text-3xl">
          Policy Form
        </h1>
        <hr />
        <form className="row g-3 bg-gray-600 p-6 border-2 rounded">
          <div className="col-md-6">
            <label htmlFor="inputPolicyType" className="form-label text-white ">
              Policy Type
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              value={policyType}
              disabled
            />
          </div>
          <div className="col-md-6">
            <label
              htmlFor="inputPolicyAmount"
              className="form-label text-white "
            >
              Policy Ammount
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              value={policyAmount}
              disabled
            />
          </div>
          <div className="col-md-6">
            <label
              htmlFor="inputPolicyPremium"
              className="form-label text-white "
            >
              Policy Premium
            </label>
            <input
              type="number"
              className="form-control"
              id="inputPhone"
              value={policyPremium}
              disabled
            />
          </div>
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label text-white ">
              Nominee Name
            </label>
            <input
              type="text"
              className="form-control"
              name="policyHolderNominee"
              value={policyHolderNominee}
              onChange={(e) => setPolicyHolderNominee(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputDOB" className="form-label text-white ">
              Nominee Relation
            </label>
            <input
              type="text"
              className="form-control"
              name="policyHolderNomineeRelation"
              value={policyHolderNomineeRelation}
              onChange={(e) => setPolicyHolderNomineeRelation(e.target.value)}
            />
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={applyHandler}
            >
              Apply
            </button>
          </div>
        </form>
        <div
          className="px-2 py-1 mt-5 bg-yellow-100 border-0 rounded-full w-20 cursor-pointer flex justify-center"
          onClick={() => navigate("/")}
        >
          <IoMdArrowRoundBack size={"40"} />
        </div>
      </div>
    </div>
  );
};

export default CreatePolicyPage;
