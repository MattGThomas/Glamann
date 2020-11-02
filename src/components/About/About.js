import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
// import threed from "../../images/new_logos/3d_logo.jpg";
import "./about.css";
class About extends Component {
  render() {
    return (
      <div className="about">
        {/* <h2 className="reasons-1" s>
          <strong>About the traphouse</strong>
        </h2> */}
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <img src="https://placedog.net/640/480?random" />
            </MDBCol>
            <MDBCol>
              Born and raised in Wichita, Michael is a lifelong Kansan. Michael
              studied Criminal Justice at Washburn University, earning his
              Bachelor’s in 2015. His passion for history and human rights drove
              an interest in criminal justice reform leading to law school.
              Michael met his now wife, a local Emporian, at Washburn and they
              have two young daughters they cherish very much. In 2020, they
              relocated to his wife’s hometown to open Glamann Law Office. In
              his free time, Michael is an avid sports enthusiast who enjoys
              technology, video games and local coffee.
              <div style={{ paddingTop: "5%" }}>
                <h1>J. Michael Glamann</h1>
                <p>Attorney</p>
                <span>some more shit</span>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow></MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default About;
