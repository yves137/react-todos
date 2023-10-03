export function TodoItem({todoItem:{id,doing,isDone},onCheckTodo,onDeleteTodo}){
    return (
        <div className="w-[51rem] flex gap-4 border-b-2 border-[#7B6894] py-3 px-2 items-center">
            
            <input type="checkbox" checked={isDone?'true':''} className={`w-7 h-7 ${!isDone?'appearance-none bg-[#55436D]':''}`} onClick={()=>onCheckTodo(id)}/>
            <span className={`w-full text-xl break-all ${isDone?'line-through':''}`}><span>{doing}</span></span>
            <button className="bg-[#6A2E57] p-3 rounded-full" onClick={()=>onDeleteTodo(id)}>
                <img src="delete.svg" className="w-8" alt="1"/>
            </button>
            
        </div>
    )
}