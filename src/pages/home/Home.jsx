import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Krushant Koshti</span><br/>
            Front-End Web developer
          </h1>
          <p className="home__discription">
            I am Front-End Developer.I Have Complete my bachelor degree in bca
            from president institute of computer application My technichal skill
            Html,css,javascript,Reactjs...
          </p>
          <Link to="/about" className="button">
            More About Me{''}
            <span className="button__icon">
                <FaArrowRight />
            </span>
          </Link>
        </div>
      <div className="color__block"></div>
      </div>
    </section>
  );
};

export default Home;
