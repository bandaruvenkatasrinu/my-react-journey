import { useEffect, useState } from 'react';

function ErrorHandling() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    const getUsers = async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            const data = await response.json();

            setUsers(data);
        } catch (err) {
            setError("Something went wrong");
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            {error && <h1>{error}</h1>}

            {users.map((user) => (
                <h2 key={user.id}>{user.phone}</h2>
            )
            )}
        </div>
    );
}

export default ErrorHandling;