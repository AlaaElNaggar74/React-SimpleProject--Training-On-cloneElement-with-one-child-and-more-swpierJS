import React from "react";

const Buttonn = ({ color, bground, children, customeClasse, ocnlikk }) => {
  return (
    <div>
      <div
        className={`${
          customeClasse ? "button " + customeClasse : "button"
        } w-[fit-content] p-2 rounded border border-black border-4 px-5 mt-8 text-3xl text-center `}
        style={{ background: bground, color: color }}
        onClick={() => ocnlikk(children)}
      >
        {children}
      </div>
    </div>
  );
};

export default Buttonn;
