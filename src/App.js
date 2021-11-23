import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Barra from './componentes/Barra';
import MatricularEstudiante from './componentes/MatricularEstudiante';
import Inicio from './componentes/Inicio';
import VisualizarMatriculas from './componentes/VisualizarMatriculas';
import EditarMatricula from './componentes/EditarMatricula';
import login from './componentes/login';

function App() {
  return (

    <Router>

    <Barra/>

    <Route path ='/' exact component={login}/>
    <Route path = 'Inicio' exact componen ={Inicio}/>
    <Route path ='/MatricularEstudiante' exact component={MatricularEstudiante}/>
    <Route path ='/VisualizarMatriculas' exact component={VisualizarMatriculas}/>
    <Route path ='/EditarMatricula' exact component={EditarMatricula}/>
    
  
    
  </Router>


   

  
  );
}

export default App;
