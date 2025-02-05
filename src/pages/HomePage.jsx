import React from "react";
import Header from "../components/Header";
import PolicyPage from "./PolicyPage";
import MenuBar from "../components/MenuBar";
import Outline from "../components/Outline";

const HomePage = ({ children }) => {
  return (
    <Outline>
      <PolicyPage />
    </Outline>
  );
};

export default HomePage;
