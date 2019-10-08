import React, { useState, useReducer } from 'react'

// import { TodoForm } from './TodoForm'

import { initialState, reducer } from '../reducer/TodoReducer'

const Todo = () => {
    const [todoItem, setTodoItem] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log('state in DISPLAY', state)

    const handleInputs = e => {
        setTodoItem(e.target.value)
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
                    <p>{input.item}</p>
                )
            })}
        </div>
    )
}

export default Todo;