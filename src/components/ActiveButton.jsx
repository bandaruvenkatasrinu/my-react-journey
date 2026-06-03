import { useState } from "react";


function ActiveButton() {
    const [active, setActive] = useState(false);

    return (
        <div>
            <button
                className={active ? "active" : "inactive"}
                onClick={() => setActive(!active)}>
                
                {active ? "Active" : "Inactive"}
            </button>
        </div>
    );
}

export default ActiveButton;