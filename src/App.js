import logo from './logo.svg';
import './App.css';
import PageAccueil from './components/PageAccueil';
import PageComptence from './components/PageComptence';
import PageProjet from './components/PageProjets';

function App() {
  return (
    <div className="App">
      <PageAccueil/>
      <PageComptence/>
      <PageProjet/>
    </div>
  );
}

export default App;
