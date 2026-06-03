import { useState } from 'react';

function TodoApp() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (task === "") return;

        setTodos([...todos, task]);

        setTask("");
    };

    const deleteTodo = (index) => {
        const updateTodos = todos.filter(
            (_, i) => i !== index
        );
        setTodos(updateTodos);
    };

    return (
        <div>
            <input type="text" placeholder="Enter text" value={task} onChange={(e) => setTask(e.target.value)} />
            
            <button onClick={addTodo}>Add</button>

            {todos.map((todo, index) => (
                <div key={index}>
                    <h3>{todo}</h3>

                    <button onClick={() => deleteTodo(index)}>Delete</button>
                </div>
            ))}
        </div>
    );

}

export default TodoApp;