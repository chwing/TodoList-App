import React,{FC,useState, ChangeEvent} from 'react';
import './App.css';
import { ITask } from './interfaces';
import TodoTask from './Components/TodoTask';
const App: FC  =() => {
  const [task,setTask]=useState<string>("")
  const [deadline,setDeadline]=useState<number>(0)
  const [todolist,setTodolist]=useState<ITask[]>([])

  const handleChange =(event: ChangeEvent<HTMLInputElement>): void  => {
    if (event.target.name ==="task"){
      setTask(event.target.value)
      
    }
    else{
      setDeadline(Number(event.target.value))
    }
    

  }
  
  const addTask=():void =>{
    const newTask ={ taskName: task, deadline:deadline  }
    setTodolist([...todolist,newTask])
    setTask("")
    setDeadline(0);

  }
  const completeTask=(taskNameToDelete:string) : void => {
    setTodolist(todolist.filter((task)=>{
      return task.taskName != taskNameToDelete
    }))

  }
  return (
    <div className="App">
            <p className='welcome'>This is Oussama's todolist; Hope you're having a productive day!   </p>

      <div className="header">

        <div className="inputCon">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todolist.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask}/>;
        })}
      </div>
    </div>
  );
};
export default App;
