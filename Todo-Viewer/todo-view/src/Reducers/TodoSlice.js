import { createSlice, nanoid } from '@reduxjs/toolkit'
import AddTodo from '../AddTodo'

const todoSlice = createSlice({
    name:'Todos',
    initialState:[],
    reducers:{
        addTodo: (state,action)=>{
            const newTodo ={
                id: nanoid(),
                text: action.payload.text,
                completed: false,
            }
            state.push(newTodo)
        },
    },
})

export default todoSlice;