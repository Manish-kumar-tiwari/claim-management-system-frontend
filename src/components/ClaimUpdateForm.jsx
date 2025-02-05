import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import BASE_URL from "../constant";

const ClaimUpdateForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { claim } = location.state;

  const [claimAmount, setCliamAmount] = useState(claim.claimAmount);
  const updateClaimHandler = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.put(
        `${BASE_URL}/claim/update/${id}`,
        { claimAmount },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success(response.data.message);
      navigate("/myClaim");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="flex h-screen bg-gray-500">
      <div className="w-[40%] h-[100%]">
        <img className="w-[100%] h-[100%]" src="/updateImage.jpg" alt="" />
      </div>
      <div className="p-2 bg-gray-500 h-[100%] w-[50%] ml-16">
        <h1 className="p-1 flex justify-center text-white text-3xl">
          {"Update Clame"}
        </h1>
        <hr />
        <br />
        <form className="row g-3 bg-gray-800 border-2 rounded p-4">
          <div className="col-md-6">
            <label htmlFor="inputname" className="form-label text-white ">
              policyHolderId
            </label>
            <input
              type="text"
              className="form-control bg-gray-600"
              name="name"
              value={claim.policyHolderId}
              disabled
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputPhone" className="form-label text-white ">
              policyId
            </label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={claim.policyId}
              disabled
            />
          </div>
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label text-white ">
              Claim Type
            </label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={claim.claimType}
              disabled
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputDOB" className="form-label text-white ">
              claimStatus
            </label>
            <input
              type="text"
              className="form-control"
              name="dateOfBirth"
              value={claim.claimStatus}
              disabled
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputPassword" className="form-label text-white ">
              claimReason
            </label>
            <input
              type="text"
              className="form-control"
              name="password"
              value={claim.claimReason}
              disabled
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputPassword" className="form-label text-white ">
              claimAmount
            </label>
            <input
              type="text"
              className="form-control"
              name="password"
              value={claimAmount}
              onChange={(e) => setCliamAmount(e.target.value)}
            />
          </div>

          <div className="col-12">
            <button
              type="button"
              className="p-2 bg-amber-300 border-0 rounded"
              onClick={() => {
                updateClaimHandler(claim._id);
              }}
            >
              Update Claim
            </button>
          </div>
        </form>
        <div
          className="px-2 py-1 mt-2 bg-yellow-100 border-0 rounded-full w-20 cursor-pointer flex justify-center"
          onClick={() => navigate("/")}
        >
          <IoMdArrowRoundBack size={"40"} />
        </div>
      </div>
    </div>
  );
};

export default ClaimUpdateForm;
