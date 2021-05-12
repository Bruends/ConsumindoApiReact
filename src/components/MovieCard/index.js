import React from "react";

const index = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <small>{props.original_title}</small>
      <p>{props.description}</p>
    </div>
  );
};

export default index;
