import "../style/pageAccueil.scss";
import PanneauAccueil from "./PanneauAcceuil";
import VagueFondAccueil from "./VagueFondAccueil";

const PageAccueil = () => {
    const tailleFenetre = window.screen.height;
    console.log(tailleFenetre)
    return(
        <div className="page-accueil" style={{height: tailleFenetre + 'px'}}>
            
            <PanneauAccueil/>
            <VagueFondAccueil place="premier"/>
            <VagueFondAccueil place="second"/>
            <VagueFondAccueil place="troisieme"/>

        </div>
    )
}

export default PageAccueil;