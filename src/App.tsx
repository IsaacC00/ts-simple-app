import { useState } from "react";
import logo from "./assets/react.svg";
import { Task } from "./Interfaces/Task";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

//? tipado de props
//? podemos tipar props con las itnerfaces 
//? para ello declaramos un objeto de la siguietne manera
//? para que tipara las props 
//? para pode recibir el tipo de dato corre>secto 

interface Props {
  title: string
}
//? ademas tipar los props me va ayudar a 
//? deestructurar un objeto y mandar correctamente las props
//? si necesidad de declara nuevas props
export function App({ title }: Props) {

  const [tasks, setTasks] = useState<Task[]>([
    { 
      id:'1',
      title: 'Aprender React',
      description: 'Aprender React con Ts',
      date:'2024-10-12',
    },
    
  ]);

  const addNewEvent = (task:Task) => {
    setTasks([...tasks, {...task,id: crypto.randomUUID() }]);
  }

  const deleteTask = (id:string) => {
      setTasks( tasks.filter(  task => (task.id !== id) ) );
  }

  return (
    <div style={{ height: '100vh' }} className="text-white">
      <nav className='navbar navbar-dark bg-primary'>
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="REACT LOGO" style={{ width: '4rem', padding:'0.4rem' }} />
            {title}
          </a>
        </div>
      </nav>
      {/* //? al momento de recibir la props tambien vscode me va a indicar que se espera un tipo de dato
    //? para cada prop */}



      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addNewEvent={addNewEvent} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList deleteTask={deleteTask} tasks={tasks} />
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}

