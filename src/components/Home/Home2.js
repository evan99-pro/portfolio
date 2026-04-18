import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMETTEZ MOI DE <span className="purple">PRESENTER </span> 
            </h1>
            <p className="home-about-body">
              Je suis un étudiant en informatique passionné
               par la transformation d’idées en projets concrets et évolutifs.
                Au fil de mon apprentissage, j’explore différentes technologies
                 et je développe un intérêt particulier pour la création de systèmes
                  performants et d’expériences utilisateur intuitives.
              <br />
              <br />
              J’ai de l’expérience avec 
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, le langage C et les technologies web{" "}
                </b>
              </i>
              — Je m’intéresse également fortement aux réseaux et à la cybersécurité
              <br />
              <br />
              Passionné par l’informatique, je m’efforce chaque jour de transformer
               mes idées en solutions concrètes, en développant
              <i>
                <b className="purple">
                  {" "}
                  des compétences en développement logiciel, en réseaux et en cybersécurité,{" "}
                </b>
              </i>
              afin de concevoir des systèmes à la fois efficaces, sécurisés et évolutifs.
              <br />
              <br />
              Mes derniers technologies/formations apprises sont
              <b className="purple"> Django </b> un framework python (developpement), en réseau et cybersécurité respectivement , {" "}
              <i>
                <b className="purple">du subnetting</b> et {" "}
                <b className="purple">des challenges CTF</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
