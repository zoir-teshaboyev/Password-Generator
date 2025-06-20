import React from "react";


interface Props {
  level: number;
  onClick: () => void;
}

const Level: React.FC<Props> = ({ level, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="level-control"
    >
        <button className="level-but" >{level}</button>

       <input  type="range"  min="0" max="100" value="0" step="1"/>
        <div id="value">0  </div>
      
    </div>
  );
};

export default Level;

