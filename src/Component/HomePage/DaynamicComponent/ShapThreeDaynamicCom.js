import React from "react";

const ShapThreeDaynamicCom = ({ item }) => {
  return (
    <div>
      <div className="text-3xl p-5 bg-black text-[orange] my-5">
        <div>
          <div>{item.name}</div>
          <div>{item.age}</div>
        </div>
      </div>
    </div>
  );
};

export default ShapThreeDaynamicCom;
