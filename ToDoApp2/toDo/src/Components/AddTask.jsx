import { Container } from 'react-bootstrap'
import { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap'

export const AddTask = ({backendTasks, setRefresh}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    
    const addTask = async (title, description) => {
        if(!title || !description) return alert("Please fill all the fields")
        const res = await fetch("http://localhost:3000/addTask", {
            method: "POST",
            body: JSON.stringify({ title, description }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        setTitle('')
        setDescription('')
        setRefresh(true)

    }
    

    

   
  

  return (
    <Container>
        <div>Add A Task</div>
        <div>
            <input type="text"  value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Task Name...." />
            <input type="text"  value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="Task Description....." />
            <Button onClick={()=> {addTask(title, description)}} >Add Task</Button>
        </div>
    </Container>
  )
}
