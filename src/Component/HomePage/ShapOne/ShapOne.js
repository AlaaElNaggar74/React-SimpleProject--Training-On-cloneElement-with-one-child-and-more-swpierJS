import React from "react";

const ShapOne = ({item}) => {

  return (
    <div className="shapeOne bg-red-500 m-3 w-[fit-content] p-5 rounded-full text-2xl">
      <div>
        <div>{item.name}</div>
        <div>{item.age}</div>
      </div>
    </div>
  );
};

export default ShapOne;
