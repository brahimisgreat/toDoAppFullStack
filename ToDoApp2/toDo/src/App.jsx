import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { AddTask } from './Components/AddTask';
import { useState, useEffect } from 'react';
import { TaskLists } from './Components/TaskLists';

function App() {

  const [backendTasks, setBackendTasks] = useState([])
  const [refresh , setRefresh] = useState(false)

  // Fetching data from backend
  // useEffect(() => {
  //   async function fetchData(){
  //     try{
  //       const res = await fetch('http://localhost:3000')
  //       const data = await res.json()
  //       setBackendTasks(data)
  //       console.log(backendTasks)
  //     } catch(err){
  //       console.log(err)
  //   }}
  //   fetchData()
  // },[])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000");
        const result = await response.json();
        setBackendTasks(result);
        setRefresh(false);
        if (!ignore) {
          console.log(result);
        }
      } catch (error) {
        console.error(error);
      }
    }
    let ignore = false;
    fetchData();
    return () => { ignore = true };
  }, [refresh]);
  
  return (
   <Container className='box'>
    <AddTask   backendTasks={backendTasks} setRefresh={setRefresh} />
    <TaskLists   backendTasks={backendTasks} setRefresh={setRefresh}/>
   </Container>
  )
}

export default App
