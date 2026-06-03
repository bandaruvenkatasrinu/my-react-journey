import { useState } from "react";

function UseStateConditionalRendering() {
    const [show, setShow] = useState(true);

    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            
            {show ? <h1>Hellow React</h1> : null}
        </div>
    )
}

export default UseStateConditionalRendering;