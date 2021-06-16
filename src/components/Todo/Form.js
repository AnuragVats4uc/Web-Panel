import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
//
const Form = props => {
    const [newTodo, setNewTodo] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (newTodo.length > 0) {
            props.onNewTodo(newTodo)
            setNewTodo('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group" style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'nowrap',gap:'10px'}}>
                <TextField
                    variant='outlined'
                    type="text"
                    id='outlined-basic'
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                />
                <span className="input-group-btn">
                    <Button variant='contained' color='primary' type="submit" className="btn btn-success">
                        Add
                    </Button>
                </span>
            </div>
        </form>
    )
}
export default Form
