import React from "react";

const BasicCard = (props) => {
  return (
    <div className="basic-card-main flex-column  align-items-center">
      <div className="basic-card-icon">
        <img src={props.icon} alt="Cards" />
      </div>
      <div className="basic-card-content">{props.subject}</div>
    </div>
  );
};

export default BasicCard;
