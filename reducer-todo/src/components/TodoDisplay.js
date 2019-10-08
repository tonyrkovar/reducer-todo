import React, { useState, useReducer } from 'react'

// import { TodoForm } from './TodoForm'

import { initialState, reducer } from '../reducer/TodoReducer'
import './todo.css'

const Todo = () => {
    const [todoItem, setTodoItem] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log('state in DISPLAY', state)

    const handleInputs = e => {
        setTodoItem(e.target.value)
    }

    const markComplete = e => {
        if (state.todo.completed === true) {
            return
        }
    }
    return (
        <div>
            <input
                type='text'
                name='todo'
                value={todoItem}
                onChange={handleInputs}
            />
            <button onClick={() => {
                dispatch({ type: 'ADD_ITEM', payload: todoItem })
            }}>Add Item</button>

            {state.todo.map(input => {
                return (
                    <p onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: input.id })}
                        className={input.completed ? 'task-completed' : 'Hello'}
                    >{input.item}</p>
                )
            })}
            <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>Clear Completed Tasks</button>
        </div>
    )
}

export default Todo;