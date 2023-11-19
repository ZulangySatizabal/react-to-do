import './App.css';
import ListaDeTareas from './components/ListaDeTareas/ListaDeTareas.jsx';
import Logo from "./components/Logo/Logo.jsx"

function App() {
  return (
    <div className="App">
      <Logo />
      <div className='toDo_list_container'>
        <h2>Mis tareas</h2>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
