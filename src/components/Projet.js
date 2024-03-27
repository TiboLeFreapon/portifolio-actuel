const Projet = ({ nom, description, projetPro, imgFond, lien }) => {

    //backgroundImage: `url("../img/github.png")`
    return (
        <a href={lien} target="_blank" rel="noopener noreferrer" style={{backgroundImage: `url(${imgFond})`}}>
            <div className={"projet " + nom} >
                <div className="description">

                <span className="projet-pp">{projetPro ? "Projet professionnel" : "Projet personnel"}</span>
                <span className="titre">{nom}</span>
                <span className="description-proj">{description}</span>
                </div>
            </div>
        </a>
    )
}

export default Projet;