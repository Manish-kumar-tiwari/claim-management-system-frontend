import React from "react";
import Header from "./Header";
import MenuBar from "./MenuBar";

const Outline = ({ children }) => {
  return (
    <div className="bg-gray-500 min-h-screen border-0 rounded">
      <div className="p-2">
        <Header />
        <MenuBar />
      </div>

      <div className="p-3">{children}</div>
    </div>
  );
};

export default Outline;
