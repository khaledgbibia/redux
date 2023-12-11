import React, { useState } from 'react'
import {Form, Modal,Button }from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { completeTodo, deleteTasks, editTask } from './redux/taskSlice';
import { useDispatch } from 'react-redux';



const Task = ({taskInfo}) => {
  const dispatch = useDispatch();
  const delateHandler=()=>{
    dispatch(deleteTasks(taskInfo.id));
    
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [upDateTask,setupDateTask]= useState({id: taskInfo.id, task: taskInfo.task,});
  const handelChange = (e)=> {
    setupDateTask({...upDateTask,[e.target.name]:e.target.value})

  }
  console.log(upDateTask);
  const updateHandler = () => {
    dispatch(editTask({ id: taskInfo.id, upDateTask: upDateTask }));
    handleClose();
    
    
  };
  const completeTodoHandler = (e) => {
    e.preventDefault();
    dispatch(completeTodo(taskInfo.id));
  };


  
  return (
    <div
    style={{
      
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "200px",
    }}
    
    >


     {taskInfo.isDone ? (
        <p style={{ color: "green" }}>{taskInfo.task}</p>
      ) : (
        <p style={{ color: "red" }}> {taskInfo.task} </p>
      )} 
     <>
     {/* //////////////////// Check///////////////////////// */}
     
     <div
  
     >
     <Form.Check aria-label="option 1"  
     onClick={completeTodoHandler}
     />
</div>
    {/* //////////////////// delete///////////////////////// */}
     <Stack direction="row" spacing={1} >
      <IconButton aria-label="delete" 
      onClick={delateHandler}
      >
        <DeleteIcon />
      </IconButton>
      </Stack>



      {/* //////////////////// edit///////////////////////// */}
     
      <Fab color="secondary" aria-label="edit" onClick={handleShow}>
      <EditIcon />
        
        </Fab>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>UPDATE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail"
      >
        
        <Form.Control
        defaultValue={taskInfo.task} 
        type="text"
        name="task" 
        placeholder="Enter your update" 
        onChange={handelChange }
        
        />
        
        <Form.Text className="text-muted">
          You can edit .
        </Form.Text>
      </Form.Group>
      </Form>
            
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" 
         onClick={updateHandler}
          >
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
   
      
      
      
    
    </>
    
    
    </div>
    
  )
  
}
export default Task;