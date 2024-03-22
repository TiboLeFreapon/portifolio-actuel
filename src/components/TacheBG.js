const TacheBG = ({ nom, fichier, taille }) => {

    const svg = require(`../img/${fichier}.svg`)

    return (
        <img src={svg} className={nom} height={taille} />
    );
};

export default TacheBG;