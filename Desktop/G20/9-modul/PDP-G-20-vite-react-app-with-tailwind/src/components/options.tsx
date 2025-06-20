import React from "react";

interface Props {
  toggler: (key: any) => void;
}

const Options: React.FC<Props> = ({ toggler }) => {
  return (
    <div className="text-left mb-4">
      <label className="block"><input type="checkbox" onChange={() => toggler("useNumbers")} /> Numbers</label>
      <label className="block"><input type="checkbox" onChange={() => toggler("useLowercase")} /> Lowercase</label>
      <label className="block"><input type="checkbox" onChange={() => toggler("useUppercase")} /> Uppercase</label>
      <label className="block"><input type="checkbox" onChange={() => toggler("useSymbols")} /> Symbols</label>
      <label className="block"><input type="checkbox" onChange={() => toggler("useSpaces")} /> Spaces</label>
    </div>
  );
};

export default Options;

