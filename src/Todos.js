import { useState } from 'react'
import {AddTodos} from './AddTodos'
import { TodoList } from './TodoList'
export function Todos(){

    const [todosList,setTodoList] =useState([])

    function handleAddTodo(activity){
        if(activity.trim().length)
        setTodoList(v=>[...v,{id:Date.now(),doing:activity,isDone:false}]);
    }

    function handleDeleteTodo(id){
        setTodoList(v=>[...v.filter(todo=>todo.id!==id)])
    }

    function handleCheckTodo(id){
        setTodoList(v=>[...v.map(todo=>todo.id===id?{...todo,...{isDone:!todo.isDone}}:todo)])
    }

    return(
        <div>
            <AddTodos onAddTodo={handleAddTodo}/>
            <TodoList todosList={todosList} onCheckTodo={handleCheckTodo} onDeleteTodo={handleDeleteTodo}/>
        </div>
    )
}