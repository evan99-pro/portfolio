import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const { 
    imgPath, 
    title, 
    description, 
    ghLink, 
    demoLink, 
    isBlog = false 
  } = props;

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>

        <div className="mt-4 d-flex justify-content-center flex-wrap gap-2">
          {/* Bouton GitHub - s'affiche seulement si ghLink est fourni et différent de "#" */}
          {ghLink && ghLink !== "null" && (
            <Button variant="primary" href={ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {/* Bouton Demo - s'affiche seulement si demoLink est fourni et différent de "#" */}
          {demoLink && demoLink !== "null" && (
            <Button 
              variant="primary" 
              href={demoLink} 
              target="_blank"
              
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;