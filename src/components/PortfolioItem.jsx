import React, { useState } from "react";
import Close from "../assets/close.svg";

const PortfolioItem = ({ img, title, details }) => {
  const [model, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!model);
  };

  return (
    <div className="portfolio__item">
      <img src={img} alt="" className="portfolio__img" />
      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__hover"></h3>
      </div>
      {model && (
        <div className="portfolio__model">
          <div className="portfolio__model-content">
            <img
              src={Close}
              alt=""
              className="model__close"
              onClick={toggleModal}
            />
            <h3 className="model__title">{title}</h3>
            <ul className="model__list grid">
              {details.map(({ icon, title, desc }, index) => {
                return (
                  <li className="model__item" key={index}>
                    <span className="item__icon">{icon}</span>
                    <div>
                      <span className="item__title">{title}</span>
                      <span className="item__details">{desc}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <img src={img} alt="" className="model__img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
