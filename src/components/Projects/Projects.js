import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes Derniers <strong className="purple">Projets</strong>
        </h1>
        <p style={{ color: "white" }}>
          Ici je presente quelques uns de mes derniers projets
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Simulation du réseau d'une entreprise"
              description="Mise en place d'une architecture réseau segmentée en vlan pour une entreprise. Cliquez sur le lien demo pour voir tous les test et en savoir plus"
              ghLink="null"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Dévéloppement d'un mini réseau sociaux avec DJANGO"
              description="Afin de mettre en pratique le nouveau framework DJANGO que j'étais justement entrain d'apprendre , Je decide de faire ce projet qui permettra à tous les utilisteurs de s'inscrire et de pouvoir poster et voires des photos et les commenter. Django pour le backend et du html/bootstrap pour le front"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Base de donnée d'une hopital"
              description="Dans le cadre d'une évaluation en l'UE Base de Données dans mes etudes , j'ai crée une BDD d'une clinique gérant presque toutes les entités qu'on pourrait avoir. Suivez ce projet de plus près en cliquant  les boutons en bas "
              ghLink="#"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Prise de contrôle d'une machine"
              description="Mise en place d’un environnement de test en cybersécurité à l’aide de Kali Linux et de systèmes Windows 7 virtualisés.
Simulation d’une attaque contrôlée via Metasploit dans un cadre éthique.
Identification et exploitation d’une vulnérabilité menant à un accès distant sur la machine cible."
              ghLink="null"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Système de détection d’intrusion (IDS)"
              description="Mise en place d’un système de détection d’intrusion basé sur Snort pour surveiller le trafic réseau en temps réel et Simulation d’attaques contrôlées afin de tester la détection et améliorer les règles IDS"
              ghLink="null"
              demoLink="#" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Mini application VBA"
              description="Mise en place de macros permettant le traitement automatique de données (nettoyage, calculs, génération de rapports) et
Développement d’interfaces simples (formulaires) pour faciliter l’utilisation par des utilisateurs non techniques."
              ghLink="null"
              demoLink="#"       />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
