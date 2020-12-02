import React, { Component } from "react";
import "./Footer.css";
import Leaf from "../../resources/img/Footer/Leaf.png";
import Image from "react-bootstrap/Image";

class Footer extends Component {
  constructor(props) {
    super();
  }

  getStyleLanguage() {
    if (this.props.getLanguage() === "Hebrew") {
      return "footerObjectHebrew";
    }

    return "footerObjectEngilsh";
  }

  getDonationAnker() {
    if (this.props.getLanguage() === "Hebrew") {
      return <div href="/#">בנק הפועלים — סניף: 723 — מספר חשבון: 623320</div>;
    }

    return <div href="/#">Hapoalim Bank — Branch: 723 — Number: 623320</div>;
  }

  render() {
    return (
      <div>
        <Image src={Leaf} className="leaf" alt="a" />
        <div className={this.getStyleLanguage()}>
          <div className="verticalLine">|</div>
          &emsp;
          {this.getDonationAnker()}
          &emsp;
          <div className="verticalLine">|</div>
          &emsp;
          <a href={`mailto: contact@kerentzvika.com`} className="footerMailLink">
            contact@kerentzvika.com
          </a>
          &emsp;
          <div className="verticalLine">|</div>
        </div>
      </div>
    );
  }
}

export default Footer;
