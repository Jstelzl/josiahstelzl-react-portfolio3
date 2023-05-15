import React, { Component } from "react";
import currentPhoto from "../../assets/josiah.jpg";

export default class index extends Component {
  render() {
    return (
      <div className="container-fluid bg-dark mx-auto">
        <img className="img-fluid mw-75 mx-auto d-block"  height={800} width={800} src={currentPhoto} />
        <div className="card mw-75 bg-dark mx-auto d-block">
          <div className="card-body text-info">
            <h5 className="card-title text-center">About Me</h5>
            <p className="card-text text-center">
            Certified Full Stack Web Developer with experience in customer services and on premise instruction. 
            Self starter, team oriented, who is passionate about developing apps using the 
            latest technologies with an eye towards user experience (UX). Strengths in 
            creativity, teamwork, and building projects from ideation to execution. 
            </p>
          </div>
        </div>
      </div>
    );
  }
}