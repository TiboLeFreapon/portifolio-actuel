import Couche4 from "../img/couche4.svg"


const TacheBG = ({ nom, fichier, taille }) => {

    const svg = require(`../img/${fichier}.svg`)
    console.log(svg)

    return (
        //<img src={svg} className={nom} height={taille} />
        <div className={nom} >
          <svg xmlns={Couche4} width={"100%"} height={taille} viewBox="0 0 100 100"/>
        </div>
        );
};

export default TacheBG;