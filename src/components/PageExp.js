
import Experience from "./Experience";
import "../style/pageExp.scss"

const C_COMPETENCE = require("../donnees/constantesCompetence");

function ContenuExperience(props) {
    let contenuExperience = [];
    for (let i = 0; i < C_COMPETENCE.listeExperience.length; i++) {
        contenuExperience.push(
            <Experience indexExperience={i} key={"experience-" + i} />
        );
    }

    return (
        <div className="page-experiences">
            <div className='text-exp'>
                <span className='pres'>
                    Experiences.
                    <span > Voici mes 4 années d'expériences dans le web.
                    </span>
                </span>
            </div>
            <div className="contenu-exp">
                {contenuExperience}
            </div>
        </div>);
}

export default ContenuExperience;
