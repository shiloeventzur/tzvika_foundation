import React, { Component } from "react";
import CoverImage from "../CoverImage/CoverImage.js";
import Paragraph from "../Paragraph/Paragraph.js";
import DownloadButton from "../DownloadButton/DownloadButton.js";
import PhotoGallery from "../PhotoGallery/PhotoGallery.js";
import Popup from "../PopupMessage/PopupMessage.js";

class Card extends Component {
  constructor(props) {
    super();
    this.state = { showPopup: false };
  }

  // Returns the Spacil data that isn't paragraphs that needed to render.
  getExtraDataToRender() {
    let extraDataToRender = null;

    // Render donation page
    if (this.props.currentCard === "Donate") {
      extraDataToRender = "DonationForm";

      // Render download button for the form.
    } else if (this.props.currentCard === "The scholarship") {
      extraDataToRender = (
        <DownloadButton
          styleLanguage={this.props.styleLanguage}
          popupEvent={this.togglePopup.bind(this)}
        />
      );

      // Render photo gallary.
    } else if (this.props.currentCard === "Tzvika Levi") {
      extraDataToRender = <PhotoGallery />;
    }

    return extraDataToRender;
  }

  // Pops up the message that explains what to do with the form after filling it.
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  // Returns popup magges if nessasery.
  showPopupMessage() {
    let dataToReturn = null;
    if (this.state.showPopup) {
      dataToReturn = (
        <Popup closePopup={this.togglePopup.bind(this)} lang={this.props.styleLanguage} />
      );
    }

    return dataToReturn;
  }

  render() {
    return (
      <div>
        <CoverImage />
        <Paragraph currentCard={this.props.currentCard} styleLanguage={this.props.styleLanguage} />
        {this.getExtraDataToRender()}
        {this.showPopupMessage()}
      </div>
    );
  }
}

export default Card;
