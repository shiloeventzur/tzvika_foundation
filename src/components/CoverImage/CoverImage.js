import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import "./CoverImage.css";

class CoverImage extends Component {
  render() {
    return (
      <div>
        <div className="imageBackground">
          <Image
            src={require("../../resources/img/Cover/Banner.jpg")}
            className="cover"
            alt="coverPhoto"
          />
        </div>
      </div>
    );
  }
}

export default CoverImage;
