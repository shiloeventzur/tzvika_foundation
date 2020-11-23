import React, { Component } from "react";
import "./Logo.css";
import fundationLogoEnglish from "../../resources/img/Logo/English.png";
import fundationLogoHebrew from "../../resources/img/Logo/Hebrew.png";
import Image from "react-bootstrap/Image";

class Logo extends Component {
  constructor(props) {
    super();
  }

  render() {
    let logoLanguage = fundationLogoEnglish;
    if (this.props.language === "Hebrew") {
      logoLanguage = fundationLogoHebrew;
    }
    return (
      <div className="logoDiv">
        <Image src={logoLanguage} className="logo" alt="logo" />
      </div>
    );
  }
}

export default Logo;
