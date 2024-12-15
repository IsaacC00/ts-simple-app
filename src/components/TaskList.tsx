import { Task } from "../Interfaces/Task"
import TaskCard from "./TaskCard"

interface Props {
  tasks: Task[],
  deleteTask: (id:string) => void,
}

export default function TaskList({ tasks, deleteTask }: Props) {
  return (
    <>
      {tasks.map(task => (
        <div key={task.id} className="col-md-4 mb-4">
          <TaskCard deleteTask={deleteTask} task={task} />
        </div>
      ))}
    </>
  )
}
