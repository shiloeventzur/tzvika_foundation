import React, { Component } from "react";
import "./Board.css";
import BoardMember from "../BoardMember/BoardMember.js";
import Image from "react-bootstrap/Image";
import Avner from "../../resources/img/Board/Avner.png";
import Dotan from "../../resources/img/Board/Dotan.png";
import Iri from "../../resources/img/Board/Iri.png";
import Yaael from "../../resources/img/Board/Yaael.png";
import Shlomo from "../../resources/img/Board/Shlomo.png";
import Dani from "../../resources/img/Board/Dani.png";
import Igal from "../../resources/img/Board/Igal.png";
import Dan from "../../resources/img/Board/Dan.png";

class Board extends Component {
  constructor(props) {
    super();
  }

  GetBoard() {
    if (this.props.language === "Hebrew") {
      return (
        <div className="memberBoard">
          <BoardMember
            image={<Image src={Avner} className="member" />}
            language={`Hebrew`}
            name="אבנר צור"
            title={`יו"ר`}
          ></BoardMember>
          <BoardMember
            image={<Image src={Dotan} className="member" />}
            language={`Hebrew`}
            name="דותן לוי"
            title={`מנכ"ל`}
          />
          <BoardMember
            image={<Image src={Iri} className="member" />}
            language={`Hebrew`}
            name="עירי כהן"
            title={`ועדת ביקורת`}
          />
          <BoardMember
            image={<Image src={Yaael} className="member" />}
            language={`Hebrew`}
            name="יעל שלף"
            title={`ועדת ביקורת ומשאבי אנוש  `}
          />
          <BoardMember
            image={<Image src={Igal} className="member" />}
            language={`Hebrew`}
            name="יגאל רינגרט"
            title={`גזבר`}
          />

          <BoardMember
            image={<Image src={Shlomo} className="member" />}
            language={`Hebrew`}
            name="שלמה טיסר"
            title={`חבר קרן`}
          />
          <BoardMember
            image={<Image src={Dani} className="member" />}
            language={`Hebrew`}
            name="דני פריד"
            title={`חבר קרן`}
          />

          <BoardMember
            image={<Image src={Dan} className="member" />}
            language={`Hebrew`}
            name="דן לינדנפלד "
            title={`חבר קרן`}
          />
        </div>
      );
    }

    return (
      <div className="memberBoard">
        <BoardMember
          image={<Image src={Avner} className="member" />}
          language={`English`}
          name="Avner Tzur"
          title={`Chairman`}
        />
        <BoardMember
          image={<Image src={Dotan} className="member" />}
          language={`English`}
          name="Dotan Levi"
          title={`CEO`}
        />
        <BoardMember
          image={<Image src={Iri} className="member" />}
          language={`English`}
          name={`Iri Kahn`}
          title={`Audit Committee `}
        />
        <BoardMember
          image={<Image src={Yaael} className="member" />}
          language={`English`}
          name={`Yael Shelef`}
          title={`Audit Committee and HR`}
        />
        <BoardMember
          image={<Image src={Igal} className="member" />}
          language={`English`}
          name={`Yigal Ringart`}
          title={`Treasurer`}
        />

        <BoardMember
          image={<Image src={Shlomo} className="member" />}
          language={`English`}
          name={`Shlomo Tisser`}
          title={`Board Member`}
        />
        <BoardMember
          image={<Image src={Dani} className="member" />}
          language={`English`}
          name={`Dani Frid`}
          title={`Board Member`}
        />

        <BoardMember
          image={<Image src={Dan} className="member" />}
          language={`English`}
          name={`Dan Lindenfeld`}
          title={`Board Member`}
        />
      </div>
    );
  }

  render() {
    return this.GetBoard();
  }
}
export default Board;
