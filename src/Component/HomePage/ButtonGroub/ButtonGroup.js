import React from "react";

const ButtonGroupp = ({ children }) => {
  let elementCloneCh = React.Children.map(children, (child) => {
    let text = child.props.children + " withIn Group";

    return React.cloneElement(
      child,
      {
        color: "red",
        bground: "yellow",
        customeClasse: "group",
        ocnlikk: (innertext) => console.log(innertext),
      },
      text
    );
  });

  return (
    <div>
      <div>{elementCloneCh}</div>
    </div>
  );
};

export default ButtonGroupp;

// import React from "react";

// const ButtonGroupp = ({ children }) => {

// let elementCloneCh=React.Children.map(children,(child)=>{
//   let text = child.props.children + " HHHHHH";
//   return  React.cloneElement(
//     child,
//     {
//       color: "red",
//       bground: "yellow",
//       customeClasse: "group",
//       ocnlikk:(innertext)=>console.log(innertext)
//     },
//     text
//   );
// })

//   return (
//     <div>
//       <div>{elementCloneCh}</div>
//     </div>
//   );
// };

// export default ButtonGroupp;
