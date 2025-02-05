import React from "react";
import Outline from "../components/Outline";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const SinglePolicyPage = () => {
  const location = useLocation();
  const { policy } = location.state;

  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-500">
      <div className="w-[40%] h-[100%]">
        <img className="w-[100%] h-[100%]" src={`/${policy.image}`} alt="" />
      </div>
      <div className="p-2 bg-gray-500 h-[100%] w-[50%] ml-16">
        <h1 className="p-1 flex justify-center text-white text-3xl">
          {policy.policyType}
        </h1>
        <hr />
        <br />
        <form className="row g-3 bg-gray-800 border-2 rounded p-4">
          <div className="col-md-6">
            <label htmlFor="inputname" className="form-label text-white ">
              Policy Id
            </label>
            <input
              type="text"
              className="form-control bg-gray-600"
              name="name"
              value={policy._id}
              disabled
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputPhone" className="form-label text-white ">
              policyAmount
            </label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={policy.policyAmount}
              disabled
            />
          </div>
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label text-white ">
              policyPremium
            </label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={policy.policyPremium}
              disabled
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputDOB" className="form-label text-white ">
              policyStatus
            </label>
            <input
              type="text"
              className="form-control"
              name="dateOfBirth"
              value={policy.policyStatus}
              disabled
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputPassword" className="form-label text-white ">
              Nominee Name
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
              value={policy.policyHolderNominee}
              disabled
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputPassword" className="form-label text-white ">
              Nominee Relation
            </label>
            <input
              type="text"
              className="form-control"
              id="passwordgg"
              name="password"
              value={policy.policyHolderNomineeRelation}
              disabled
            />
          </div>

          <div className="col-12">
            <button
              type="button"
              className="p-2 bg-amber-300 border-0 rounded"
              onClick={() =>
                navigate("/viewPolicy/claim", {
                  state: {
                    policy,
                  },
                })
              }
            >
              Claim Policy
            </button>
          </div>
        </form>
        <div
          className="px-2 py-1 mt-2 bg-yellow-100 border-0 rounded-full w-20 cursor-pointer flex justify-center"
          onClick={() => navigate("/myPolicies")}
        >
          <IoMdArrowRoundBack size={"40"} />
        </div>
      </div>
    </div>
  );
};

export default SinglePolicyPage;
