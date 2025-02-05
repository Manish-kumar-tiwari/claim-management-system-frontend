import React from "react";
import PolicyCard from "../components/PolicyCard";

const PolicyPage = () => {
  return (
    <div className="flex gap-2 flex-wrap p-3 bg-gray-500 justify-between">
      <PolicyCard
        image="healthPolicy.jpg"
        title="Health Insurance Policy"
        policyAmount="5000000"
        policyPremium="500"
        button="Buy Policy"
      />
      <PolicyCard
        image="lifeInsurance.jpg"
        title="Life Insurance Policy"
        policyAmount="8000000"
        policyPremium="800"
        button="Buy Policy"
      />

      <PolicyCard
        image="moter_policy.jpg"
        title="Auto Insurance Policy"
        policyAmount="3000000"
        policyPremium="200"
        button="Buy Policy"
      />
      <PolicyCard
        image="Home-Insurance.webp"
        title="Home Insurance Policy"
        policyAmount="5000000"
        policyPremium="300"
        button="Buy Policy"
      />
      <PolicyCard
        image="bussiness-policy.jpg"
        title="Business Insurance Policy"
        policyAmount="10000000"
        policyPremium="1000"
        button="Buy Policy"
      />
    </div>
  );
};

export default PolicyPage;
