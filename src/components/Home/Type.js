import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Développeur web/logiciel",
          "Administrateurs Systèmes & Reseaux",
          "Cybersécurité",
          "Bientôt de l'IA",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
