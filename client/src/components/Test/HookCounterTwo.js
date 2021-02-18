import React, {useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(initialCount)} >Reset</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Dec</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)} >Inc</button>
        </div>
    )
}

export default HookCounterTwo
