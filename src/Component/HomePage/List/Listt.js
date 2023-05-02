import React from "react";

const Listt = ({ children, items }) => {
  let cloneElement = items.map((item) =>
    React.cloneElement(children, { item, key: item.id })
  );
  return <div className="list flex flex-wrap mt-10">{cloneElement} </div>;
};

export default Listt;
