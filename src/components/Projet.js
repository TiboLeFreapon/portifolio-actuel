const Projet = ({ nom, description, projetPro, imgFond, lien }) => {

    //backgroundImage: `url("../img/github.png")`
    return (
        <a href={lien} target="_blank" rel="noopener noreferrer">
            <div className="projet" >
                <span className="projet-pp">{projetPro ? "projet professionnel" : "projet personnel"}</span>
                <span className="titre">{nom}</span>
                <span className="description">{description}</span>
            </div>
        </a>
    )
}

export default Projet;