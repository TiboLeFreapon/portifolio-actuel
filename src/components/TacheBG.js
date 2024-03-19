const TacheBG = ({ tache, taille }) => {

    const svg = require(`../img/couche${tache}.svg`)

    return (
        <img src={svg} className={"tache tache" +  tache } height={taille} />
    );
};

export default TacheBG;