import React from "react";

const ShapOneDaynamicCom = ({ item }) => {
  return (
    <div>
      <h1 className="text-3xl p-5 bg-red-500 my-5 text-orange">
        <div>
          <div>{item.name}</div>
          <div>{item.age}</div>
        </div>
      </h1>
    </div>
  );
};

export default ShapOneDaynamicCom;
