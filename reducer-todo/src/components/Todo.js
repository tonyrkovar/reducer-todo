import React, { useState, useReducer } from 'react'

import { TodoForm } from './TodoForm'

import { initialState, reducer } from '../reducer/TodoReducer'

const Todo = () => {
    const [{ item, completed }, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <TodoForm />
            <p>{item}</p>
        </div>
    )
}

export default Todo;