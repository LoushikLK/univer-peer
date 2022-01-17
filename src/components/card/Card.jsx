import { Button } from "@mui/material";
import React from "react";

const Card = (props) => {
  return (
    <Button className="card-main flex-column align-items-center">
      <div className="card-image d-flex align-items-center justify-content-center">
        <img src={props.image} alt="Crad" />
      </div>
      {/* <hr className="w-100" /> */}
      <div className="card-content w-100 d-flex justify-content-center align-items-center">
        <h1 className="card-heading">{props.heading}</h1>
      </div>
    </Button>
  );
};

export default Card;
