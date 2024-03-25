import "../style/pageAccueil.scss";
import PanneauAccueil from "./PanneauAcceuil";
import TacheBG from "./TacheBG";
import VagueFondAccueil from "./VagueFondAccueil";

const PageAccueil = () => {
    const tailleFenetre = window.screen.height;
    console.log(tailleFenetre)
    return(
        <div className="page-accueil" style={{height: tailleFenetre + 'px'}}>
            
            <PanneauAccueil/>
            <TacheBG nom={"tache tache1"} fichier={"couche1"} taille={tailleFenetre + "px"}/>
            {/* <TacheBG nom={"tache tache2"} fichier={"couche2"} taille={tailleFenetre + "px"}/>
            <TacheBG nom={"tache tache3"} fichier={"couche3"} taille={tailleFenetre + "px"}/> */}
            {/* <TacheBG nom={"tache tache4"} fichier={"couche4"} taille={tailleFenetre + "px"}/> */}

        </div>
    )
}

export default PageAccueil;