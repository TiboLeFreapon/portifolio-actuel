import { useState, useContext } from "react";
import { useEffect } from "react";
import { LangContext } from "../../App";
const TEXTE = require("../../donnees/acc/textAcc");


const PanneauAccueil = () => {

    const lang = useContext(LangContext);
    
    const [ancienneLang, setAncienneLang] = useState(lang)
    const [textAffichayA, settextAffichayA] = useState("");
    const [textAffichayB, settextAffichayB] = useState("");
    const [textAffichayC, settextAffichayC] = useState("");
    const [textAffichayD, settextAffichayD] = useState("");
    const [textAffichayE, settextAffichayE] = useState("");

    const texteA = TEXTE[lang].texte1;
    const texteB = TEXTE[lang].texte2;
    const texteC = TEXTE[lang].texte3;
    const texteD = TEXTE[lang].texte4;
    const texteE = TEXTE[lang].texte5;

    //On test si l'ancienne langue et la nouvelle son les mêmes pour pas avoir de bogue lors du changement de langue
    //dans le cas ou l'animation n'est pas fini.
    useEffect(() => {
        if(lang === ancienneLang){
        if (textAffichayA.length < texteA.length) {
            setTimeout(() => {
                settextAffichayA(textAffichayA + texteA[textAffichayA.length]);
            }, 150)
        } else if (textAffichayB.length < texteB.length) {
            setTimeout(() => {
                settextAffichayB(textAffichayB + texteB[textAffichayB.length]);
            }, 150)
        } else if (textAffichayC.length < texteC.length) {
            setTimeout(() => {
                settextAffichayC(textAffichayC + texteC[textAffichayC.length]);
            }, 150)
        } else if (textAffichayD.length < texteD.length) {
            setTimeout(() => {
                settextAffichayD(textAffichayD + texteD[textAffichayD.length]);
            }, 150)
        } else if (textAffichayE.length < texteE.length) {
            setTimeout(() => {
                settextAffichayE(textAffichayE + texteE[textAffichayE.length]);
            }, 20)
        }} else {
            settextAffichayA("");
            settextAffichayB("");
            settextAffichayC("");
            settextAffichayD("");
            settextAffichayE("");
            setAncienneLang(lang)
        }
    }, [textAffichayA, textAffichayB, textAffichayC, textAffichayD, textAffichayE])


    return (
        <div className="panneau-acc">

            <div className="fond-ecran">
                <img src={require("../../img/acc/fondreact.png")} />
            </div>
            <div className="contenu-panneau-acc">
                <h1 className="titre">
                    <span className="prenom">{textAffichayA}</span>
                    <span className="nom">{textAffichayB}</span>
                </h1>
                <h3 className="sous-titre">
                    <span className="dev">{textAffichayC}</span>
                    <span className="web">{textAffichayD}</span>
                </h3>
                <div className="pres-site">
                    <span>{textAffichayE}</span>
                </div>
            </div>
        </div>
    )
}

export default PanneauAccueil;