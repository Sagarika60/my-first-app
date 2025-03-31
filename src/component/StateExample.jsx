import { useState } from 'react';

function StateExample() {
    const [num, setnum] = useState(0);

    return (
        <div>
            <h2>Count : {num}</h2>
            <button onClick={() => setnum(num + 1)}>Increment</button>
            <button onClick={() => setnum(num - 1)}>Decrement</button>
        </div>
    );
}
export default StateExample;