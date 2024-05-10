import { Container } from 'react-bootstrap'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

export const AddTask = ({tasks, setTasks}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')


    

    

    const addTask = () => {
      if(title === '' || description === ''){
        alert('Please fill all the fields')
       
      } else {
        setTasks([...tasks, {title: title, description: description}])
        setTitle('')
        setDescription('') 
        

      } 

    }
  

  return (
    <Container>
        <div>Add A Task</div>
        <div>
            <input type="text"  value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Task Name...." />
            <input type="text"  value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="Task Description....." />
            <Button onClick={addTask}>Add Task</Button>
        </div>
    </Container>
  )
}
