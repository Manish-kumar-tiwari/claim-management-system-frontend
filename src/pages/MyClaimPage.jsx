import React, { useEffect, useState } from "react";
import Outline from "../components/Outline";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../constant";

const MyClaimPage = () => {
  const navigate = useNavigate();

  const [claimData, setClaimData] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/claim/getAll`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setClaimData(response.data.claimData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [load]);

  const deleteHandler = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `http://localhost:5080/api/v1/claim/delete/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success(response.data.message);
      setLoad(!load);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Outline>
      {claimData.length !== 0 && (
        <div class="row mb-3 text-center bg-amber-600 p-2 border-0 rounded">
          <div class="col-1 themed-grid-col text-white font-bold">
            Serial No.
          </div>
          <div class="col-2 themed-grid-col text-white font-bold">
            claimType
          </div>
          <div class="col-2 themed-grid-col text-white font-bold">
            claimAmount
          </div>
          <div class="col-2 themed-grid-col text-white font-bold">
            claimStatus
          </div>
          <div class="col-2 themed-grid-col text-white font-bold">
            claimDate
          </div>
          <div class="col-3 themed-grid-col text-white font-bold">Action</div>
        </div>
      )}

      {claimData.length === 0 ? (
        <h1 className="font-extrabold text-white p-10">
          There are no Claims for you.
        </h1>
      ) : (
        claimData?.map((claim, index) => (
          <div
            class="row mb-3 text-center bg-gray-600 p-2 border-0 rounded"
            key={index}
          >
            <div class="col-1 themed-grid-col text-white">{index + 1}</div>
            <div class="col-2 themed-grid-col text-white">
              {claim.claimType}
            </div>
            <div class="col-2 themed-grid-col text-white">
              {claim.claimAmount}
            </div>
            <div class="col-2 themed-grid-col text-white">
              {claim.claimStatus}
            </div>
            <div class="col-2 themed-grid-col text-white">
              {claim.claimDate}
            </div>
            <div class="col-3 themed-grid-col flex gap-5 justify-center">
              <span
                className="cursor-pointer"
                onClick={() => deleteHandler(claim._id)}
              >
                <MdDeleteOutline color="red" size={"30"} />
              </span>
              <span
                className="cursor-pointer"
                onClick={() =>
                  navigate("/updateClaim", {
                    state: {
                      claim,
                    },
                  })
                }
              >
                <FiEdit2 color="yellow" size={"30"} />
              </span>
            </div>
          </div>
        ))
      )}
    </Outline>
  );
};

export default MyClaimPage;
