const PanneauAccueil = () => {

    const logoReact = require("../img/acc/react.png");
    const logoweb = require("../img/acc/web.png");
    return (
        <div className="panneau-acc">

                <div className="fond-ecran">
                    <img src={require("../img/acc/fondreact.png")}/>
                </div>
            <div className="contenu-panneau-acc">
                <h1 className="titre">
                    <span className="prenom">Thibault</span>
                    <span className="nom">Schmitt</span>
                </h1>
                <h3 className="sous-titre">
                   <span className="dev">Développeur</span> 
                   <span className="web">web</span>
                </h3>
                <div className="pres-site">
                    <span>Bienvenue sur mon site web ! J'espère que l'expérience vous plaira.</span><br/>
                    <span>Il est tout nouveau, je travaille dessus en ce moment.</span> </div>
            </div>
        </div>
    )
}

export default PanneauAccueil;