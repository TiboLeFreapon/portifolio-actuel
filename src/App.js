import logo from './logo.svg';
import './App.css';
import PageAccueil from './components/PageAccueil';
import PageComptence from './components/PageComptence';
import PageProjet from './components/PageProjets';
import PageExp from './components/PageExp';

function App() {
  return (
    <div className="App">
      <PageAccueil/>
      <PageComptence/>
      <PageProjet/>
      <PageExp/>
    </div>
  );
}

export default App;
