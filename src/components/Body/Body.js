import React, { Component } from "react";
import Card from "../Card/Card.js";

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = { currentPage: "home" };
  }

  // Gets the current style language
  getLanguageStyle() {
    let style = "cardEnglish";
    if (this.props.getLanguage() === "Hebrew") {
      style = "cardHebrew";
    }

    return style;
  }

  render() {
    return (
      <div>
        {<Card styleLanguage={this.getLanguageStyle()} currentCard={this.props.getCurrentCard()} />}
      </div>
    );
  }
}

export default Body;
