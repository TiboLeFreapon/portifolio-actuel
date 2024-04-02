import React, {useContext} from 'react'
import "../style/pageLangue.scss";
import { LangContext } from '../App';

function SwitchLang({changementLang}) {
    const lang = useContext(LangContext);
    console.log("la langue est " + lang)

    const changerLaLangue = (e) =>{
        changementLang(e.target.value);
    }

  return (
    <div className='lang'>
        <button className={lang === "fr" ? 'actif fr': 'inactif fr'} value={"fr"} disabled={lang === "fr"} onClick={changerLaLangue}>Fr</button>
        <button className={lang === "eng" ? 'actif eng': 'inactif eng'} value={"eng"} disabled={lang === "eng"}  onClick={changerLaLangue}>Eng</button>
    </div>
  )
}

export default SwitchLang