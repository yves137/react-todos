import { useState } from "react"

export function AddTodos({onAddTodo}){
    const [activity,setActivity]=useState('')
    return (
        <div className="flex w-[50rem] px-7 py-4 rounded-full shadow-lg bg-[#221536] shadow-[#7B6894] gap-4">
            <input type="text" value={activity} placeholder="Add todo..." className="outline-none w-full font-light text-2xl px-5 bg-inherit" onChange={(e)=>setActivity(e.target.value)}/>
            <button className="rounded-full" onClick={()=>{
                onAddTodo(activity)
                setActivity('')
                }}>
                <img src="plus.svg" alt="1" className="w-10"/>
            </button>
        </div>
    )
}