import React, { useReducer } from 'react'
import './Counter.css';

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

interface IActions {
    type: string,
    payload: { value: number }
}

const initialState: number = 1;

const counterReducer = (state: number = initialState, action: IActions) => {
    switch(action.type) {
        case ACTIONS.INCREMENT: 
            return state + action.payload.value;
        case ACTIONS.DECREMENT:
            if(state <= 0) return state;
            return state - action.payload.value;
            
        default:
            return state;
    }
}

const Counter: React.FC = () => {

    const [count, dispatch] = useReducer(counterReducer, initialState);

    const spanStyle = {
        border: '1px solid black',
        fontSize: '2em',
        display: 'inline-block',
        marginTop: '1em',
        padding: '1em'
    }

    return (
        <div>
            <button onClick={() => dispatch({ type: ACTIONS.DECREMENT, payload: { value: 1} })}>Decrement</button>
            <span style={spanStyle}>Total Count {count}</span>
            <button onClick={() => dispatch({ type: ACTIONS.INCREMENT, payload: { value: 1} })}>Increment</button>
        </div>
    )
}

export default Counter
