import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "./PhotoGallery.css";

class PhotoGallery extends Component {
  constructor(props) {
    super();
  }

  importAll(r) {
    return r.keys().map(r);
  }

  render() {
    const images = this.importAll(
      require.context("../../resources/img/Tzvika/good", false, /\.(png|jpe?g|svg|jpg)$/)
    );
    const varible = images.map((item) => {
      return {
        original: item,
      };
    });

    return (
      <ImageGallery
        showPlayButton={false}
        showThumbnails={false}
        showIndex={true}
        items={varible}
      />
    );
  }
}

export default PhotoGallery;
