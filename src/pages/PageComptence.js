import '../style/pageComp.scss';
import BarreProgression from '../components/competences/BarreProgression';
import CardComp from '../components/competences/CardComp';
import { useEffect, useContext } from 'react';
import { LangContext } from '../App';

const TEXTE_COMP = require("../donnees/competence/texteCompetences")

const PageComptence = () => {
    const lang = useContext(LangContext);

    let titre = TEXTE_COMP[lang].titre;
    let sousTitre = TEXTE_COMP[lang].sousTitre;

    let frontEnd = [];
    let backend = [];
    let devOps = [];
    let divers = [];

    TEXTE_COMP[lang].competence.frontend.map((comp, i) => {
        frontEnd.push(
            <BarreProgression nomComp={comp.nomComp} taille={comp.taille} key={i} />
        )
    });



    TEXTE_COMP[lang].competence.backend.map((comp, i) => {
        backend.push(
            <BarreProgression nomComp={comp.nomComp} taille={comp.taille} key={i} />
        )
    })


    TEXTE_COMP[lang].competence.devops.map((comp, i) => {
        devOps.push(
            <BarreProgression nomComp={comp.nomComp} taille={comp.taille} key={i} />
        )
    })


    TEXTE_COMP[lang].competence.divers.map((comp, i) => {
        divers.push(
            <BarreProgression nomComp={comp.nomComp} taille={comp.taille} key={i} />
        )
    })


    useEffect(() => {
    }, [lang])

    return (<div className="page-comp">
        <div className='contenu-comp'>
            <div className='text-comptence'>
                {titre}
                <span className='span-pres'>{sousTitre}
                </span>
            </div>
            <div className='contenu'>
                <CardComp titreCarte={"Frontend"}>
                    {frontEnd}
                </CardComp>

                <CardComp titreCarte={"Backend"}>
                    {backend}
                </CardComp>

                <CardComp titreCarte={"Dev ops"}>
                    {devOps}
                </CardComp>

                <CardComp titreCarte={lang === "fr" ? "Divers" : "Other"}>
                    {divers}
                </CardComp>
            </div>
        </div>
    </div>);
}

export default PageComptence;