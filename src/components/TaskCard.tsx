import { Task } from "../Interfaces/Task"

interface Props {
  task: Task,
  deleteTask: (id:string) => void,
}

export default function TaskCard({ task, deleteTask }: Props) {
  return (
    <>
      <div className="card card-body ">
        <h2> {task.title} </h2>
        <h5> {task.description} </h5>
        <span> {task.date} </span>
        <button 
        //? pequenia solucion en caso de no recibir un id  
        onClick={ () => task.id && deleteTask(task.id) }
        className="btn btn-danger">
          Delete
        </button>
      </div>
    </>
  )
}
