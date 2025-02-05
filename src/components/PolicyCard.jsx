import React from "react";
import { useNavigate } from "react-router-dom";

const PolicyCard = ({
  image,
  title,
  policyAmount,
  policyPremium,
  button,
  policy,
}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          style={{ height: "200px" }}
          src={image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body bg-g">
          <h5 className="card-title text-red-300 text-center font-extrabold">
            {title}
          </h5>
          <hr />
          <div className="flex justify-start gap-2">
            <p className="card-text font-bold">Policy Ammount : </p>
            <p className="card-text font-bold">{policyAmount}</p>
          </div>

          <div className="flex justify-start gap-2">
            <p className="card-text font-bold">Policy Premium : </p>
            <p className="card-text font-bold">{policyPremium}</p>
          </div>

          <p
            className="p-1 border-1 rounded text-center bg-green-300 text-white font-bold cursor-pointer"
            onClick={() => {
              if (button === "Buy Policy") {
                console.log(token);
                if (token === null) {
                  navigate("/signIn");
                } else {
                  navigate("/buyPolicy", {
                    state: {
                      image,
                      policyType: title,
                      policyAmount,
                      policyPremium,
                    },
                  });
                }
              } else {
                navigate("/viewPolicy", {
                  state: {
                    image,
                    policyType: title,
                    policyAmount,
                    policyPremium,
                    policy,
                  },
                });
              }
            }}
          >
            {button}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolicyCard;
