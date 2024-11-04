import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div>
      <h1 className="font-bold text-[56px]">{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Heading;
