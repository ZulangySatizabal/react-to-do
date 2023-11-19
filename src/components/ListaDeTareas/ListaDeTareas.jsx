import React, { useState } from 'react'
import "./ListaDeTareas.css"
import Formulario from '../TareaFormulario/Formulario'
import Tarea from "../Tareas/Tarea"

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    console.log(tarea);
    //verificando que el texto de la tarea no este vacio
    if(tarea.texto.trim()){
      //trim es un metodo que permite quitar espacios al principio a al final de un string
      tarea.texto = tarea.texto.trim();
      //Arreglo donde estan todas las tareas y se agrega la nueva de primera
      const tareasActualizadas = [tareas, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

  return (
    // Fragmentos son etiquetas vacias
    <>
      <Formulario onSubmit={agregarTarea} />
      {/* Lista de componentes */}
      <div className='list_task_cont'>
        {
          tareas.map((tarea) => (
            tarea.id ? (
            <Tarea 
              key={tarea.id} //Key no es un prop pero es necesario 
              id={tarea.id}
              texto={tarea.texto} 
              completada={tarea.completada}
            />
            ) : null
          ))
        }
      </div>
    </>
  )
}

export default ListaDeTareas