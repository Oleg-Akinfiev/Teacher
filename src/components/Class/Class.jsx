import "../styles/index.scss";

import school from "../Images/school.jpg";
import school2 from "../Images/school2.jpg";
import school3 from "../Images/school3.jpg";
import school4 from "../Images/school4.jpg";
import school5 from "../Images/school5.jpg";

const Class = () => {
  return (
    <div className="container">
      <div className="class">
        <div className="class__title">Как проходит обучение в классе</div>
        <div className="class__img">
          <img className="one" src={school} alt="" />
          <img src={school2} alt="" />
          <img src={school3} alt="" />
          <img src={school4} alt="" />
          <img src={school5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Class;
