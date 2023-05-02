import React from "react";
import Button from "@mui/material/Button";
import Buttonn from "./Button/Button";
import { ButtonGroup, List } from "@mui/material";
import ButtonGroupp from "./ButtonGroub/ButtonGroup";
import ShapOne from "./ShapOne/ShapOne";
import Listt from "./List/Listt";
import ShapTwo from "./ShapTwo/ShapTwo";
import ShapThree from "./ShapThree/ShapThree";
import ShapOneDaynamicCom from "./DaynamicComponent/ShapOneDaynamicCom";
import ShapTwoDaynamicCom from "./DaynamicComponent/ShapTwoDaynamicCom";
import ShapThreeDaynamicCom from "./DaynamicComponent/ShapThreeDaynamicCom";
import SwiperCom from "./Swipper/SwiperCom";



const HomePage = () => {
  const userData = [
    { id: 1, name: "Alaa1", email: "alaa1@gmail.com", age: 122 },
    { id: 2, name: "Alaa2", email: "alaa2@gmail.com", age: 255 },
    { id: 3, name: "Alaa3", email: "alaa3@gmail.com", age: 356 },
    { id: 4, name: "Alaa4", email: "alaa4@gmail.com", age: 452 },
    { id: 5, name: "Alaa5", email: "alaa5@gmail.com", age: 523 },
  ];
  const componentData = [
    {
      componentName: ShapOneDaynamicCom,
      data: { id: 1, name: "Alaa1", email: "alaa1@gmail.com", age: 122 },
    },
    {
      componentName: ShapThreeDaynamicCom,
      data: { id: 5, name: "Alaa5", email: "alaa5@gmail.com", age: 523 },
    },
    {
      componentName: ShapTwoDaynamicCom,
      data: { id: 2, name: "Alaa2", email: "alaa2@gmail.com", age: 223 },
    },
  ];

  return (
    <div className="w-11/12 mx-auto">
      <h1>Home Page ......</h1>
      <Buttonn ocnlikk={(innertext) => console.log(innertext)}>Alaaa</Buttonn>
      <ButtonGroupp>
        <Buttonn>Second Button</Buttonn>
        <Buttonn>X Button</Buttonn>
      </ButtonGroupp>

      <Listt items={userData}>
        <ShapOne />
      </Listt>

      <Listt items={userData}>
        <ShapTwo />
      </Listt>
      <Listt items={userData}>
        <ShapThree />
      </Listt>
      <div className="dynamiccomponent py-10">
        {componentData.map((com) => (
          <com.componentName item={com.data} key={com.data.id} />
        ))}
      </div>
      <SwiperCom  items={userData}>
        <ShapOne />
      </SwiperCom>
      <SwiperCom  items={userData}>
        <ShapTwo />
      </SwiperCom>
      <SwiperCom  items={userData}>
        <ShapThree />
      </SwiperCom>

    </div>
  );
};

export default HomePage;
