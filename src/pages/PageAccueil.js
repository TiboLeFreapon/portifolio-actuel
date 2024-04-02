import "../style/pageAccueil.scss";
import PanneauAccueil from "../components/accueil/PanneauAcceuil";

const PageAccueil = () => {
    const tailleFenetre = window.screen.height;
    return(
        <div className="page-accueil" style={{height: tailleFenetre + 'px'}}>
            
            <PanneauAccueil/>
        
        </div>
    )
}

export default PageAccueil;