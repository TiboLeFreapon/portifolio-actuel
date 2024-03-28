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
        
        </div>
    )
}

export default PageAccueil;