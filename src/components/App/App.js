import React, { Component } from "react";
import Header from "../Header/Header.js";
import Body from "../Body/Body.js";
import Footer from "../Footer/Footer.js";
import pageData from "../../resources/json/PageData.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      language: "Hebrew",
      languageIndex: 1,
      currentCard: pageData.data[0],
      currentCardName: "About",
    };

    // Bind language
    this.setLanguage = this.setLanguage.bind(this);
    this.getLanguage = this.getLanguage.bind(this);

    // Bind titles
    this.getTitles = this.getTitles.bind(this);

    // Bind cards
    this.setCurrentCard = this.setCurrentCard.bind(this);
    this.getCurrentCardName = this.getCurrentCardName.bind(this);
    this.getCurrentCardData = this.getCurrentCardData.bind(this);
  }

  //#region LANGUAGE

  // Gets the current language of the page.
  getLanguage() {
    return this.state.language;
  }

  // Sets the current language of the page.
  setLanguage() {
    this.setState((pervState) => {
      let newLanguage = "English",
        newIndex = 0;
      if (pervState.language === "English") {
        newLanguage = "Hebrew";
        newIndex = 1;
      }

      return { language: newLanguage, languageIndex: newIndex };
    });
  }

  //#endregion

  //#region TITLES

  // Gets the titles from database to the navbar.
  getTitles() {
    let titles = pageData.data.map((value, index) => {
      return value.title[this.state.languageIndex];
    });

    if (this.state.languageIndex === 1) {
      titles = titles.reverse();
    }
    return titles;
  }

  //#endregion

  //#region CARDS

  // Sets the current card name showen in the body.
  setCurrentCard(cardName) {
    let newCardName = "About",
      newCardIndex = 0;
    pageData.data.forEach((value, index) => {
      if (value.title[0] === cardName || value.title[1] === cardName) {
        newCardName = value.title[0];
        newCardIndex = index;
      }
    });

    this.setState((pervState) => {
      return { currentCardName: newCardName, currentCard: pageData.data[newCardIndex] };
    });
  }

  // Gets the current card name showen in the body.
  getCurrentCardName() {
    return this.state.currentCardName;
  }

  // Gets the current card data to show in body component.
  getCurrentCardData() {
    let fullCurrentCard, currentCard;
    pageData.data.forEach((value) => {
      if (value.title[0] === this.state.currentCardName) {
        fullCurrentCard = value;
      }
    });

    currentCard = {
      title: fullCurrentCard.title[this.state.languageIndex],
      paragraph: fullCurrentCard.paragraph[this.state.languageIndex],
    };

    return currentCard;
  }

  //#endregion

  render() {
    return (
      <div className="app">
        <Header
          getLanguage={this.getLanguage.bind(this)}
          getTitles={this.getTitles}
          setCard={this.setCurrentCard}
          setLanguage={this.setLanguage}
        />
        <Body
          getLanguage={this.getLanguage.bind(this)}
          getCurrentCard={this.getCurrentCardName.bind(this)}
        />
        <Footer getLanguage={this.getLanguage.bind(this)} />
      </div>
    );
  }
}

export default App;
