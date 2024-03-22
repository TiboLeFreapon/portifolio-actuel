const C_COMPETENCE = require("../donnees/constantesCompetence");

function Technologies(props) {
  const renduTechno = [];
  const listeTechno =
    C_COMPETENCE.listeExperience[props.indexExperience].technologie;
  for (let i = 0; i < listeTechno.length; i++) {
    renduTechno.push(<span className="techno">{listeTechno[i]}</span>);
  }
  return (
    <div className="technologies">
      <div className={"button-mission"}>Technologies utilsées</div> <br />
      <div className="techno-utilise">{renduTechno}</div>
    </div>
  );
}

export default Technologies;