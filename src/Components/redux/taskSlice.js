import { createSlice } from "@reduxjs/toolkit";
import data from "../Data";
import { colors } from "@mui/material";

const taskSlice = createSlice ({
    name:"taskSlice",
    initialState:{tasks: data},
    reducers:{
        addTask:(state,action) => {
state.tasks=[...state.tasks, action.payload];
        },
        deleteTasks:(state,action) => {
            state.tasks = state.tasks.filter((el)=>el.id !==action.payload);
                    },
                    editTask:(state,action) => {
                        state.tasks=state.tasks.map((el)=>el.id === action.payload.id?el=action.payload.upDateTask
                        :el
                        
                        );
                                },            
                

    },
    
});

export default taskSlice.reducer;
export const {addTask, deleteTasks,editTask}= taskSlice.actions;