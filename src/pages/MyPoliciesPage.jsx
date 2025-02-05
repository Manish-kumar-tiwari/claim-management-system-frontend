import React, { useEffect, useState } from "react";
import Outline from "../components/Outline";
import axios from "axios";
import PolicyCard from "../components/PolicyCard";
import BASE_URL from "../constant";

const MyPoliciesPage = () => {
  const [myPolicy, setMyPolicy] = useState([]);

  useEffect(() => {
    const fetchMyPolicy = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(`${BASE_URL}/policy/getAll`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setMyPolicy(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMyPolicy();
  }, []);

  return (
    <Outline>
      <div className="flex gap-2 flex-wrap  bg-gray-500 ">
        {myPolicy.length === 0 ? (
          <h1 className="text-white font-extrabold p-10">
            There is no policy for you
          </h1>
        ) : (
          myPolicy.map((plc, index) => (
            <div key={index}>
              <PolicyCard
                image={plc.image}
                title={plc.policyType}
                policyAmount={plc.policyAmount}
                policyPremium={plc.policyPremium}
                button="View"
                policy={plc}
              />
            </div>
          ))
        )}
      </div>
    </Outline>
  );
};

export default MyPoliciesPage;
