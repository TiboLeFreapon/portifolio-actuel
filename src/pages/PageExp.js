
import Experience from "../components/experience/Experience";
import "../style/pageExp.scss";
import { useContext } from "react";
import { LangContext } from "../App";

const C_COMPETENCE = require("../donnees/experience/texteExperience");

function ContenuExperience(props) {

    const lang = useContext(LangContext);
    let contenuExperience = [];
    for (let i = 0; i < C_COMPETENCE[lang].listeExperience.length; i++) {
        contenuExperience.push(
            <Experience indexExperience={i} key={"experience-" + i} />
        );
    }

    return (
        <div className="page-experiences">
            <div className='text-exp'>
                <span className='pres'>
                    {C_COMPETENCE[lang].titre}
                    <span >
                        {C_COMPETENCE[lang].sousTitre}
                    </span>
                </span>
            </div>
            <div className="contenu-exp">
                {contenuExperience}
            </div>
        </div>);
}

export default ContenuExperience;
