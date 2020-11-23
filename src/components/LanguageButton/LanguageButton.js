import React, { Component } from "react";
import "./LanguageButton.css";
import Nav from "react-bootstrap/Nav";

class LanguageButton extends Component {
  render() {
    let hebrewStyle = "selected",
      englishStyle = "nonSelected";

    if (this.props.getLanguage === "English") {
      englishStyle = "selected";
      hebrewStyle = "nonSelected";
    }

    return (
      <Nav.Item className="LanguageSwitcher" onClick={this.props.setLanguage}>
        <Nav.Link className={hebrewStyle}> עב</Nav.Link>
        <Nav.Link className={englishStyle}>En </Nav.Link>
      </Nav.Item>
    );
  }
}
export default LanguageButton;
