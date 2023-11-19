import React, { useState } from 'react';
import "./Formulario.css";
import { v4 as uuidv4 } from 'uuid';

function Formulario(props) {

    const [input,setInput] = useState("");

    const manejarCambio = e => {
        setInput(e.target.value); //Extrae el valor del campo de texto
    }

    const manejarEnvio = e => {
        e.preventDefault(); //Evita que se recargue la app

        const tareaNueva = {
            id: uuidv4(), //Genera un identificador unico
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);
    }

  return (
    <form className='task_form' onSubmit={manejarEnvio}>
        <input 
            className='task_input'
            type='text'
            placeholder='Escribe una tarea'
            name='texto'
            onChange={manejarCambio}
        />
        <button className='task_btn'>
            Agregar Tarea
        </button>
    </form>
  )
}

export default Formulario