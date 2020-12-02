import React from "react";
import "./PopupMessage.css";
import SuccessIcon from "../SuccessIcon/SuccessIcon.js";
import ClosePopup from "../ClosePopup/ClosePopup.js";

class PopupMessage extends React.Component {
  render() {
    let popupTitle = "Great!",
      nextTitle = "What do I do next?",
      firstStep = "1. Fill the form you just download.",
      secondStep = "2. Send it to our email address:",
      goodLuck = "Good Luck";

    if (this.props.lang === "cardHebrew") {
      popupTitle = "מעולה!";
      nextTitle = "מה עושים עכשיו?";
      firstStep = "1. מלא את הטופס שזה עתה הורדת.";
      secondStep = "2. שלח את הטופס לכתובת המייל: ";
      goodLuck = "בהצלחה!";
    }

    return (
      <div className={"popup_" + this.props.lang} onClick={this.props.closePopup}>
        <div className={"iconLand_" + this.props.lang}>
          <ClosePopup />
          <SuccessIcon />
          <h2 className={"title_pop_" + this.props.lang}>{popupTitle}</h2>
        </div>
        <div className={"popup_inner_" + this.props.lang}>
          <h3 className={"nextSteps_" + this.props.lang}>{nextTitle}</h3>
          <h4 className={"steps_" + this.props.lang}>
            {firstStep}
            <br />
            {secondStep}
            <a
              id="emailAdress"
              className={"steps_" + this.props.lang}
              style={{ margin: "0.5%" }}
              href="mailto:applications@kerentzvika.com"
            >
              applications@kerentzvika.com
            </a>
          </h4>
          <h3 className={"nextSteps_" + this.props.lang}>{goodLuck}</h3>
        </div>
      </div>
    );
  }
}

export default PopupMessage;
