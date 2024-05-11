import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { AddTask } from './Components/AddTask';
import { useState, useEffect } from 'react';
import { TaskLists } from './Components/TaskLists';

function App() {

  const [backendTasks, setBackendTasks] = useState([])

  // Fetching data from backend
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
    <AddTask   backendTasks={backendTasks} />
    <TaskLists   backendTasks={backendTasks}/>
   </Container>
  )
}

export default App
