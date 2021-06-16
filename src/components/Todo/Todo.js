import { Button } from '@material-ui/core'
import React, { useState, useRef } from 'react'
import './Todo.css';

const Todo = props => {
    const [title] = useState(props.title)
    const listEl = useRef(null)

    const handleDelete = () => {
        props.onDelete(listEl.current.id)
    }

    const renderItem = () => (
        <div className='todo'>
            <div className='todo-title'>
                <ul>
                    <li> {title}</li>

                </ul>

            </div>
            <div className='todo-button'>
                <Button onClick={handleDelete} variant='contained' color='secondary'>
                    Delete
            </Button>
            </div>
        </div>
    )

    return (
        <div
            id={props.id}
            ref={listEl}
        >
            { renderItem()}
        </div>
    )
}
export default Todo
