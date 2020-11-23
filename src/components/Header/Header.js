import React, { Component } from "react";
import Logo from "../Logo/Logo.js";
import NavBar from "../NabBar/NavBar";

class Header extends Component {
  render() {
    return (
      <div>
        <NavBar
          language={this.props.getLanguage()}
          titles={this.props.getTitles()}
          setCardName={this.props.setCard.bind(this)}
          setLanguage={this.props.setLanguage}
        />
        <Logo language={this.props.getLanguage()} />
      </div>
    );
  }
}

export default Header;
