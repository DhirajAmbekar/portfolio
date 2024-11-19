import React from "react";

const Name = ({ name, animate }) => {
  return (
    <div className="name-container">
      <div className="animated-name to_right">
        <span className="letter1" data-letter="D">
          D
        </span>
      </div>
    </div>
  );
};

export default Name;
