import React, { Component } from "react";
import "./BoardMember.css";

class BoardMember extends Component {
  constructor(props) {
    super();
  }

  render() {
    let nameLanguageStyle = "nameEnglish",
      titleLanguageStyle = "titleEnglish";
    if (this.props.language === "Hebrew") {
      nameLanguageStyle = "nameHebrew";
      titleLanguageStyle = "titleHebrew";
    }

    return (
      <div>
        {this.props.image}
        <p className={nameLanguageStyle}>{this.props.name}</p>
        <p className={titleLanguageStyle}>{this.props.title}</p>
      </div>
    );
  }
}
export default BoardMember;
