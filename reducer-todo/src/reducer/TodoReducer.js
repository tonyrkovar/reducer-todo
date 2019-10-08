import React from 'react';

export const initialState = {
    todo: [
        {
            item: 'Make a Todo list',
            completed: false,
            id: Date.now()
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const newItem = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            console.log('in reducer', newItem, state)
            return {
                ...state,
                todo: [...state.todo, newItem]
            }
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                todo: state.todo.map(item => {
                    if (action.payload === item.id) {
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    } else {
                        return item
                    }
                })
            }
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todo: state.todo.filter(todo => !todo.completed)
            }
        default:
            return state
    }

}