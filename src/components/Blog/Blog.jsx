import React from "react";

import meth1 from "../Images/meth1.jpg";
import meth2 from "../Images/meth2.jpg";
import meth3 from "../Images/meth3.jpg";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="blog__intro">
          <a href="#">
            <div className="blog__img">
              <img src={meth1} alt="" />
            </div>
            <div className="blog__title">Развитие ребенка</div>
          </a>
          <a href="#">
            <div className="blog__img">
              <img src={meth2} alt="" />
            </div>
            <div className="blog__title">Воспитание ребенка</div>
          </a>
          <a href="#">
            <div className="blog__img">
              <img src={meth3} alt="" />
            </div>
            <div className="blog__title">Школьные вопросы</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
