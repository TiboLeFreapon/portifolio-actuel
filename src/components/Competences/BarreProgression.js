const BarreProgression = ({ nomComp, taille }) => {

    return (
        <div className="groupe-bp">
            <span className="titre-bp">{nomComp}</span>
            <div className="bp">
                <div className="barre-resultat" style={{ width: taille + "%" }}></div>
            </div>
        </div>)
}

export default BarreProgression;