import React from "react";
import logo from "../assets/navbarlogo.png";
import jobvanbar from "../assets/jobvanbar.png";

export default function jobs() {
  return (
    <div className="jobs__container__main">
      <img src={jobvanbar} alt="" />
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={logo} alt="" />
        </div>
        <div className="nabar__buttons">
          <a className="job" href="#">Jobs</a>
          <a className="job" href="#">Professionals</a>
          <a className="job" href="#">traineeships</a>
          <a className="job" href="#">Clients</a>
          <a className="job" href="#">About us</a>
        </div>
      </div>
      <div className="jobs__container__main__heading">Lorem Ipsum is simply dummy text of thee 1500s</div>
      <div className="jobs__container__main__heading__inputs">
        <input type="text" placeholder="Enter your job" />
        <input type="text" placeholder="Zip code or place" />
      </div>
    </div>
  );
}
