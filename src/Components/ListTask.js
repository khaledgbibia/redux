import React from 'react'
import Task from './Task';
import { useSelector } from 'react-redux';


const ListTask = () => {
    const {tasks}= useSelector ((state)=>state.taskReducer)
    return (
      <div
      style={{
      
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "80px",
      }}
      >
    
   
    {tasks.map((el)=><Task taskInfo={el}/>)}
   
          
      </div>
    )
  }
  export default ListTask;