import '../style/pageProjet.scss';
import Projet from './Projet';

const PageProjet = () => {

    const descriptionAntidote = "Correcteur ortographique. Je travallais en tant que frontend sur l'application.";
    const descriptionPj = "Mon premier portfolio en Vuejs.";
    const descriptionBPC = "Mes amies et moi voulions savoir ce qui était le meilleur au beerpong. J'ai donc créée un classement avec des statistiques.";
    const descriptionGH = "Mon Git Hub. vous pourrez y retrouver mes autres projets.";
    const lienAntidote = "https://www.antidote.info/en/antidote-web";
    const beerPong = "https://bestofbeerpong.com/";
    const lienPJ = "https://thibaultschmitt.com/#/";
    const lienGitHub = "https://github.com/TiboLeFreapon/";
    
    
    return (
        <div className="projets">
            <div className="pres">
                Projets. <span>En glissant sur le côté vous trouverez quelques uns de mes projets.</span>
            </div>
            <div className="contenu-projet">
                <div className="overflow-affiche">
                    <Projet lien={lienAntidote} nom={"Antidote"} projetPro={true} description={descriptionAntidote}/>
                    <Projet lien={lienPJ} nom={"Portfolio Junior"} projetPro={false} description={descriptionPj}/>
                    <Projet lien={beerPong} nom={"Classement beer pong"} projetPro={false} description={descriptionBPC}/>
                    <Projet lien={lienGitHub} nom={"Git hub"} projetPro={false} description={descriptionGH} imgFond={"github.png"}/>
                </div>
            </div>
        </div>
    );
}

export default PageProjet;