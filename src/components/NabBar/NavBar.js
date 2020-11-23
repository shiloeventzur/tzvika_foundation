import React, { Component } from "react";

// Import components
import NavItem from "../NavItem/NavItem.js";
import Nav from "react-bootstrap/Nav";
import LanguageButton from "../LanguageButton/LanguageButton.js";

// Import style
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <Nav className="navBar">
        <div className="navItems">
          {this.props.titles.map((value, index) => {
            return (
              <NavItem
                key={index}
                text={value}
                language={this.props.language}
                setCard={this.props.setCardName.bind(this)}
              />
            );
          })}
        </div>
        <LanguageButton
          className="languageButton2"
          getLanguage={this.props.language}
          setLanguage={this.props.setLanguage}
        />
      </Nav>
    );
  }
}

export default NavBar;
