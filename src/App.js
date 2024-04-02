
import './App.css';
import PageAccueil from './pages/PageAccueil';
import PageComptence from './pages/PageComptence';
import PageProjet from './pages/PageProjets';
import PageExp from './pages/PageExp';
import PageContact from './pages/PageContact';
import SwitchLang from './pages/SwitchLang';
import { useState, createContext } from 'react';

export const LangContext = createContext(null);

function App() {
  const [lang, setLang] = useState("fr");

  const chagementLang = (lang) => {
    setLang(lang);
  }

  return (
    <div className="App">
      <LangContext.Provider value={lang}>
        <SwitchLang changementLang={chagementLang}/>
        <PageAccueil />
        <PageComptence />
        <PageProjet />
        <PageExp />
        <PageContact />
      </LangContext.Provider>
    </div>
  );
}

export default App;
