import Missions from "./Missions";
import Technologies from "./Technologies";

const C_COMPETENCE = require("../donnees/constantesCompetence");

function Experience(props) {
  const experienceEnCours = C_COMPETENCE.listeExperience[props.indexExperience];
  const missions = [];
  for (let i = 0; i < experienceEnCours.missions.length; i++) {
    missions.push(
      <Missions indexMissions={i} indexExperience={props.indexExperience} />
    );
  }
  return (
    <div className="experience">
      <div className="cote-gauche">
        <div className="haut">
          <a href={experienceEnCours.lien} target="blank">
            <span className="societe">{experienceEnCours.societe}</span>
          </a>
          <div className="date">
            <span>de {experienceEnCours.dateDebut}</span>
            <span> à {experienceEnCours.dateFin}</span> <br />
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
