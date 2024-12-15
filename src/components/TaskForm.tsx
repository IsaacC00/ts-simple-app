import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../Interfaces/Task";

interface Props {
  //? tipamos las props para recibir una funcion 
  //? que recibe un task como parametro pero
  //? no regresa nada
  addNewEvent: (task: Task) => void
}


const initialState = {
  title: '',
  description: '',
  date: ''
}

//? realizamos nuestro tipo de dato para nuestra funcion de inputChange que me permite recirbir solo 
//? tipos de dato HTMLInput, apra ello react tiene su propio tipado para manejar este tipo de events
type typeInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

//? Realizar App para el manejo de task en react con arreglo de objetos
export default function TaskForm({ addNewEvent }: Props) {

  //? utilizacion de hooks 
  //? par atipar un hook utilizamos generico
  //? y como ess un arreglo de tasks lo declaramos con []
  const [task, setTask] = useState<Task>(initialState);

  //? vamos a tipar nuestro hanfleInputChange para solo aceptar valores
  //? que sean de mi interface de Task
  const handleInputChange = ({ target }: typeInputChange) => {
    const { name, value } = target;
    setTask({ ...task, [name]: value });
  }

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewEvent(task);
    setTask(initialState);
  }

  return (
    <div className="card card-body ">
      <form action="" onSubmit={onFormSubmit}>
        <h1>TaskForm</h1>
        <input type="text" name="title"
          onChange={handleInputChange}
          value={task.title}
          className="form-control mb-3 rounded-0 border-0" placeholder="Titulo" />

        <textarea name="description"
          onChange={handleInputChange}
          value={task.description}
          className="form-control mb-3 rounded-0 border-0" placeholder="Descripcion" ></textarea>

        <input 
        type="date" 
        name="date" 
        value={task.date} 
        className="mb-3"
        onChange={handleInputChange} 
        />
        
        <br />

        <button className="btn btn-success">
          Submit
        </button>

      </form>
    </div>
  )
}
