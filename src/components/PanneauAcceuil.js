import { useState } from "react";
import { useEffect } from "react";

const PanneauAccueil = () => {

   const [textAffichayA, settextAffichayA] = useState("");
   const [textAffichayB, settextAffichayB] = useState("");
   const [textAffichayC, settextAffichayC] = useState("");
   const [textAffichayD, settextAffichayD] = useState("");
   const [textAffichayE, settextAffichayE] = useState("");
    const logoReact = require("../img/acc/react.png");
    const logoweb = require("../img/acc/web.png");

    const texteA = "Thibault";
    const texteB = "Schmitt";
    const texteC = "Développeur";
    const texteD = "web";
    const texteE = "Bienvenue sur mon site web ! J'espère que l'expérience vous plaira."
    const texteF = "Il est tout nouveau, je travaille dessus en ce moment."

    useEffect(()=>{
        if(textAffichayA.length < texteA.length){
            setTimeout(()=>{
                settextAffichayA(textAffichayA + texteA[textAffichayA.length]);
            }, 150)
        } else if(textAffichayB.length < texteB.length){
            setTimeout(()=>{
                settextAffichayB(textAffichayB + texteB[textAffichayB.length]);
            }, 150)
        } else if(textAffichayC.length < texteC.length){
            setTimeout(()=>{
                settextAffichayC(textAffichayC + texteC[textAffichayC.length]);
            }, 150)
        }else if(textAffichayD.length < texteD.length){
            setTimeout(()=>{
                settextAffichayD(textAffichayD + texteD[textAffichayD.length]);
            }, 150)
        }else if(textAffichayE.length < texteE.length){
            setTimeout(()=>{
                settextAffichayE(textAffichayE + texteE[textAffichayE.length]);
            }, 70)
        }
    }, [textAffichayA, textAffichayB, textAffichayC, textAffichayD, textAffichayE])

    return (
        <div className="panneau-acc">

                <div className="fond-ecran">
                    <img src={require("../img/acc/fondreact.png")}/>
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