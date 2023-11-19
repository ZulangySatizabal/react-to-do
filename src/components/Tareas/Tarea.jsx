import React from "react"
import "./Tarea.css"
import { AiOutlineCloseCircle } from "react-icons/ai"

function Tarea({ id,texto,completada,tareaCompletada,tareaEliminada}){



  return (
    <div className={completada ? "task_container checked" : "task_container"}>
        <div className="task_text" onClick={() => tareaCompletada(id)}>
            {texto}
        </div>
        <div className="task_icon_container" onClick={() => tareaEliminada(id)}>
            <AiOutlineCloseCircle className="task_icon" />
        </div>
    </div>
  )
}

export default Tarea