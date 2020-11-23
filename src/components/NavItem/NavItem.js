import React, { Component } from "react";
import "./NavItem.css";
import Nav from "react-bootstrap/Nav";

class NavItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
    };
  }

  render() {
    let styleLanguage = "NavItemEnglish";
    if (this.props.language === "Hebrew") {
      styleLanguage = "NavItemHebrew";
    }
    return (
      <Nav.Item className={styleLanguage} onClick={() => this.props.setCard(this.props.text)}>
        <Nav.Link className="NavLink">{this.props.text} </Nav.Link>
      </Nav.Item>
    );
  }
}

export default NavItem;
