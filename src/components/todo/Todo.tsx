import React, { useReducer, useState, useEffect } from 'react';
import './Todo.css';

const ACTIONS = {
    ADD_TODO: 'add-todo',
    REMOVE_TODO: 'remove-todo',
    UPDATE_TODO: 'update-todo'
}

interface ITodo {
    id?: number,
    name: string,
    isComplete?: boolean
}

interface IActions {
    type: string,
    payload: ITodo;
}

const initialState: ITodo[] = [];

const todoReducer = (state: ITodo[] = initialState, action: IActions  ) => {
    switch(action.type) {
        case ACTIONS.ADD_TODO: 
            return [...state, createTodoRecord(action)];
        case ACTIONS.REMOVE_TODO:
            return state;
        case ACTIONS.UPDATE_TODO:
            return state.map(todo => {
                if(todo.id === action.payload.id) {
                    return { ...todo, isComplete: !todo.isComplete}
                }
                return todo;
            })
        default:
            return state;
    }
}

const createTodoRecord = (action: IActions): ITodo => {
    return { name: action.payload.name, isComplete: false, id: Date.now() }
}

const capitalize = (value: string):string => {
    const firstLetter = value.charAt(0).toUpperCase();
    return firstLetter + value.substr(1, value.length);
}

const Todo:React.FC = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    const [inputValue, setInput] = useState<string>('');

    useEffect(() => {
        console.log(todos);
    }, [todos])

    const onSubmitHandler = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        const todoValue = capitalize(inputValue);
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: todoValue }})
        setInput('');
    }

    const checkboxHandler = (todo: ITodo, e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: ACTIONS.UPDATE_TODO, payload: { ...todo }})
    }

    return (
        <div className="todo">
            <h1>Hello Todo</h1>
            <div className="inputContainer">
                <form onSubmit={onSubmitHandler}>
                    <input type="text" 
                        placeholder="Add your todo list" 
                        value={inputValue}
                        onChange={(e) => setInput(e.target.value)}/> 
                        <button type="submit">Add</button>
                </form>            
            </div>
            <div className="todos">
                <ul>
                    {todos.map((todo: ITodo) => <li key={todo.id} className={todo.isComplete? 'highlight' : undefined}>{todo.name} 
                        <input type="checkbox" onChange={(e) => checkboxHandler(todo, e)}/>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Todo
