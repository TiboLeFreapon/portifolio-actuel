import '../style/pageComp.scss';
import BarreProgression from './BarreProgression';
import CardComp from './CardComp';

const PageComptence = () => {

    return (<div className="page-comp">
        <div className='contenu-comp'>
            <h1>Compétences</h1>

            <div className='contenu'>
                <CardComp titreCarte={"Frontend"}>
                    <BarreProgression nomComp={"React"} taille={80} />
                    <BarreProgression nomComp={"Redux"} taille={80} />
                    <BarreProgression nomComp={"HTML"} taille={90} />
                    <BarreProgression nomComp={"CSS/ Sass/ Less"} taille={80} />
                    <BarreProgression nomComp={"JavaScript"} taille={80} />
                    <BarreProgression nomComp={"TypeScript"} taille={70} />
                    <BarreProgression nomComp={"Vue"} taille={50} />
                </CardComp>

                <CardComp titreCarte={"Back end"}>
                    <BarreProgression nomComp={"Node"} taille={70} />
                    <BarreProgression nomComp={"Express"} taille={80} />
                    <BarreProgression nomComp={"Php"} taille={60} />
                    <BarreProgression nomComp={"C#/ .Net (en formation)"} taille={20} />
                </CardComp>

                <CardComp titreCarte={"Dev ops"}>
                    <BarreProgression nomComp={"Docker"} taille={50} />
                    <BarreProgression nomComp={"Git"} taille={80} />
                </CardComp>

                <CardComp titreCarte={"Divers"}>
                    <BarreProgression nomComp={"react"} taille={80} />
                </CardComp>
            </div>


            <div className='text-comptence'>
                <span className='span-pres'>
                    Je code tous les jours pour améliorer mes compétences. C'est une passion pour moi.
                </span>
            </div>
        </div>
    </div>);
}

export default PageComptence;