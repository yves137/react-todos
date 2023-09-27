import { TodoItem } from "./TodoItem"


export function TodoList({todosList,onCheckTodo,onDeleteTodo}){
    return (
        <div className="mt-10">
            {todosList.map(todoItem =><TodoItem todoItem={todoItem} onCheckTodo={onCheckTodo} onDeleteTodo={onDeleteTodo}/>)}
        </div>
    )
}