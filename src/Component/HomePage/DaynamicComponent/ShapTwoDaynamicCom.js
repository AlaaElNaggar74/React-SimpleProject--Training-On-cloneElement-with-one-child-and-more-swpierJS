import React from "react";

const ShapTwoDaynamicCom = ({ item }) => {
  return (
    <div>
      <h1 className="text-3xl p-5 bg-green-500 text-orange">
        <div>
          <div>{item.name}</div>
          <div>{item.age}</div>
        </div>
      </h1>
    </div>
  );
};

export default ShapTwoDaynamicCom;
