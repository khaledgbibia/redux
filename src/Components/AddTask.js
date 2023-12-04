import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addTask } from './redux/taskSlice';


function AddTask() {
  
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newTask, setNewTask]=useState({
    id: uuidv4(),
    task : "",
  })
  const change=(e)=>{
    setNewTask({...newTask, [e.target.name]:e.target.value})
  }
  const saveTask=()=>{
    dispatch(addTask(newTask));
    setNewTask({...newTask, task:"",})
    
  }
    return (
      <div>
     
     <>
      <Form.Label htmlFor=""><h1>TodoInput</h1></Form.Label>
      <Form.Control
      value={newTask.task}
      size='lg'
        name='task'
        placeholder='enter your task'
        onChange={change}
      />
     
    </>
    <br/>
    <Button 
    
    variant="warning"
     size="lg"
     onClick={saveTask} 
    
     >
        Add New Task
      </Button> 
      </div>
    );
  }
  
  export default AddTask;