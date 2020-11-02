import React, { Component } from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

import Backdrop from "./Backdrop.js";
import NavButton from "./NavButton.js";
import SideDrawer from "./SideDrawer.js";
import "./navbar.css";

const NavContainer = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 25%;
    width: 100%;
    padding: 0 9.5%;
    background: yellow;
    z-index: 300;
    position: fixed;
`;

const LogoContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    @media (min-width: 1800px) { // ##Device = Desktops ##Screen = 1800px to higher resolution desktops //
        height: 100%;
        width: 115px;
        left: 15%;
    }
`;

class Navbar extends Component {
  state = {
    sideDrawerOpen: false,
  };
  backDropClick = () => {
    this.setState({
      sideDrawerOpen: false,
    });
  };
  navClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  close = () => {
    if (this.state.sideDrawerOpen) {
      this.setState({ sideDrawerOpen: false });
    }
  };

  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop clickHandler={this.backDropClick} />;
    }
    return (
      <div className="w-100" style={{ paddingBottom: "100px" }}>
        <div className="nav">
          <NavContainer
            className="nav-container"
            style={{ height: "70px", width: "100%" }}
          >
            <LogoContainer className="logo-container">
              <Link to="/"></Link>
            </LogoContainer>
            <p
              style={{ fontSize: "1.5rem", color: this.state.textColor }}
              className="navText"
            >
              <strong>{this.state.text}</strong>
            </p>

            <NavButton clickHandler={this.navClickHandler} />
          </NavContainer>
        </div>
        <SideDrawer
          logout={this.logout}
          show={this.state.sideDrawerOpen}
          close={this.close}
        />
        {backDrop}
      </div>
    );
  }
}

export default Navbar;
