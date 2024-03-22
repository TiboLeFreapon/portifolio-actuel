import { useState } from "react";
import { CaretDownFill } from "react-bootstrap-icons";

const C_COMPETENCE = require("../donnees/constantesCompetence");

function Taches(props) {
  const tacheEnCours = props.taches;
  const tacheAffiche = [];
  for (let i = 0; i < tacheEnCours.length; i++) {
    tacheAffiche.push(
      <>
        <span className="taches">{tacheEnCours[i]}</span>
      </>
    );
  }

  return (
    <div
      className={"taches-contenu"}
    >
      {tacheAffiche}
    </div>
  );
}

function Missions(props) {
  const missionEnCours =
    C_COMPETENCE.listeExperience[props.indexExperience].missions[
      props.indexMissions
    ];
  return (
    <div className="missions" >
      <div className={"nom-mission"}>
        {missionEnCours.name}
      </div>
      <div className={"resume"}>
        <span>{missionEnCours.resume}</span>
      </div>
      <Taches taches={missionEnCours.taches} />
    </div>
  );
}

export default Missions;