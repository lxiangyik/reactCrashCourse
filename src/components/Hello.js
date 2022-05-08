import React from "react";


export const Hello = (props) => {
  return (
    <div>
      <div>
        Hello {props.name} and {props.gender}
      </div>
      <p>{props.children}</p>
    </div>
  );
};
