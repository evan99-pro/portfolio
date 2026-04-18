import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut ! Je suis <span className="purple">AGBANZO Evan</span>{" "}
            habitant au <span className="purple">Togo, AFRICA</span>.
            <br />
            Je suis actuellement{" "}
            <span className="purple">ETUDIANT en informatique</span> à{" "}
            <span className="purple">L'ESIG GLOBAL SUCCESS</span>.
            <br />J'étudie{" "}
            <span className="purple">du réseau,du developpemnt,et la cybersécurité</span>.J’élargis constamment mes connaissances dans ces domaines. Bref,{" "}
            <span className="purple">J'aime tous ce qui touche l'informatique</span>.
            <br />
            <br />
            En dehors du code, j’aime pratiquer des activités qui me permettent de rester créatif et inspiré :
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer des jeux vidéos 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Lire des livres Informatiques ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager et explorer de nouvelles endroits 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "D’abord je fais fonctionner, ensuite j'améliore, puis j'optimise."{" "}
          </p>
          <footer className="blockquote-footer">Ma théorie</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
