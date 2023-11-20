import React, { useState } from 'react'
import "./ListaDeTareas.css"
import Formulario from '../TareaFormulario/Formulario'
import Tarea from "../Tareas/Tarea"

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    //verificando que el texto de la tarea no este vacio
    if(tarea.texto.trim()){
      //trim es un metodo que permite quitar espacios al principio a al final de un string
      tarea.texto = tarea.texto.trim();
      //Arreglo donde estan todas las tareas y se agrega la nueva de primera
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = id =>{
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      //comprueba si el id de la tarea actual es igual al id proporcionado.cambia el valor de tarea.completada a su valor opuesto
      if(tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    // Fragmentos son etiquetas vacias
    <>
      <Formulario onSubmit={agregarTarea} />
      {/* Lista de componentes */}
      <div className='list_task_cont'>
        {
          tareas.map((tarea) =>
            <Tarea 
              key={tarea.id} //Key no es un prop pero es necesario 
              id={tarea.id}
              texto={tarea.texto} 
              completada={tarea.completada}
              tareaCompletada={completarTarea}
              tareaEliminada={eliminarTarea}
            />
          )
        }
      </div>
    </>
  )
}

export default ListaDeTareas