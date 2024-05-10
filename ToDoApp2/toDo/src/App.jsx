import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { AddTask } from './Components/AddTask';
import { useState, useEffect } from 'react';
import { TaskLists } from './Components/TaskLists';

function App() {

  const [tasks, setTasks] = useState([])
  const [backendTasks, setBackendTasks] = useState([])

  useEffect(() => {
    async function fetchData(){
      const res = await fetch('http://localhost:3000')
      const data = await res.json()
      setBackendTasks(data)
      console.log(backendTasks)
    }
    fetchData()
  },[])

  return (
   <Container className='box'>
    <AddTask  tasks={tasks}  backendTasks={backendTasks} setTasks={setTasks}/>
    <TaskLists tasks={tasks} setTasks={setTasks} backendTasks={backendTasks}/>
   </Container>
  )
}

export default App
