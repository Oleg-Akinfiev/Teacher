import React from "react";

import class1 from "../Images/class1.jpg";
import class2 from "../Images/class2.jpg";
import class3 from "../Images/class3.jpg";
import class4 from "../Images/class4.jpg";
import class5 from "../Images/class5.jpg";

const Class = () => {
  return (
    <div className="class">
      <div className="container">
        <div className="class__title">Как проходит обучение в классе</div>
        <div className="class__img">
          <img className="one" src={class1} alt="" />
          <img src={class2} alt="" />
          <img src={class3} alt="" />
          <img src={class4} alt="" />
          <img src={class5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Class;
