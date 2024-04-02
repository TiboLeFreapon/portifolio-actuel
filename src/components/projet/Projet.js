
const Projet = ({ nom, description, projetPro, lien, nomClass }) => {
    
    return (
        <a href={lien} target="_blank" rel="noopener noreferrer">
            <div className={"projet " + nomClass}>
                <div className="description">
                    <span className="projet-pp">{projetPro}</span>
                    <span className="titre">{nom}</span>
                    <span className="description-proj">{description}</span>
                </div>
            </div>
        </a>
    )
}

export default Projet;