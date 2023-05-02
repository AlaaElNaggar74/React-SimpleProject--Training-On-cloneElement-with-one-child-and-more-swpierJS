import React from "react";

const ShapThree = ({ item }) => {
  return (
    <div className="shapeThree bg-yellow-500 m-3 w-[fit-content] p-5 rounded-lg text-2xl">
      <div>
        <div>{item.name}</div>
        <div>{item.age}</div>
      </div>
    </div>
  );
};

export default ShapThree;
