import React from "react";

const CopyButton: React.FC<{ password: string }> = ({ password }) => {
  const copy = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  };

  return (
    <button
      onClick={copy}
      className="copy-btn"
    >
      Copy
    </button>
  );
};

export default CopyButton;

