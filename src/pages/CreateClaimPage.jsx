import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import BASE_URL from "../constant";

const CreateClaimPage = () => {
  const location = useLocation();
  const { policy } = location.state;

  const [claimReason, setClaimReason] = useState("");
  const [claimAmount, setClaimamount] = useState("");

  const navigate = useNavigate();

  const claimSubmitHandler = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${BASE_URL}/claim/create/${policy._id}`,
        {
          claimReason,
          claimAmount,
          claimType: policy.policyType,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success(response.data.message);
      setClaimReason("");
      setClaimamount("");
    } catch (error) {
      toast.error(error.response.data.message);
      setClaimReason("");
      setClaimamount("");
    }
  };

  return (
    <div className=" bg-gray-400 h-screen">
      <div className="flex">
        <div className="w-[50%]">
          <img
            className="h-screen w-[100%]"
            src="/claimForm.jpg"
            alt=" image"
          />
        </div>

        <div className="p-7 ml-[10%]">
          <h1 className=" flex justify-center text-white text-3xl font-bold">
            Claim Insurance
          </h1>
          <hr />
          <form className="row g-3  border-1 rounded border-amber-900 p-5 bg-gray-700 ">
            <div>
              <div className="col-md-12">
                <label htmlFor="inputId" className="form-label  text-white ">
                  Policy Id
                </label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  id="inputEmail"
                  value={policy._id}
                  readOnly
                />
              </div>

              <div className="col-md-12">
                <label
                  htmlFor="inputClaimType"
                  className="form-label text-white "
                >
                  Claim Type
                </label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  id="inputClaimType"
                  value={policy.policyType}
                />
              </div>

              <div className="col-md-12">
                <label
                  htmlFor="inputClaimAmount"
                  className="form-label text-white "
                >
                  Claim Amount
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputClaimAmount"
                  value={claimAmount}
                  onChange={(e) => {
                    setClaimamount(e.target.value);
                  }}
                />
              </div>

              <div className="col-md-12">
                <label htmlFor="inputId" className="form-label  text-white ">
                  Claim Reason
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail"
                  value={claimReason}
                  onChange={(e) => {
                    setClaimReason(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="col-12">
              <button
                type="button"
                className="btn btn-primary"
                onClick={claimSubmitHandler}
              >
                Claim
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
    </div>
  );
};

export default CreateClaimPage;
