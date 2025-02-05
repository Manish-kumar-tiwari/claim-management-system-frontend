import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import BASE_URL from "../constant";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchdata = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/policyHolder/get`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfileData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchdata();
  }, []);

  return (
    <div className="flex bg-gray-500">
      <div className="h-screen w-[50%]">
        <img className="h-[100%] w-[100%]" src="/profile-pic.webp" alt="" />
      </div>

      <div className="flex flex-col items-center  justify-center h-[100%] w-[50%] px-2">
        <div className="w-[100%]">
          <h1 className="text-white ">My Profile</h1>
          <hr />
        </div>
        <div className="flex flex-col p-2   bg-gray-600 border-2 border-white rounded w-[100%] h-[100%]">
          <div>
            <h2 className="text-white p-1">{profileData.policyHolderName}</h2>
            <hr />
          </div>
          <div>
            <p className="text-white">
              Email : <span>{profileData.policyHolderEmail}</span>
            </p>
          </div>
          <div>
            <p className="text-white">
              Phone : <span>{profileData.policyHolderPhone}</span>
            </p>
          </div>
          <div>
            <p className="text-white">
              Address : <span>{profileData.policyHolderAddress}</span>
            </p>
          </div>
          <div>
            <p className="text-white">
              Gender : <span>{profileData.policyHolderGender}</span>
            </p>
          </div>
          <div>
            <p className="text-white">
              Country : <span>{profileData.country}</span>
            </p>
          </div>
          <div>
            <p className="text-white">
              Date of Birth : <span>{profileData.policyHolderDOB}</span>
            </p>
          </div>
        </div>

        <div className="flex justify-end w-[100%] mt-5">
          <p
            className="text-white bg-yellow-900 py-1 px-2 border-2 rounded cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </p>
        </div>
      </div>
    </div>
  );
}
