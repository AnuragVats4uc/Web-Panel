import React, {useState, useEffect } from 'react'


import axios from 'axios';
import Form from '../components/Todo/Form';
import TodoList from '../components/Todo/TodoList';

function TaskPage() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
            .then((res)=>{
                setTodos(res.data)
            })
    }, [])

    const handleSubmit = todo => {
        setTodos([
            
            { userId: 1, id: Date.now(), completed: false, title: todo },
            ...todos,
        ])
    }

    const handleUpdate = (id, newTodo) => {
        let newTodos = todos.map(todo => {
            if (Number(todo.id) === Number(id)) {
                todo.title = newTodo
            }
            return todo
        })
        setTodos(newTodos)
    }

    const handleDelete = id => {
        let newTodos = todos.filter(todo => Number(todo.id) !== Number(id))
        setTodos(newTodos)
    }

    return (
        <div id="app" className="mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card bg-gray">
                            <div className="card-body">
                                <h3>To-Dos</h3>
                                <Form onNewTodo={handleSubmit} />
                                <br />
                                <TodoList
                                    items={todos}
                                    onUpdate={handleUpdate}
                                    onDelete={handleDelete}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskPage
