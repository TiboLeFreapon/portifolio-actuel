
import { useContext } from "react";
import {LangContext} from "../../App"

const C_COMPETENCE = require("../../donnees/experience/texteExperience");

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

  const lang = useContext(LangContext);
  const missionEnCours =
    C_COMPETENCE[lang].listeExperience[props.indexExperience].missions[
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