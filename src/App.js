
import './App.css';
import PageAccueil from './components/PageAccueil';
import PageComptence from './components/PageComptence';
import PageProjet from './components/PageProjets';
import PageExp from './components/PageExp';
import PageContact from './components/PageContact';

function App() {
  return (
    <div className="App">
      <PageAccueil/>
      <PageComptence/>
      <PageProjet/>
      <PageExp/>
      <PageContact/>
    </div>
  );
}

export default App;
