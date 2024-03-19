import logo from './logo.svg';
import './App.css';
import PageAccueil from './components/PageAccueil';
import PageComptence from './components/PageComptence';
import TransitionGraduent from './components/TransitionGraduent';
import PageParcours from './components/PageParcours';

function App() {
  return (
    <div className="App">
      <PageAccueil/>
      {/* <TransitionGraduent couleur1={"rgb(93,138,75)"} couleur2={'rgb(93,138,75)'}/> */}
      <PageComptence/>
      <PageParcours/>
    </div>
  );
}

export default App;
