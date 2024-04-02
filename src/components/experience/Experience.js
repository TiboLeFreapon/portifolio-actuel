import Missions from "./Missions";
import Technologies from "./Technologies";
import { useContext } from "react";
import {LangContext} from "../../App"

const C_COMPETENCE = require("../../donnees/experience/texteExperience");

function Experience(props) {
  
  const lang = useContext(LangContext);
  const experienceEnCours = C_COMPETENCE[lang].listeExperience[props.indexExperience];
  const missions = [];
  for (let i = 0; i < experienceEnCours.missions.length; i++) {
    missions.push(
      <Missions indexMissions={i} indexExperience={props.indexExperience} />
    );
  }

  const date = lang === 'fr' ? (<span>de {experienceEnCours.dateDebut} à {experienceEnCours.dateFin}.</span>) :(<span>{experienceEnCours.dateDebut} to {experienceEnCours.dateFin}.</span>)

  return (
    <div className="experience">
      <div className="cote-gauche">
        <div className="haut">
          <a href={experienceEnCours.lien} target="blank">
            <span className="societe">{experienceEnCours.societe}</span>
          </a>
          <div className="date">
            {date}<br /><br />
            <span>{experienceEnCours.contrat}</span>
          </div>
        </div>
        <div className="bas">
          <Technologies indexExperience={props.indexExperience} />
        </div>
      </div>
      <div className="cote-droit">

        {missions}
      </div>
    </div>
  );
}

export default Experience;
