import '../style/pageComp.scss';
import BarreProgression from './BarreProgression';
import CardComp from './CardComp';

const PageComptence = () => {

    return (<div className="page-comp">
        <div className='contenu-comp'>
            <div className='text-comptence'>

                Compétences.
                <span className='span-pres'> Je code tous les jours pour les améliorer.
                </span>
            </div>
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
                    <BarreProgression nomComp={"Powershell"} taille={40} />
                    <BarreProgression nomComp={"VBA"} taille={60} />
                    <BarreProgression nomComp={"Scrum"} taille={80} />
                    <BarreProgression nomComp={"Jira"} taille={80} />
                </CardComp>
            </div>
        </div>
    </div>);
}

export default PageComptence;