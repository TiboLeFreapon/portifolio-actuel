import { useContext } from "react";
import { LangContext } from "../../App";
const C_COMPETENCE = require("../../donnees/experience/texteExperience");

function Technologies(props) {

  const lang = useContext(LangContext);
  const renduTechno = [];
  const listeTechno =
    C_COMPETENCE[lang].listeExperience[props.indexExperience].technologie;
  for (let i = 0; i < listeTechno.length; i++) {
    renduTechno.push(<span className="techno">{listeTechno[i]}</span>);
  }
  return (
    <div className="technologies">
      <div className="titre-techno">Technologies utilsées</div> 
      <div className="techno-utilise">{renduTechno}</div>
    </div>
  );
}

export default Technologies;