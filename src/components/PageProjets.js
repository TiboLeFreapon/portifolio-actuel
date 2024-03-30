import '../style/pageProjet.scss';
import Projet from './Projet';
import TacheBG from './TacheBG';

const PageProjet = () => {

    const descriptionAntidote = "Correcteur ortographique. Je travallais en tant que frontend sur l'application.";
    const descriptionPj = "Mon premier portfolio en Vuejs.";
    const descriptionBPC = "Mes amies et moi voulions savoir ce qui était le meilleur au beerpong. J'ai donc créée un classement avec des statistiques.";
    const descriptionGH = "Mon Git Hub. vous pourrez y retrouver mes autres projets.";
    const lienAntidote = "https://www.antidote.info/en/antidote-web";
    const beerPong = "https://bestofbeerpong.com/";
    const lienPJ = "https://schmittthibault.com/#/";
    const lienGitHub = "https://github.com/TiboLeFreapon/";
    
    return (
        <div className="projets">
            <div className="pres">
                Projets. <span>En glissant sur le côté vous trouverez quelques uns de mes projets.</span>
            </div>
            <div className="contenu-projet">
                <div className="overflow-affiche">
                    <Projet lien={lienAntidote} nom={"Antidote"} projetPro={true} description={descriptionAntidote} imgFond={"../img/fondprojet/fondantidote.png"}/>
                    <Projet lien={lienPJ} nom={"Portfolio Junior"} projetPro={false} description={descriptionPj} imgFond={"../img/fondprojet/fondjunior.png"}/>
                    <Projet lien={beerPong} nom={"Classement beer pong"} projetPro={false} description={descriptionBPC} imgFond={"../img/fondprojet/fondbeerpong.png"}/>
                    <Projet lien={lienGitHub} nom={"Git hub"} projetPro={false} description={descriptionGH} imgFond={"../img/fondprojet/fondgithub.png"}/>
                </div>
            </div>
        </div>
    );
}

export default PageProjet;