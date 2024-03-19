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
            <TacheBG tache={1} taille={tailleFenetre}/>
            <TacheBG tache={2} taille={tailleFenetre}/>
            <TacheBG tache={3} taille={tailleFenetre}/>
            <TacheBG tache={4} taille={tailleFenetre}/>
            <TacheBG tache={5} taille={tailleFenetre}/>

        </div>
    )
}

export default PageAccueil;