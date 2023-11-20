import './App.css';
import ListaDeTareas from './components/ListaDeTareas/ListaDeTareas.jsx';
import Logo from "./components/Logo/Logo.jsx"
import Footer from "./components/Footer/Footer.js"

function App() {
  return (
    <div className="App">
      <Logo />
      <div className='toDo_list_container'>
        <h2>Mis tareas</h2>
        <ListaDeTareas />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
