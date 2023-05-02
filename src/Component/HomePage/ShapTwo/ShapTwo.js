import React from "react";

const ShapTwo = ({ item }) => {
  return (
    <div className="shapeTwo bg-green-500 m-3 bor w-[fit-content] p-5 rounded text-2xl text-white ">
      <ul>
        <li>{item.name}</li>
        <li>{item.age}</li>
      </ul>
    </div>
  );
};

export default ShapTwo;
