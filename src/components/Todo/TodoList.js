import React from 'react'
import Todo from './Todo'
//
const TodoList = props => {
    const items = props.items.filter(item => item.completed !== true)
    const itemsC = props.items.filter(item => item.completed === true)

    return (
        <div className="list">
            <div className="list-group" >
                {items.map(todo => (
                    <Todo
                        
                        id={todo.id}
                        key={todo.id}
                        title={todo.title}
                        onUpdate={props.onUpdate}
                        onDelete={props.onDelete}
                    />
                ))}
                {itemsC.map(todo => (
                    <Todo
                        id={todo.id}
                        key={todo.id}
                        title={todo.title}
                        completed={true}
                        onUpdate={props.onUpdate}
                        onDelete={props.onDelete}
                    />
                ))}
            </div>
        </div>
    )
}
export default TodoList
