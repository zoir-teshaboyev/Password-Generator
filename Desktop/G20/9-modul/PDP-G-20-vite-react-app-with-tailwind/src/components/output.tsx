import React from "react";

const Output: React.FC<{ password: string }> = ({ password }) => {
  return (
    <div className="output-box">
      {password}
    </div>
  );
};


export default Output;
