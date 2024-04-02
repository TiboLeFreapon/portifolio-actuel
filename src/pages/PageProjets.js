import '../style/pageProjet.scss';
import Projet from '../components/projet/Projet';
import { useContext, useEffect } from 'react';
import { LangContext } from '../App';
const TEXT_PROJET = require('../donnees/projet/texteProjet.js')

const PageProjet = () => {
    const lang = useContext(LangContext);
    let afficherProjet = [];

    TEXT_PROJET[lang].projets.map((projet, index) => {
        const projetPro = projet.projetPro ? TEXT_PROJET[lang].perso : TEXT_PROJET[lang].pro;
        afficherProjet.push(<Projet key={index} lien={projet.lien} nom={projet.nom} projetPro={projetPro} description={projet.description} imgFond={projet.imgFond} nomClass={projet.className}/>);
    });

    useEffect(()=>{
    },[lang])

    return (
        <div className="projets">
            <div className="pres">
                {TEXT_PROJET[lang].titre} <span>{TEXT_PROJET[lang].sousTitre}</span>
            </div>
            <div className="contenu-projet">
                <div className="overflow-affiche">
                    {afficherProjet}
                </div>
            </div>
        </div>
    );
}

export default PageProjet;