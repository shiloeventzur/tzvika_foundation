import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./DownloadButton.css";
import file from "../../resources/ApplicationForm.pdf";

class DownloadButton extends Component {
  render() {
    let downloadLabel = "Apply for Scolorship";
    if (this.props.styleLanguage === "cardHebrew") {
      downloadLabel = "הרשמה למלגה";
    }

    return (
      <Button
        id="Button"
        variant="dark"
        className={`${this.props.styleLanguage}Button`}
        href={file}
        download="Application Form"
        onClick={this.props.popupEvent}
      >
        {downloadLabel}
      </Button>
    );
  }
}
export default DownloadButton;
